'use client'

import React, { useState } from 'react'
import FormInput from '../ui/FormInput'
import Button from '../ui/button'
import axios from 'axios'
import { server } from '../../../server'
import { storeInSession } from '@/app/lib/session'
import { useRouter } from 'next/navigation'

const CreateEscrowForm = () => {
  const [role, setRole] = useState('');
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('');

  const router = useRouter()

  function getTotalPrice (price) {
    const fee = price * 1.12
    return fee.toFixed(2);
  }
  async function handleEscrow (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/signin`, {email, password}); // Corrected API endpoint
      console.log(response.data);
      const data = response.data;
      storeInSession("user", JSON.stringify(data))    
      router.push('/dashboard')
    } catch (error) {
      alert(error?.response?.data?.error)
      console.error(error)
    }
  }

  return (
   <form className='flex flex-col gap-5 '>
    <h2 className='text-primary uppercase font-semibold mt-[20]
    '>Create an Escrow in Seconds</h2>
    <h2 className='text-sm -mb-4 capitalize font-semibold text-gray'>Are you the buyer or the seller ?</h2>
    <h2 className='text-[10px] -mb-5 capitalize  font-semibold text-red-500'>Please Note The Buyer will be charged transactions fee</h2>
    <select 
        className='bg-gray-100  rounded-[.3em]  outline-none border border-gray-100 p-3 w-full'
    >
      <option>Seller</option>
      <option>Buyer</option>
    </select>
    <h2 className='text-sm -mb-4 capitalize font-semibold text-gray'>Will you be needing a dispatch rider ?</h2>
    <select 
        className='bg-gray-100  rounded-[.3em]  outline-none border border-gray-100 p-3 w-full'
    >
      <option>Yes</option>
      <option>No</option>
    </select>
    <FormInput  
    name='secondParty'
    label='Second Party&apos;s Email Address'
    />
    <h2 className='text-sm -mb-4 capitalize font-semibold text-gray'>Description ?</h2>
    <textarea 
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    placeholder='Whats your transaction about'
    className='bg-gray-100  rounded-[.3em]  outline-none border border-gray-100 p-3 w-full'>

      {desc}
    </textarea>
   
    <FormInput 
    name='Price' 
    value={price}
    type='Number'
    onChange={(e) => setPrice(e.target.value)}
    label='Price' />
    {price && (
  <p>Total Price (including Buyer Protection Fee): ₦<strong>{getTotalPrice(price)}</strong></p>
    )}
    <Button
    onClick={handleEscrow}
    className='w-full rounded-[.3em] hover:bg-green'
    title='Start Transaction' />
   </form>
  )
}

export default CreateEscrowForm