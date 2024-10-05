'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/components/Logo';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import timeIcon from '@/assets/waiting.png';


const Pay = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center'>
      <Logo />
      <div className='flex flex-col justify-center gap-5 items-center px-[3em]'>
        <h1 className='text-5xl font-bold'>₦3000</h1>
        <p className='text-gray font-semibold text-center'>Make a single transfer from your bank to the account below before it expires</p>
      </div>
      <div className='w-xl flex justify-center gap-2 items-center flex-col bg-gray-500 rounded-2xl  h-[13em] p-5 px-[4em]'>
        <h1 className='font-semibold text-xl'>Sterling Bank</h1>
        <h2 className='text-primary font-bold text-2xl'>000012355</h2>
        <div className='min-w-full flex flex-col justify-center items-center rounded-2xl bg-white p-2'>
          <div className='w-full flex'>
          <Image src={timeIcon} alt='time'  width='30' height='20' className='w-[32px] h-[32px]' />
          <h1 className='flex ml-4 items-center text-primary font-semibold'>Account expires in {formatTime(timeLeft)}
          </h1>
          </div>
          <p className='font-medium text-red-500 mt-2  text-[12px]'>Do not save or reuse the account number</p>
        </div>
      </div>
      <Button
        onClick={() => router.push('success')}
        className='w-full py-3 font-normal capitalize'
        title='I&apos;ve sent the money' 
      />
    </div>
  );
};

export default Pay;
