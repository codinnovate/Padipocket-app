import Image from 'next/image'
import React from 'react'
import pic from '@/assets/pic.jpg';


const Avatar = () => {
  return (
    <Image 
     src={pic}
     className='object-cover rounded-full w-10 h-10 p-1 border-2 border-primary' 
     alt='avatar'
      />
  )
}

export default Avatar