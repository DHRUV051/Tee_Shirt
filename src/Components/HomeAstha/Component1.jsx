"use client";
import React from 'react'
import Image from 'next/image'
import g1 from      "../../../public/assets/Image2/g1.svg";
import g2 from      "../../../public/assets/Image2/g2.svg";
import g3 from      "../../../public/assets/Image2/g3.svg";
import g4 from      "../../../public/assets/Image2/g4.svg";



const Component1 = () => {
    return (
      <div className='bg-[#E5F4ED] sm:w-auto md:w-auto lg:w-auto lg:h-[600px] lg:mt-8 lg:mx-20 bg-cover bg-no-repeat bg-center lg:flex lg:items-center lg:relative'>

        <div className='lg:pl-20'>
          <div className='lg:text-center sm:pt-4 md:mt-4 lg:pb-32 text-[#000000] flex flex-col gap-3 items-center'>
            <h1 className=' sm:text-xl md:text-2xl lg:text-5xl md:mt-3 font-semibold tracking-wider'>Let's configure your own</h1>
            <h1 className='sm:text-xl md:text-2xl lg:text-5xl font-semibold tracking-wider'>print product</h1>
            <p className=' text-center lg:text-sm sm:text-xs md:text-sm pt-2 text-[#7E7E7E] tracking-widest'>The easiest way to get your print as you want</p>
            <button className='bg-[#2EBB77] lg:text-sm md:text-sm sm:text-xs sm:h-5 sm:w-24 md:h-5 md:w-28 lg:h-10 lg:w-36 text-white sm:mb-2 md:mb-2 rounded-xl'>
              Print your own
            </button>
          </div>
        </div>
  
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:py-5 sm:px-10 md:grid-cols-2 md:py-5 md:px-14 lg:px-3 gap-3 lg:mt-24'>
          <Image
            className='w-full max-w-[400px] h-auto'
            src={g1}
            width={172}
            height={172}
            alt='grid image'
          />
          <Image
            className='w-full max-w-[400px] h-auto'
            src={g2}
            width={197}
            height={197}
            alt='grid image'
          />
          <Image
            className='w-full max-w-[400px] h-auto'
            src={g3}
            width={165}
            height={165}
            alt='grid image'
          />
          <Image
            className='w-full max-w-[400px] h-auto'
            src={g4}
            width={195}
            height={195}
            alt='grid image'
          />
        </div>
      </div>
    );
  };
  
  export default Component1;