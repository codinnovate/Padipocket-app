'use client'

import React, { useState } from 'react'
import FormInput from '../ui/FormInput'
import Button from '../ui/button'
import axios from 'axios'
import { server } from '../../../server'
import { storeInSession } from '@/app/lib/session'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const LoginForm = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()


  async function handleLogin (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/signin`, {email, password}); // Corrected API endpoint
      const data = response.data;
      console.log(data)
      storeInSession("user", JSON.stringify(data))    
      router.push('/dashboard')
    } catch (error) {
      toast.error(error?.response?.data?.error)
      console.error(error)
    }
  }

  return (

   <form className='flex flex-col gap-5'>
    <Toaster />
    <FormInput 
    value={email}
    name='email' 
    onChange={(e) => setEmail(e.target.value)}
    label='Email Address' />
    <FormInput 
    name='password' 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    label='Password' />
    <Button
    onClick={handleLogin}
    className='w-full rounded-[.3em] hover:bg-green'
    title='LOG IN' />
   </form>
  )
}

export default LoginForm