import React from 'react'

const Heading = ({headText, subheadText}) => {
  return (
    <div className='max-w-3xl mx-auto w-full flex flex-col items-center justify-center gap-4'>
        <h2 className='text-primary text-center font-bold text-3xl '> {headText} </h2>
        <h3 className='text-gray text-center'>{subheadText}</h3>
    </div>
  )
}

export default Heading