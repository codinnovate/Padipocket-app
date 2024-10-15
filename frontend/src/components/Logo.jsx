import Link from 'next/link'
import React from 'react'


const Logo = ({color, subtitle}) => {
  return (
    <Link href='/' className={`${color === 'light' ? "text-white":"text-black"} relative min-w-fit max-w-[100px]`}>
      <h1 className='text-secondary font-bold text-2xl '>TradeStack</h1>
      <p className='-mt-[1em] font-light text-[10px] absolute right-0 mr-auto'>{subtitle}</p>
    </Link>
  )
}

export default Logo