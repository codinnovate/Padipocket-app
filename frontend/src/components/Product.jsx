

import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

async function Products() {
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data.products;
  return (
    <div>
      <h1 className='text-3xl font-bold mt-[3em] mb-[4em]'>Just For You</h1>
      <div className='flex flex-col md:grid md:grid-cols-4 justify-between items-center gap-[4em] mt-5'>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div  
            key={product.id} 
            className='flex justify-center flex-col bg-white shadow-lg  h-fit p-5 items-center rounded-2xl relative '>
                <Image src={product.images?.[0]} 
                alt={product.title}
                 width={200} height={100} 
                 className='bg-[#f2f1f3] z-30 rounded-2xl min-h-full top-10 -mt-[3em]'
                />
              <div className='mt-[1em] flex flex-col'>
                <h2 className='font-bold text-xl'>{product.title}</h2>
                <p className='text-gray uppercase font-normal'>{product.category}</p>
                <p>Price: ₦{(product.price * 100).toFixed()}</p>
                
                <Link href='/checkout/pay' className='bg-primary mt-5 hover:bg-green p-5 rounded-3xl transition-all text-white'>
                <h2 className='text-center text-xl font-medium '>Checkout with Padipocket</h2>
                </Link>
                </div>
            </div >
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}


export default Products    

  
