'use client';


import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useEffect, useState, createContext } from 'react'
import { lookInSession } from '../lib/session';



const navItems = [
  {title:'Home' , href:'/dashboard', icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18L14 18" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="#a1aebf" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg> },
  {
    title:'Escrow' ,
    href:'/escrow/create', 
    icon:<svg className="mb-1 md:my-4  md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    },
  {
    title:'Transactions' , 
    href:'/transactions', 
    icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10C2 6.68286 4.68286 4 8 4L7.14286 5.71429" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 14C22 17.3171 19.3171 20 16 20L16.8571 18.2857" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.25 2.5156C19.0803 1.76088 20.6915 2.01217 21.5651 2.17234C21.8138 2.21794 22 2.46181 22 2.74528V9.20426C22 9.54282 21.738 9.79534 21.4407 9.74278C20.5437 9.58416 18.9966 9.38826 17.25 10.1085C15.3721 10.8828 13.482 11.0285 12.4505 10.9958C12.1939 10.9877 12 10.7457 12 10.4568V3.99467C12 3.66171 12.2552 3.39978 12.5512 3.40549C13.6018 3.42576 15.4316 3.2654 17.25 2.5156Z" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.25 13.5156C9.08032 12.7609 10.6915 13.0122 11.5651 13.1723C11.8138 13.2179 12 13.4618 12 13.7453V20.2043C12 20.5428 11.738 20.7953 11.4407 20.7428C10.5437 20.5842 8.99663 20.3883 7.25 21.1085C5.37206 21.8828 3.48197 22.0285 2.45052 21.9958C2.19389 21.9877 2 21.7457 2 21.4568V14.9947C2 14.6617 2.25525 14.3998 2.55116 14.4055C3.60178 14.4258 5.43158 14.2654 7.25 13.5156Z" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9998 6.5H17.0088" stroke="#a1aebf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.99981 17.5H7.00879" stroke="#a1aebf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>},
  {
    title:'Account' , 
    href:'/profile',  
    icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#a1aebf" strokeWidth="1.5"/>
    </svg>
    },
]
export const UserContext = createContext({});

const DashboardLayout = ({children}) => {
  const [userAuth, setUserAuth] = useState({});
  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession ?  setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token:null})
},[])
  return (
    <div className='flex relative h-screen '>
      <aside 
      className="transition-all md:min-h-screen md:h-full absolute lg:relative bottom-0 z-20 md:px-6 md:pt-12 md:pb-4 flex md:flex-col w-screen md:w-64  bg-white md:bg-primary-100 text-white md:overflow-x-hidden"
      >
        <div className="hidden md:flex items-center mb-12 w-48">
        <Logo 
         color='light'/>
        </div>
        <ul className="flex md:flex-col flex-1 justify-between md:justify-start py-2 md:py-0 shadow-dark md:shadow-none">
          {navItems.map((item, idx) => (
          <li 
            key={idx}
            className="flex-1 md:flex-none ">
          <Link href ={item.href} className="flex flex-col md:flex-row md:inline-flex items-center md:mb-4 transition-all">
            <span className=''>
              {item.icon}
            </span>
           <span className="text-sm md:text-base  md:pl-6 md:pr-10 md:py-1 md:rounded-t md:rounded-br text-gray md:text-white md:ml-0">
           {item.title}
            </span>
          </Link>
          </li>

          ))}
        </ul>
        <Link href='/logout' className="md:inline-flex md:mt-4 items-center mb-4 hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.02331 5.5C4.59826 7.11238 3 9.86954 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 9.86954 19.4017 7.11238 16.9767 5.5" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V10" stroke="#a1aebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-white pl-6 pr-10 py-2 rounded-t rounded-br font-display">
          Logout
        </span>
        </Link>


      </aside>

      <main className="max-w-4xl mx-auto  w-full flex flex-col flex-1 p-3  overflow-auto md:ml-64 lg:ml-12  md:z-10 mb-16 md:mb-0 pt-6 md:pl-4 md:mt-[2em]">
      <h1 className='text-red-500 font-semibold text-[12px] ring-1 bg-red-50 ring-red-600 px-1 py-1.5 rounded-xl ml-auto'>Test Mode, No real amount is charged for transactions</h1>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
      </UserContext.Provider>
      </main>
    </div>
  )
}

export default DashboardLayout