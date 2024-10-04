'use client';


import React from 'react'
import Button from '@/components/ui/button';
import Image from 'next/image';
import checked from '@/assets/check.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Completed = ({amount}) => {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center'>
      <div className='flex flex-col justify-center gap-5 items-center px-[3em]'>
        <Image src={checked}
         width='100'
         height='100'
         alt='paid icon'/>
        <h1 className='text-white font-medium text-center bg-green p-[2px] rounded-md'>Transaction Completed</h1>
        <h1 className='font-semibold text-xl text-black'>Saturday, october 26, 2024, 12:24 PM</h1>
      </div>
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
         <Button
           className='w-full py-3 font-normal capitalize'
           title='Done' />
          <Link href='/help' >
          <h2 className='font-semibold text-primary'>
          Need Help?
          </h2>
          </Link>

         
    </div>
  )
}

export default Completed