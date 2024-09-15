import React from 'react'

const Input = ({placeholder, type, label, name, onChange, value}) => {
  return (
    <div className='w-full'>
     {label && (
         <h2 className='text-white uppercase mb-[5px]   mt-2'>{label}</h2>
     )}
    <input
    name={name}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type ? type : 'text'}
    className='p-3 ring-1 ring-[#092139] outline-none text-white placeholder:text-white caret-white bg-[#092139] rounded-md w-full'
    />
    </div>
  )
}

export default Input