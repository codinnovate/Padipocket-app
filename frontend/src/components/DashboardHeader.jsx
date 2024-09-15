import React from 'react'
import Avatar from './ui/Avatar'

const DashboardHeader = ({firstName, profile_img, email}) => {
  return (
    
    <header className='flex w-full justify-between items-center'>
     <div className='flex flex-col'>
        <h2 className='text-3xl font-bold capitalize'>{firstName}</h2>
        <span className='text-[12px] text-gray -mt-[.3em]'>{email}</span>
        <h3>Great day ahead!✨🎉</h3>
     </div>
     <Avatar source={profile_img} />
    </header>
  )
}

export default DashboardHeader