import React from 'react'
import Avatar from './ui/Avatar'

const DashboardHeader = ({firstName}) => {
  return (
    
    <header className='flex w-full justify-between items-center'>
     <div className=''>
        <h2 className='text-3xl font-bold'>{firstName}</h2>
        <h3>Great day ahead!✨🎉</h3>
     </div>
     <Avatar />
    </header>
  )
}

export default DashboardHeader