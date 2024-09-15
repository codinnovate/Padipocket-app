
import React from 'react'
import Input from '../ui/Input'
import Link from 'next/link'

const CreateTransaction = () => {
  return (
    <div className='w-full max-w-lg mt-[2em] mx-auto rounded-md bg-[#021c35] p-[2em] flex flex-col gap-3'>
    <div className='flex flex-col'>
    <h2 className='text-white uppercase mb-[5px]   mt-2'>Are you the one buying or selling</h2>
    <select 
     className='p-3 ring-1 ring-[#092139] outline-none text-white placeholder:text-white caret-white bg-[#092139] rounded-md w-full'>
        <option>Buyer</option>
        <option>Seller</option>
    </select>
     

    </div>
     <Input 
    label='Enter Payment Amount'
     />
     <Input 
    label="Enter Second party's email"
     />
     <Input 
    label='Description'
     />
     <Input 
    label='Price (₦)'
    type='Number'
     />
     <Link 
     className={` hover:bg-green rounded-[.7em] w-full items-center justify-center flex font-semiboldreg uppercase text-white  transition-all duration-75  h-[48px] bg-primary`}
     href='/auth/register'>
      <h2>Start Transaction</h2>
     </Link>
   
</div>
  )
}

export default CreateTransaction