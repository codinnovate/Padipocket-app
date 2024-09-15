'use client';
import Button from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../layout';
import axios from 'axios';
import { server } from '../../../../../server';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader';

const EscrowProcessing = () => {
  const router = useRouter();
  const [myEscrows, setMyEscrows] = useState([]);
  const { userAuth: { access_token, email } } = useContext(UserContext);

  const getEscrows = async () => {
    try {
      if (access_token) {
        const response = await axios.post(
          `${server}/escrows`,
          { email }, // Send the email in the request body
          {
            headers: {
              Authorization: `Bearer ${access_token}` // Add authorization header
            }
          }
        );
        console.log(response?.data?.escrows); // Log the response data.
        setMyEscrows(response?.data?.escrows);
      }
    } catch (error) {
      console.error('Error fetching escrow details:', error);
      throw error?.response?.data?.message || 'Failed to fetch escrow details';
    }
  };

  useEffect(() => {
    getEscrows();
  }, [access_token]);

  if (!access_token) {
    return <Loader />;
  }

  return (
    <>
      {access_token && myEscrows.length > 0 ? (
        <div className=''>
          <h2 className='text-primary uppercase font-semibold'>Your Ongoing Escrows</h2>
          <div className='flex flex-col gap-3 mt-[2em]'>
            
            {myEscrows.map((escrow) => (
              <div key={escrow._id} className='w-full flex justify-between border border-black/10 p-2 rounded-2xl'>
                <div className='flex flex-col'>
                  <h3 className='text-sm text-gray-600'>Escrow ID: {escrow._id}</h3>
                  <p className='text-sm'>Status: {escrow.status}</p>
                  <p className='text-sm'>Amount: ₦{escrow.amount}</p>
                  <p className='text-sm'>Date Created: {escrow.createdAt.substring(0, 10)}</p>
                </div>
                <div className=''>
                  <p className='text-sm'>Creator: {escrow.creator.email === email ? "You" : escrow.creator.email}</p>
                  
                  <p className='text-sm'>Second Party: {escrow.secondParty === email ? "You" : escrow.creator.email}</p>
                  {escrow.creator.email === email  && (
                    <Button
                      onClick={() => router.push(`/escrow/payment/${escrow._id}`)}
                      className='mt-[1em]'
                      title="Proceed to payment"
                    />
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-primary'>No ongoing Escrow!</h2>
            <h2 className='font-medium'>Use Escrow, Let's help you Secure Your Next Purchase</h2>
          </div>
          <div className='w-full flex flex-col items-center gap-1'>
            <Button title='Use Escrow Now' />
            <Button
              textColor='text-primary'
              className='bg-white border border-primary hover:bg-primary hover:text-white text-primary'
              title='Learn More'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EscrowProcessing;
