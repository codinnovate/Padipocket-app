'use client';

import React from 'react'
import Heading from './Heading'
import HowCard from './HowCard';
import line1 from '@/assets/line1.png';
import line2 from '@/assets/line2.png'
import Image from 'next/image';

const HowitWorks = () => {
  return (
    <div className='flex flex-col mt-[96px] gap-[2em]'>
        <Heading 
         headText='How it works' 
         subheadText='Find the item you want to Buy or Sell in the market place or create an Escrow for a stranger. 
         TradeStack holds the payment in escrow, ensuring security for both parties' />
        <div className='flex flex-col md:flex-row justify-between gap-[3em] md:gap-5'>
            <HowCard 
            bgColor='bg-[#9672FF]'
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L22 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
                }
            title='Choose Your Product'
            subtext='Find the item you want to purchase or sell. TradeStack holds the payment in escrow, ensuring security for both parties.'
            />
            <Image src={line2} width='150' height='11' className='object-contain hidden md:flex' alt='line' />
            <HowCard 
            bgColor='bg-[#4DDFFD]'
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 19C2 19 3 19 4 21C4 21 7.17647 16 10 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V13C22 10.1716 22 8.75736 21.1213 7.87868C20.2426 7 18.8284 7 16 7H10M2 15V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 13.5C16 14.3284 16.6716 15 17.5 15C18.3284 15 19 14.3284 19 13.5C19 12.6716 18.3284 12 17.5 12C16.6716 12 16 12.6716 16 13.5Z" stroke="white" stroke-width="1.5"/>
                </svg>
                }
            title='Complete the Transaction'
            subtext='Once the product is delivered, confirm its condition. TradeStack only releases the payment when both parties are satisfied.'
            />
            <Image src={line1} width='150' height='11' className='object-contain hidden md:flex' alt='line' />

            <HowCard 
            bgColor='bg-[#F2B8EC]'
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="18" r="2" stroke="white" stroke-width="1.5"/>
                <circle cx="7" cy="18" r="2" stroke="white" stroke-width="1.5"/>
                <path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 8H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 11H6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}
            title='Receive What You Ordered'
            subtext='If the item is as described, payment is completed. If there’s a problem, TradeStack helps resolve disputes.'
            />


        </div>

    </div>
  )
}

export default HowitWorks