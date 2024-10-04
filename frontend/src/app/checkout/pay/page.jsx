'use client';

import React from 'react'
import Logo from '@/components/Logo';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const Pay = ({amount}) => {
const router = useRouter();
  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center'>
      <Logo />
      <div className='flex flex-col justify-center gap-5 items-center px-[3em]'>
        <h1 className='text-5xl font-bold'>3000</h1>
        <p className='text-gray font-semibold text-center'>Make a single transfer from your bank to the account below before it expires</p>
      </div>
         <div className='w-xl flex justify-center gap-2 items-center flex-col bg-gray-500 rounded-2xl  h-[13em] p-5 px-[4em]'>
           <h1 className='font-semibold text-xl'>Sterling Bank</h1>
           <h2 className='text-primary font-bold text-2xl'>000012355</h2>
           <div className='rounded-2xl bg-white p-2'>
            <span>
              {/* icon time */}
            </span>
            <p>Account expires in 29mins 58secs, Do not ave or reuse the account number</p>
           </div>
         </div>
         <Button
         onClick={() => router.push('success')}
           className='w-full py-3 font-normal capitalize'
           title='I&apos;ve sent the money' />

         
    </div>
  )
}

export default Pay