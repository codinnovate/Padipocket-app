import React from 'react';
import imageUrl from '@/assets/productset.png';
import Image from 'next/image';

const ProductCard = ({ bgColor, title, description,  banner}) => {
  return (
    <div className={`relative overflow-hidden  flex w-full md:w-[540px] h-[300px] rounded-lg shadow-lg ${bgColor}`}>
      <Image
        src={imageUrl} 
        alt={title} 
        width={1000}
        height={1000}
        className="absolute inset-0 object-cover w-full h-full opacity-50" 
      />
      <div className="relative h-full flex justify-between flex-col p-6 pr-[6em]">
      <button className='flex items-center justify-center w-[82px] h-[30px] rounded bg-[#FFD480]'>
            <h2 className='text-white text-[12px]'>Free Delivery</h2>
        </button>
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <p className="mt-2 text-gray text-xl font-medium">{description}</p>
        <button className='flex items-center justify-center w-[143px] h-[52px] rounded bg-green'>
            <h2 className='text-white'>Shop Now</h2>
        </button>
      </div>
      <Image 
      width='500px' height='400px'
      src={banner}
       alt='banner'
        className='' />
    </div>
  );
};


export default ProductCard;
