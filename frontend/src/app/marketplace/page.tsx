import Footer from '@/components/Footer'
import Header from '@/components/Marketplace/Header'
import React from 'react'
import Image from 'next/image'
import location from "@/assets/location.png";
import electronics from '@/assets/electronics.png'
import fashion from '@/assets/fashion.png'
import furniture from '@/assets/sofa.png'
import drinks from '@/assets/drinks.png'
import stationery from '@/assets/stationery.png'
import wardrobe from '@/assets/wardrobe.png';
import accessories from '@/assets/watches.png';
import ECard from '@/components/ui/ECard';
import Products from '@/components/Product';

const tabsItems = [
  {title:'Electronics', icon:electronics},
  {title:'Fashion', icon:fashion},
  {title:'Drinks and Foods', icon:drinks},
  {title:'Beauty', icon:wardrobe},
  {title:'Stationery', icon:stationery},
  {title:'Furniture', icon:furniture},
  {title:'Accessories', icon:accessories},

]
const Marketplace = () => {
  return (
    <div className='flex flex-col'>
        <Header />
        <main className='max-w-6xl mx-auto p-2'>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex items-center '>
              <Image
               src={location}
               alt='location' 
               width='32' height='32' />
              <span className='text-gray'>Deliver to:</span>
              <h1 className='text-black'>32,Rose Avenue, Ilupeju Lagos State...</h1>
            </div>
            <div className='flex gap-5 flex-wrap md:justify-between'>
              {tabsItems.map((item, idx) => (
                <ECard 
                key={idx}
                title={item.title}
                src={item.icon}
                />
              ))}
            </div>
            <Products />


          
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Marketplace