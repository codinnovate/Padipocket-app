import React from 'react'
import securedby from '@/assets/secure.png';
import Image from 'next/image';
import Logo from '@/components/Logo';


const SecuredByFooter = () => {
  return (
    <div className='flex items-center justify-center gap-1 mt-4 bg-gray-500 w-fit p-2 rounded-2xl border border-black/10'>
        <Image src={securedby} alt='secure' width='32' height='32' />
          <h1 className='font-bold'>
            Secured by     
        </h1>
        <Logo /> 
     </div >
  )
}

export default SecuredByFooter