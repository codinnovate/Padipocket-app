import React from 'react'
import Logo from '../Logo';
import Button from '../ui/button';


const Pay = ({amount}) => {
  return (
    <div className='flex flex-col gap-4'>
      <Logo />

        <h1>{amount}</h1>
        <p className='text-gray font-semibold'>Make a single transfer from your bank to the account below before it expires</p>
         <div className='w-xl bg-gray-500 rounded-2xl'>
           <h1>Sterling Bank</h1>
           <h2 className='text-primary font-bold'>000012355</h2>
           <div className='rounded-2xl'>
            <span>
              {/* icon time */}
            </span>
            <p>Account expires in 29mins 58secs, Do not ave or reuse the account number</p>
           </div>
         </div>
         <Button  title='I&apos;ve sent the money' />

         <span>
          <h1>Secured by     <Logo />          </h1>
         </span>
    </div>
  )
}

export default Pay