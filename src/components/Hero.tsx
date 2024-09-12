import React from 'react'
import playstore from '@/assets/playstore.png';
import appstore from '@/assets/appstore.png';
import Image from 'next/image';
import woman from '@/assets/woman.png';


const Hero = () => {
  return (
    <div className='flex w-full flex-col md:flex-row md:justify-between items-center mt-[64px] gap-5'>
        <div className='flex  flex-col gap-4 md:w-3/5'>
            <h2 className='text-4xl font-bold text-primary'>Let's be the guy <br/> in-between so you can Buy and Sell Safely</h2>
            <h3 className='text-gray'>Effortlessly manage your purchases with our escrow solution. Protect your payments, reduce scams, and ensure safe transactions with flexible timeframes and AI-driven security.</h3>
            <div className='flex gap-2'>
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

            </div>
        </div>
        <div className='flex md:w-4/7 mt-[64px] md:mt-0 p-5 md:p-0'>
            <Image src={woman} width='592' height='512' alt='woman holding her phone' />
        </div>
    </div>
  )
}

export default Hero