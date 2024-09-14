import { RegisterForm } from '@/components/Forms/RegisterForm'
import React from 'react'
import Link from 'next/link';


const Register = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl text-center font-bold text-primary-200'>Create a Secure Account</h2>
            <h3 className='text-center text-sm text-gray font-medium'> Safe, Smart, Secure Transactions for E-Commerce and Beyond</h3>
        </div>
        <div className='mt-[3em] w-full'>
            <RegisterForm />
        </div>
        <div className=''>
            <Link href='/auth/login' className='text-sm text-center text-gray-400 hover:text-primary-200'>Already have an account? <span className='text-primary-200'>Log in </span> </Link>
        </div>
    </div>
  )
}

export default Register