'use client';


import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Button from './ui/button'
import {useRouter } from 'next/navigation'


const navLinks = [

    {title:"Learn", link:'#'},
    {title:"Buy & Sell", link:'/marketplace'},
    {title:"Faqs", link:'#'},
    {title:"Bills Payments", link:'#'},
    {title:"Developers", link:'#'},
    {title:"Track a Product", link:'#'},   
    {title:"To Acquire", link:'#'},   
]
const Header = () => {
  const router = useRouter();
  return (
    <div className='w-full  sticky top-0 bg-white '>
      <div className='flex py-2 px-3 md:px-0 max-w-6xl mx-auto w-full items-center justify-between'>


        <Logo />

        <div className='hidden md:flex items-center gap-4 '>
            {navLinks.map((link, index) => (
                <Link
                key={index}
                href={link.link}
                  className='text-gray text-[14px] hover:text-[#023047] transition-colors duration-300'>
                    {link.title}
                </Link>
            ))}
        </div>
         <Button 
         onClick={
           () => {
             router.push('/dashboard')
           }
         }
         className="hidden md:block "  title="Login" />
        <button className='md:hidden'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>

        </div>
    </div>
  )
}

export default Header