'use client';

import React from 'react'
import Logo from '@/components/Logo';
import Button from '@/components/ui/button';
import Image from 'next/image';
import paidIcon from '@/assets/paid.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Success = () => {
  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center'>
      <div className='flex flex-col justify-center gap-5 items-center px-[3em]'>
        <Image src={paidIcon}
         width='100'
          height='100'
            alt='paid icon'/>
        <p className='text-green font-semibold text-center'>Payment successful</p>
      </div>
         <div className='min-w-xl w-full flex justify-center gap-2 items-center flex-col bg-gray-500 rounded-2xl  h-[13em] p-5 px-[4em]'>
           <h1 className='font-semibold text-xl text-yellow-500'>Now Awaiting Seller</h1>
           <h2 className='text-primary  text-2xl'>Product Delivery and Confirmation</h2>
           <div className='flex flex-col gap-2 w-full font-semibold rounded-2xl bg-white p-2'>
            <div className='flex w-full items-center   justify-between'>
              <h1 className='text-gray-600'>Time Left</h1>
              <p className=' text-red-600'>2Days:04hrs:05</p>
            </div>
            <div className='flex w-full items-center justify-between'>
              <h1 className='text-gray-600'>Escrow Amount & Fee</h1>
              <p className=''>₦3030</p>
            </div>
            <div className='flex w-full items-center justify-between'>
              <h1 className='text-gray-600'>Product Details</h1>
              <p className=' '>Apple watch with 2 catoons</p>
            </div>
           
         </div>
         </div>
         <Button
           onClick={() => router.push('completed')}
           className='w-full py-3 font-normal capitalize'
           title='I have received the product' />
          <Link href='/help' >
          <h2 className='font-semibold text-primary'>
          Need Help?
          </h2>
          </Link>

         
    </div>
  )
}

export default Success