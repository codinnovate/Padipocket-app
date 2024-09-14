import LoginForm from '@/components/Forms/LoginForm'
import React from 'react'
import Link from 'next/link';


const Login = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl text-center font-bold text-primary-200'>Login to Your Account</h2>
            <h3 className='text-center text-sm text-gray font-medium'>Continue Making Secure transaction when you buy with strangers</h3>
        </div>
        <div className='mt-[3em] w-full'>
            <LoginForm />
        </div>
        <div className=''>
            <Link href='/auth/register' className='text-sm text-center text-gray-400 hover:text-primary-200'>don't have an account? <span className='text-primary-200'>Register </span> </Link>
        </div>
    </div>
  )
}

export default Login