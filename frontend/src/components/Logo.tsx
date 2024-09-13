import Link from 'next/link'
import React from 'react'

const Logo = ({color}) => {
  return (
    <Link href='/'>
        <h2 className={`${color ? color : 'text-primary'}  font-bold text-xl`}>PadiPocket.</h2>
    </Link>
  )
}

export default Logo