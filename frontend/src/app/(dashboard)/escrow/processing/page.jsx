'use client';
import Button from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context';
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
  async function acceptEscrow(escrowID) {
   await  axios.put(`${server}/escrow/${escrowID}/accept`, {}, {
      headers: {
        Authorization: `Bearer ${access_token}` // Add authorization header
      }
    })
     .then((response) => {
        console.log(response);
        router.push('/escrow/processing');
        window.location.reload();
      })
     .catch((error) => {
        console.error('Error accepting escrow:', error);
        throw error?.response?.data?.message || 'Failed to accept escrow';
      });
  }
  function payWithPaystack(amount, escrowID) {
    const handler = PaystackPop.setup({
      key: 'pk_test_6b10c305ac9c9ff3601b7be8b88bd0addd1d2e68', // Replace with your public key
      email: email,
      amount:amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
      currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
      callback: function() {
       acceptEscrow (escrowID)
      },
      onClose: function() {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  }
  return (
    <>
      {access_token && myEscrows.length > 0 ? (
        <div className=''>
          <h2 className='text-primary uppercase font-semibold'>Your Ongoing Escrows</h2>
          <div className='flex flex-col gap-3 mt-[2em]'>
            
            {myEscrows.map((escrow) => (
              <div key={escrow._id} className='w-full flex flex-col gap-5 justify-between border border-black/10 p-2 rounded-2xl'>
                <div className='flex justify-between'>
                  <div className=''>
                  <h3 className='text-sm text-gray-600'>Escrow ID: {escrow._id}</h3>
                  <div className=' flex items-center'>
                  <p className='text-sm'>Status:
                    </p>
                  <p className={`${escrow.status = 'processing' ? "bg-green" :"bg-red-600"} text-white px-1 rounded-md`}>{escrow.status}</p>
                  </div>
                  <p className='text-sm'>Amount: ₦{escrow.amount}</p>
                  <p className='text-sm'>Date Created: {escrow.createdAt.substring(0, 10)}</p>
                  <div className='flex items-center'>
                    <p className='text-sm'> Your Role: </p>
                    <p classsName='font-bold uppercase text-red'>{escrow.creator.email === email ? "Seller": "Buyer"}</p>
                    </div>
                   </div>
                  <div className=''>
                  <p className='text-sm'>Creator: {escrow.creator.email === email ? "You" : escrow.creator.email}</p>
                  
                  <p className='text-sm'>Second Party: {escrow?.secondParty === email ? "You" : escrow.secondParty}</p>
                  
                </div>
                </div>
                <div className='ml-3 flex flex-col'>
                  <p className='mt-5 uppercase font-bold'>Escrow Terms</p>
                  <p className='text-[12px] text-red-500'>Please Ensure you accept the terms of this transaction before proceeding to payment</p>
                  <p>{escrow?.description}</p>
                  <p className='text-sm text-green'>This Product will be handled by Sendstack</p>
                  
                </div>
                {escrow.creator.email === email && escrow.status == 'processing' &&(
                    <Button
                      className='mt-[1em] w-full'
                      title="Product Ready for Shipment" />)
                      }
                {escrow.creator.email !== email  && (
                    <Button
                      onClick={() => payWithPaystack(escrow?.amount, escrow?._id)}
                      className='mt-[1em] w-full'
                      title="Accept Escrow Terms and Proceed to Payment"
                    />
                  )}
                
              </div>
            ))}

          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-primary'>No ongoing Escrow!</h2>
            <h2 className='font-medium'>Use Escrow, Let&apos;s help you Secure Your Next Purchase</h2>
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
