import React from 'react'
import Input from './ui/Input'
import Button from './ui/button'

const countries = [
    {title:'Nigeria'},
    {title:'South Africa'},
    {title:'Ghana'},
    {title:'Kenya'},
]
const Demo = () => {
  return (
    <div className='mt-[5em] flex flex-col gap-3 max-w-3xl mx-auto '>
        <div className='flex items-center justify-center gap-1'>
        <h1 className='text-primary font-semibold'>Demo for </h1>
            <select className=' border border-primary font-semibold outline-none  p-1'>
                {countries.map((item, idx) => {
                    return (
                    <option key={idx}>
                        <h1 className='text-primary font-bold'>{item.title}</h1>
                    </option>
                    )
                    
                })}
            </select>
        </div>
        <div className='flex flex-col'>
            <h2 className='text-4xl font-bold text-center text-primary'>Padipocket Escrow Demo</h2>
            <h3 className='text-gray text-xl text-center mt-2'>For this Demo, we assumed you have an active account with a sum of 100,000 Naira in your account. You can use this to test the escrow service.</h3>

        </div>
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

             <Button
              className='w-full rounded-md hover:bg-[#3bb85d] font-semibold'
              title='Start Transaction' />
        </div>
    </div>
  )
}

export default Demo