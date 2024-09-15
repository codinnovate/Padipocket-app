import React from 'react'
import CreateTransaction from './Forms/CreateTransaction';



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
       <CreateTransaction />
    </div>
  )
}

export default Demo