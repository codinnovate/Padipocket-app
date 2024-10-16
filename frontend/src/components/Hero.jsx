import React from 'react'
import Image from 'next/image';
import woman from '@/assets/woman.png';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='flex w-full flex-col md:flex-row items-center md:justify-between  mt-[64px] gap-5'>
        <div className='flex  flex-col gap-4 md:w-3/5'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary'>Buy and Sell with Confidence – TradeStack Ensures You Get What You Paid For</h2>
            <h3 className='text-gray'>Say goodbye to the fear of being scammed. With TradeStack, your money is safe until you confirm delivery. Transact with peace of mind, knowing that we’ve got your back..</h3>
            {/* <div className='flex gap-2'>
                <Image
                 src={playstore}
                 width='132'
                 height='44'
                 alt='playstore'
                 className='object-fit'
                 />
                 <Image
                 src={appstore}
                 width='132'
                 height='44'
                 alt='playstore'
                 className='object-fit max-w-full'
                 />

            </div> */}
            <div className='flex gap-2 items-center'>
                <Link
                className='rounded-[.7em] w-[12em] items-center justify-center flex font-semibold uppercase  transition-all duration-75   h-[48px] bg-primary'
                href='/auth/register'>
                <div className='flex items-center text-white gap-3'>
                Get started
                 <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11.9998L4 11.9998" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
                </div>
                </Link>
              <h2 className='items-center flex font-semibold'>
                 Secure Your Next Purchase
                </h2>
            </div>
        </div>
        <div className='flex md:w-4/9  mt-[64px] md:mt-0 p-5 md:p-0'>
            <Image src={woman} width='592' height='450' alt='woman holding her phone' />
        </div>
    </div>
  )
}

export default Hero