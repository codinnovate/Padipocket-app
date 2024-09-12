import React from 'react'

const Button = ({title, className}) => {
  return (
    <button className={`${className} rounded-2xl text-sm w-[167px] items-center text-white h-[48px] bg-primary`}>{title}</button>
  )
}

export default Button