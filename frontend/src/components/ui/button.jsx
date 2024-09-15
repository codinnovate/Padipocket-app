import React from 'react'

const Button = ({title,className,type, onClick, textColor}) => {
  return (
    <button
    type={type}
     onClick={onClick}
     className={`${className} rounded-[.7em] w-[12em] items-center justify-center flex font-semibold uppercase  transition-all duration-75 ${textColor ? textColor : 'text-white'}   h-[48px] bg-primary`}>
        {title}
    </button>
  )
}

export default Button