'use client';


import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Button from './ui/button'
import {useRouter } from 'next/navigation'


const navLinks = [
    {title:"Learn", link:'#'},
    {title:"Buy & Sell", link:'/marketplace'},
    {title:"Faqs", link:'#'},
    {title:"Developers", link:'#'},
    {title:"Track a Product", link:'#'},   
    {title:"Ecommerce Website Builder", link:'/build'},   
]


const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className='w-full  sticky  top-0 bg-white '>
      <div className='flex py-2 px-3 md:px-0 max-w-6xl mx-auto w-full items-center justify-between'>

        <Logo />

        <div className='hidden md:flex items-center gap-4 '>
            {navLinks.map((link, index) => (
                <Link
                key={index}
                href={link.link}
                  className='text-gray uppercase text-[14px] hover:text-[#023047] transition-colors duration-300'>
                    {link.title}
                </Link>
            ))}
        </div>
         <Button 
         onClick={
           () => {
             router.push('/auth/login');
           }
         }
         className="hidden md:block "  title="Login" />
        <button
        onClick={() => setShow(!show)}
        className='md:hidden'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>

        </div>
        {show && (
      <div className='md:hidden absolute  border-t flex flex-col gap-3 top-0 mt-[4em] bottom-0 left-0  z-20 bg-primary w-full min-h-[20em]  h-fit p-5 rounded-b-2xl transition-all '>
        <div className='ml-auto rounded-md bg-white hover:bg-purple w-fit h-fit flex items-center justify-center'>
          <button onClick={() => setShow(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999" stroke="#141B34" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"/>
          </svg>
          </button>
        </div>
      <nav className='flex flex-col mt-[1em] gap-2  justify-between'>
      {navLinks.map((item, idx) => (
        <Link 
        onClick={() => setShow(false)}
        href={item.link} 
        key={idx} 
        className='font-medium  duration-300  text-white hover:text-green   transition-all'>
        <h2>{item.title}</h2>
        </Link>
      ))}
    </nav>
    <Button 
    onClick={
      () => {
        router.push('/auth/login');
      }
    }
    title='Create an Account'
    className='w-full bg-green'
    />
      </div>
     )}
    </div>
  )
}

export default Header