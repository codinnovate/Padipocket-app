import React from 'react'
import ProductCard from './ProductCard';
function ProductSet() {
  return (
    <div className='flex flex-col'>
        <div className='pr-[3em]'>
      <h1 className='font-semibold text-xl '>Product Sets</h1>
      <h1 className='font-medium'>Don&apos;t waste time while you shop, Just Pick and Get all you need in one card!</h1>
        </div>
    <div className="mt-5 flex flex-col md:grid gap-4 md:grid-cols-2 ">
      <ProductCard 
        bgColor="bg-[#FFF5E1]"
        title="New Home Essentials"
        description="Everything you need for your new home.Save up to 60% off on your first order"
        link="#"
        imageUrl="https://example.com/background-image.jpg" // Replace with your image URL
      />
      <ProductCard 
        bgColor="bg-[#D2EFE1]"
        title="Housewarming Kit"
        description="Perfect gifts for welcoming new homeowners."
        link="#"
        imageUrl="https://example.com/background-image.jpg" // Replace with your image URL
      />
    </div>
    </div>
  )
}

export default ProductSet
