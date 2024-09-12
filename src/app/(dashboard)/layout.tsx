import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'



const navItems = [
  {title:'Home' , href:'/', icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18L14 18" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="#a1aebf" stroke-width="1.5" stroke-linejoin="round"/>
    </svg> },
  {
    title:'Wallet' ,
    href:'/wallet', 
    icon:<svg className="mb-1 md:my-4  md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z" stroke="#a1aebf" stroke-width="1.5"/>
    <path d="M10 7H16C18.8284 7 20.2426 7 21.1213 7.87868C22 8.75736 22 10.1716 22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round"/>
    </svg> 
    
    },
  {
    title:'Transactions' , 
    href:'/transactions', 
    icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10C2 6.68286 4.68286 4 8 4L7.14286 5.71429" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 14C22 17.3171 19.3171 20 16 20L16.8571 18.2857" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.25 2.5156C19.0803 1.76088 20.6915 2.01217 21.5651 2.17234C21.8138 2.21794 22 2.46181 22 2.74528V9.20426C22 9.54282 21.738 9.79534 21.4407 9.74278C20.5437 9.58416 18.9966 9.38826 17.25 10.1085C15.3721 10.8828 13.482 11.0285 12.4505 10.9958C12.1939 10.9877 12 10.7457 12 10.4568V3.99467C12 3.66171 12.2552 3.39978 12.5512 3.40549C13.6018 3.42576 15.4316 3.2654 17.25 2.5156Z" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.25 13.5156C9.08032 12.7609 10.6915 13.0122 11.5651 13.1723C11.8138 13.2179 12 13.4618 12 13.7453V20.2043C12 20.5428 11.738 20.7953 11.4407 20.7428C10.5437 20.5842 8.99663 20.3883 7.25 21.1085C5.37206 21.8828 3.48197 22.0285 2.45052 21.9958C2.19389 21.9877 2 21.7457 2 21.4568V14.9947C2 14.6617 2.25525 14.3998 2.55116 14.4055C3.60178 14.4258 5.43158 14.2654 7.25 13.5156Z" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.9998 6.5H17.0088" stroke="#a1aebf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.99981 17.5H7.00879" stroke="#a1aebf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>},
  {
    title:'Account' , 
    href:'/profile',  
    icon:<svg className="mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#a1aebf" stroke-width="1.5"/>
    </svg>
    },
]
const dashboardLayout = ({children}) => {
  return (
    <div className='flex relative'>
      <aside 
      className="transition-all md:min-h-screen md:h-full absolute lg:relative bottom-0 z-20 md:px-6 md:pt-12 md:pb-4 flex md:flex-col w-screen md:w-64  bg-white md:bg-primary-100 text-white md:overflow-x-hidden"
      >
        <div className="hidden md:flex items-center mb-12 w-48">
        <button className='mr-8'>
        <svg className="text-white cursor-pointer"  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20H29M11 14H29M11 26H29" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
        <Logo 
         color='white'/>
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
        <path d="M7.02331 5.5C4.59826 7.11238 3 9.86954 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 9.86954 19.4017 7.11238 16.9767 5.5" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 2V10" stroke="#a1aebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className="text-white pl-6 pr-10 py-2 rounded-t rounded-br font-display">
          Logout
        </span>
        </Link>


      </aside>

      <main className="flex flex-col flex-1 bg-white overflow-auto md:ml-18 lg:ml-0 md:z-10 mb-16 md:mb-0 pt-6">
      {children}
      </main>
    </div>
  )
}

export default dashboardLayout