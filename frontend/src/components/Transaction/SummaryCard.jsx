import React from 'react'
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';


const SummaryCard = () => {
  return (
    <div className='p-2 flex flex-col'>
        <h2 className='text-white text-xl font-bold uppercase'>Item Summary</h2>
        <div className='bg-primary rounded-xl p-2'>
            <p className='text-white text-sm'>Product Amount</p>
            <h3 className='text-white text-xl font-bold'>1,000</h3>
        </div>
        <div className='bg-primary rounded-xl p-2'>
            <p className='text-white text-sm'>Purchasing Account</p>
            <div className=''>
                <Avatar />
                <p>@adeyemis710</p>
            </div>
        </div>
        <div className='border border-white/15'>
        <div className='w-full flex justify-between border border-b'>
            <p className='text-white text-sm'>Sub Total</p>
            <h3 className='text-white text-xl font-bold'>1000</h3>
        </div>
        <div className='w-full flex justify-between border border-b'>
            <p className='text-white text-sm'>Discount</p>
            <h3 className='text-white text-xl font-bold'>-0.0</h3>
        </div> 
        <div className='w-full flex justify-between border border-b'>
            <p className='text-white text-sm'>Grand Total</p>
            <h3 className='text-white text-xl font-bold'>2000</h3>
        </div>
        <Button 
        className='' 
        title='Proceed to make Payment'
        />

        </div>
    </div>
  )
}

export default SummaryCard