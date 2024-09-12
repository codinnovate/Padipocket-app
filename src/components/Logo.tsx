import React from 'react'

const Logo = ({color}) => {
  return (
    <div>
        <h2 className={`${color ? color : 'text-primary'}  font-bold text-xl`}>Padipocket</h2>
    </div>
  )
}

export default Logo