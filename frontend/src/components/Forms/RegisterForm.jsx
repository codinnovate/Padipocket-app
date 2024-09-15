'use client';

import FormInput from '../ui/FormInput'
import Button from '../ui/button'
import {server} from '../../../server';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { storeInSession } from '@/app/lib/session';
import { Toaster, toast } from 'react-hot-toast';

export function RegisterForm () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter();


  async function handleRegister (e){
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/signup`, {firstName, lastName, password, email}); // Corrected API endpoint
      console.log(response.data);
      const data = response.data
      storeInSession("user", JSON.stringify(data))    
      router.push('/dashboard')
      toast.success(response.data.message)
      
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.error  || error?.message)
    }
    
  }


  return (
   <form 
   className='flex flex-col gap-5'>
    <Toaster />
    <FormInput
      name='firstName'
      label='First Name'
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      />
    <FormInput 
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    name='lastName' 
    label='Last Name' />
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
    onClick={handleRegister}   
    className='w-full rounded-[.3em] hover:bg-green'
    title='CREATE ACCOUNT' />
   </form>
  )
}
