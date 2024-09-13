import React from 'react'

const Button = ({title, className, onClick, textColor}) => {
  return (
    <button onClick={onClick} className={`${className} rounded-2xl w-[12em] items-center justify-center flex font-medium capitalize  transition-all duration-75 ${textColor ? textColor : 'text-white'}   h-[48px] bg-primary`}>{title}</button>
  )
}

export default Button