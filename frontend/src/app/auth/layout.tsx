import Logo from '@/components/Logo'
import React from 'react'

const Authlayout = ({children}) => {
  return (
<div className=' w-full p-2 h-screen bg-primary-100'>
<div className='flex flex-col max-w-[28em] mx-auto justify-center items-center pt-[3em] gap-[2em]'>
        <Logo  
        color='light' />
        <div className='bg-white min-h-screen w-full rounded-3xl p-[2em] mb-[1em] '>
        {children}
        </div>
  </div>
  
    </div>
  )
}

export default Authlayout