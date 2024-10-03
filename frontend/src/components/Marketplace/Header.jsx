'use client';
import React, { useContext, useState } from 'react'
import Logo from '../Logo'
import {useRouter } from 'next/navigation'
import Searchbar from '../ui/Searchbar';
import Avatar from '../ui/Avatar'
import { UserContext } from '@/context';



const Header = () => {
  const { userAuth:{ firstName, profile_img, wallet}} = useContext(UserContext);
  return (
    <div className='w-full  sticky  top-0 bg-white '>
      <div className='flex py-2 px-3 md:px-0 max-w-6xl mx-auto w-full items-center  gap-5 justify-between'>
        <Logo
        subtitle='Marketplace'
        />
          <Searchbar />
        <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
         <Avatar  
         profile_img={profile_img}
         />
            <p className='text-gray'>Hello, {firstName}</p>  
        </div>
        <div className='w-[1px] h-6 bg-gray' />
        <div className='flex'>
          <span className='text-gray'>₦{wallet}.00</span>
        </div>
        </div>
        </div>
         
    </div>
  )
}

export default Header