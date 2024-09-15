import Image from 'next/image'
import React from 'react'

const HowCard = ({bgColor, icon, title, subtext}) => {
  return (
    <div className='flex flex-col items-center justify-center max-w-sm mx-auto '>
        <div className={`w-[50px] h-[50px] rounded-2xl ${bgColor} flex items-center justify-center`}>
            {icon}
        </div>
        <h2 className='text-center text-xl text-primary font-bold mt-4'>
            {title}
        </h2>
        <h3 className='text-gray text-sm font-medium text-center'>{subtext}</h3>

        
    </div>
  )
}

export default HowCard