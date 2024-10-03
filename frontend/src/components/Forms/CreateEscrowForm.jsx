'use client'

import React, { useContext, useState } from 'react'
import FormInput from '../ui/FormInput'
import Button from '../ui/button'
import axios from 'axios'
import { server } from '../../../server'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context';
import toast, { Toaster } from 'react-hot-toast'

const CreateEscrowForm = () => {
  const { userAuth: { access_token } } = useContext(UserContext);

  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('');
  const [secondParty, setSecondParty] = useState('')
  const [dispatchRider, setDispatchRider] = useState(false); // To store true or false for dispatch rider
  const router = useRouter()

  function getTotalPrice(price) {
    const fee = price * 1.03
    return fee.toFixed(2);
  }

  async function handleEscrow(e) {
    e.preventDefault();
    try {
      // Determine if the role is 'Buyer'

      const response = await axios.post(
        `${server}/escrow`, 
        { 
          secondParty, 
          description: desc, 
          needsDispatch:dispatchRider, 
          amount: price 
        },
        { 
          headers: { 
            Authorization: `Bearer ${access_token}` // Passing the access token in headers
          }
        }
      );

      console.log(response.data);
      toast.success("Escrow Created Successfully, Awaiting second party agreement ")
      router.push('/escrow/processing')
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.error(error);
    }
  }

  return (
    <form className='flex flex-col gap-5 ' onSubmit={handleEscrow}>
      <Toaster />
      <h2 className='text-primary uppercase font-semibold mt-[20]'>
        Create an Escrow in Seconds
      </h2>
      <h2 className='text-[10px] -mb-5 capitalize font-semibold text-red-500'>
        Please Note The Buyer will be charged transactions fee (You)
      </h2>

      <h2 className='text-sm -mb-4 capitalize font-semibold text-gray'>
        Will you be needing a dispatch rider?
      </h2>

      {/* Dispatch Rider Select */}
      <select
        className='bg-gray-100 rounded-[.3em] outline-none border border-gray-100 p-3 w-full'
        value={dispatchRider}
        onChange={(e) => setDispatchRider(e.target.value === 'true')} // Convert "Yes" to true and "No" to false
      >
        <option value="">Select Dispatch Rider</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <FormInput  
        name='secondParty'
        value={secondParty}
        onChange={(e) => setSecondParty(e.target.value)}
        label="Second Party's Email Address"
      />

      <h2 className='text-sm -mb-4 capitalize font-semibold text-gray'>
        Description
      </h2>
      <textarea 
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder='What is your transaction about'
        className='bg-gray-100 rounded-[.3em] outline-none border border-gray-100 p-3 w-full'
      />

      <FormInput 
        name='Price' 
        value={price}
        type='Number'
        onChange={(e) => setPrice(e.target.value)}
        label='Price'
      />

      {price && (
        <p>Total Price (including Buyer Protection Fee): ₦<strong>{getTotalPrice(price)}</strong></p>
      )}

      <Button
        className='w-full rounded-[.3em] hover:bg-green'
        title='Start Transaction'
      />
    </form>
  )
}

export default CreateEscrowForm;
