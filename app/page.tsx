'use client'

import Image from 'next/image'
import Reviews from './reviews';
import Gallery from './gallery';

export default function Home() {
  return (
    <div className="bg-[#f8f6f4] relative">
      <div className='container mx-auto py-16 grid sm:grid-flow-row sm:auto-rows-auto md:grid-flow-col md:auto-cols-auto justify-items-center'>
        <div className="my-auto max-w-sm">
          <h1>Welcome To</h1>
          <Image src="/images/full-t.png" alt="" width={800} height={600}/>    
        </div>
        <Gallery/>
      </div>
      <div className='container mx-auto px-5'>
        <h1 className=''>Reviews</h1>
        <Reviews/>
      </div>
    </div>
  );
}
