import React from 'react'
import Image from 'next/image';


const ECard = ({title, src}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 '>
      <span className='border border-black/10 rounded-full p-5'>
        <Image src={src} alt={title} width={50} height={50}  className=''/>
      </span>

        <h3 className='text-black text-sm font-medium'>{title}</h3>
    </div>
  )
}

export default ECard