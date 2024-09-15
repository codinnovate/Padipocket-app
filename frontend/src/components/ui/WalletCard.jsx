import React from 'react'

const WalletCard = ({amount, title, icon, bgColor}) => {
  return (
    <div className={`${bgColor ? bgColor :'bg-primary'} rounded-[1.8em]  w-full h-[150px] flex  pl-[3em]  items-center `}>
     <span>
        {icon}
     </span>
     <div className='ml-3'>
        <h2 className='text-xl capitalize font-semibold text-gray-500'>{title} Balance</h2>
        <h1 className='text-3xl font-bold text-white'>₦{amount}</h1>
     </div>
            
    </div>
  )
}

export default WalletCard