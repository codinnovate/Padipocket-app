'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const escrowLinks = [
  {title:'My Escrows', href:'/escrow/create'},
  {title:'On going', href:'/escrow/processing'},
  {title:'Completed', href:'/escrow/completed'},
]
const EscrowLayout = ({children}) => {
  const pathname = usePathname();
  return (
    <div className='flex flex-col gap-[2em]'>
      <div className=''>
        <h2 className='text-3xl  font-bold'>Escrow</h2>
        <h3>Escrow helps when you're making transactions with a stranger</h3>
     </div>
     <div className='border border-black/10 rounded-2xl w-full min-h-[400px]'>
      <header className='flex items-center justify-evenly w-full border-black/10 border-b px-4 pt-4'>
      {escrowLinks.map((item, idx) => (
       <Link
       key={idx} 
       href={item.href} 
       className={`flex flex-col items-center`}
       >
      <h2 className='text-primary font-semibold capitalize'>{item.title}</h2>
      <span className={`${pathname === item.href ? 'bg-primary-100': 'bg-white'} transition-all  mt-2 w-[7em] md:min-w-[12em] h-1 rounded-full`} />
       </Link>
      ))}
      
      </header>
      <main className='p-4 pt-[4em] '>
        {children}
      </main>

     </div>
     {/* <div className='mt-[3em]'>
      <h2 className='text-primary uppercase text-sm'>Recent Escrow Transactions</h2>
      <p>You have no Escrow transactions yet.</p>
     </div> */}
    </div>
  )
}

export default EscrowLayout