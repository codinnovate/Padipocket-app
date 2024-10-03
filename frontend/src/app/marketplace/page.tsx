import Footer from '@/components/Footer'
import Header from '@/components/Marketplace/Header'
import React from 'react'


const Marketplace = () => {
  return (
    <div className='flex flex-col'>
        <Header />
        <main className='max-w-6xl mx-auto p-2'>
          <div className='flex flex-col w-full'>
          <h2 className='text-2xl'>From Tayo&apos;s Shop</h2>
          <h2>From Aina&apos;s Shop</h2>
          <h2>From Kenny&apos;s Shop</h2>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Marketplace