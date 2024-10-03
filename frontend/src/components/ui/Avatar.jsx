import Image from 'next/image'
import React from 'react'
import pic from '@/assets/pic.jpg';


const Avatar = ({profile_img}) => {
  return (
    <Image 
     src={profile_img ? profile_img : pic}
     className='object-cover rounded-full w-10 h-10 p-1 border-2 border-primary' 
     alt='avatar'
     width='40'
     height='40'
      />
  )
}

export default Avatar