import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import PayBills from '@/assets/paybills.png';
import sec from '@/assets/sec.png'
import cost from '@/assets/cost.png';
import supporteds from '@/assets/supporteds.png';


const Features = () => {
  return (
    <div className='flex flex-col gap-[64px]'>

    <div className='mt-[5em] flex flex-col'>
      <Heading   
       headText='Safe, Smart, Secure Transactions'
       subheadText='Make every penny count, Spend smarter, lower your bills, get cashback on everything you buy, and unlock credit to grow your business.'
       />
       <div className='mt-[64px] flex flex-col md:flex-row md:items-center  md:justify-between w-full'>
        <div className='flex flex-col  rounded-2xl bg-[#DFF4FF]  md:flex-row w-full  justify-between md:w-[60%] px-[48px] pt-[48px] h-fit  md:h-[400px]'>
         <div className='flex flex-col gap-3'>
          <h2 className='text-primary font-semibold text-3xl'>Pay with TradeStack, Quick, Secure and Easy</h2>
          <h3 className='text-gray font-medium'>Paying your bills  has never been easier. Whether you are paying for electricity or internet, TradeStack gets it done within seconds.</h3>
         </div>
          <Image src={PayBills} alt='Pay Bills'className=' object-contain w-[300px] md:w-[400px] mt-[4em]' />
        </div>
        <div className="w-full  md:w-[35%] h-[400px] bg-[#EAECFF] p-[36px] rounded-2xl mt-[64px] md:mt-0">
          <Image src={sec} alt='security' width='96' height='96'/>
          <h2 className='text-3xl font-semibold text-primary mt-[36px]'>Bank Level Security</h2>
          <h3 className='text-gray mt-3'>Your money is 100% safe and secure on TradeStack. No hassles, no glitches, get access to your money anytime.</h3>
        </div>
       </div>
    </div>
    <div className=' flex flex-col'>
     <div className='md:mt-[64px] flex flex-col md:flex-row md:items-center  md:justify-between w-full'>
      <div className="w-full  md:w-[35%] h-[400px] bg-[#FFF4E2] p-[36px] rounded-2xl ">
        <Image src={cost} alt='security' width='96' height='96'/>
        <h2 className='text-3xl font-semibold text-primary mt-[36px]'>Cost reduction</h2>
        <h3 className='text-gray mt-3'>TradeStack reduced payments maintenance and processing fees. No hidden fees</h3>
      </div>
      <div className='flex flex-col mt-[64px] md:mt-0 rounded-2xl bg-[#F3F6F8]  md:flex-row w-full  justify-between md:w-[60%] px-[48px] pt-[48px] h-fit  md:h-[400px]'>
       <div className='flex flex-col gap-3'>
        <h2 className='text-primary font-semibold text-3xl'>Send, recieve and Exchange money</h2>
        <h3 className='text-gray font-medium'>Transfers, payments all work on TradeStack. Get your alert message immediately after a completed transaction. .</h3>
       </div>
        <Image src={supporteds} alt='Pay Bills'className=' object-contain w-[300px] md:w-[400px] mt-[4em]' />
      </div>
     </div>
  </div>
        
  </div>
  )
}

export default Features