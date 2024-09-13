import React from 'react'
import Avatar from './ui/Avatar'

const DashboardHeader = () => {
  return (
    
    <header className='flex w-full justify-between items-center'>
     <div className=''>
        <h2 className='text-3xl font-bold'>Samuel</h2>
        <h3>Great day ahead!✨🎉</h3>
     </div>
     <Avatar />
    </header>
  )
}

export default DashboardHeader