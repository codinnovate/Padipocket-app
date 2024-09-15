import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black/20 flex justify-center items-center'>
        <h2 className='text-primary-100'>Loading............</h2>
    </div>
  )
}

export default Loader