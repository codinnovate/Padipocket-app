import React from 'react'

const EscrowCard = () => {
  return (
    <div
    className='flex  border border-black/10 rounded-2xl w-full'
    >
        <div className='flex-1 border-r border-black/10 px-4 py-4'>
            <h3>Transaction ID</h3>
            <p>1234567890</p>
        </div>
        <div className='flex-1 border-black/10 px-4 py-4'>
            <h3>Date</h3>
            <p>June 12, 2022</p>
        </div>
        <div className='flex-1 border-black/10 px-4 py-4'>
            <h3>Status</h3>
            <p>Pending</p>
        </div>
        
    </div>
  )
}

export default EscrowCard