import Button from '@/components/ui/button'
import React from 'react'

const CreateEscrow = () => {
  return (
    <div className='flex flex-col items-center gap-4  '>
        <div className='flex flex-col items-center '>
        <h2 className='text-2xl font-bold text-primary'>Start Using Escrow!</h2>
        <h2 className='font-medium'>Use Escrow, Let's help you Secure Your Next Purchase</h2>
        </div>
        <div className='w-full flex flex-col items-center gap-1'>
        <Button
         title='Use Escrow Now' />
        <Button
         textColor='text-primary'
         className='bg-white border border-primary hover:bg-primary hover:text-white  text-primary'
         title='Learn More' />
         </div>
        
    </div>
  )
}

export default CreateEscrow