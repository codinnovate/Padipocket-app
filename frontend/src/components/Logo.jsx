import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logolight from '@/assets/logo-light.png';
import logodark from '@/assets/logo-dark.png'

const Logo = ({color}) => {
  return (
    <Link href='/'>
      <Image src={color === 'light' ? logolight : logodark} alt='padipocket' className='w-[200px] object-cover' />
    </Link>
  )
}

export default Logo