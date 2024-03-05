"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import banner1 from '../../../public/assets/Print/banner1.svg';
import you from     '../../../public/assets/Print/you.svg';
import pride from   '../../../public/assets/Print/pride.svg';
import {useState} from 'react';

const Component3 = () => {
    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
        <section className='text-center flex flex-col items-center py-10  sm:w-full md:w-full sm:px-[30px] md:px-[30px] '>
   
   {/* images with boxes */}
            <div className='pt-4'>
      <button className='bg-[rgba(17,177,150,0.1)] px-4 py-2'>
        <Link href='/shop' className='text-[rgba(17,177,150,1)] text-center flex'>
          <h1 className='font-bold text-[18px]'>STEP 4</h1>
        </Link>
      </button>
      <p className=' text-[rgba(0,0,0,1)] text-[40px] font-[Plus Jakarta Sans] sm:text-xl md:text-3xl'>Choose your Material</p>
</div>


<div class="flex items-center justify-center pt-4">
  <div class="mx-auto max-w-6xl px-10">
    <div class="flex flex-wrap gap-3">

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-60 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[rgba(0,0,0,1)] peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
            <Image
          src={banner1}
          alt=''
          width=''
          height=''
          className=' rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
              
            </div>
            <div class="flex items-end justify-between">
              <p class="text-lg font-bold">Glass</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-60 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[rgba(0,0,0,1)] peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
            <Image
          src={you}
          alt=''
          width=''
          height=''
          className=' rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
              
            </div>
            <div class="flex items-end justify-between">
              <p class="text-lg font-bold">Metal</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-60 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[rgba(0,0,0,1)] peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
            <Image
          src={pride}
          alt=''
          width=''
          height=''
          className=' rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
              
            </div>
            <div class="flex items-end justify-between">
              <p class="text-lg font-bold">Paper</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-60 max-w-xl rounded-md bg-white p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[rgba(0,0,0,1)] peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
            <Image
          src={banner1}
          alt=''
          width=''
          height=''
          className=' rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
              
            </div>
            <div class="flex items-end justify-between">
              <p class="text-lg font-bold">Wood</p>
            </div>
          </div>
        </div>
      </label>
      
    </div>
  </div>
</div>





{/* delivery */}


<div className='pt-8'>
      <button className='bg-[rgba(17,177,150,0.1)] px-4 py-2'>
        <Link href='/shop' className='text-[rgba(17,177,150,1)] text-center flex'>
          <h1 className='font-bold text-[18px]'>STEP 5</h1>
        </Link>
      </button>
      <p className=' text-[rgba(0,0,0,1)] text-[40px] font-[Plus Jakarta Sans] sm:text-xl md:text-3xl'>Choose your Delivery</p>

      <label class="relative block pt-6">
  <input class=" placeholder:text-slate-400 block bg-[rgba(245,245,245,1)] w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
  placeholder="1 to 3 business days..." type="text" name="search"/>
</label>
</div>

<div className='mt-[20px] flex'>
          <button className='bg-[rgba(238,238,238,1)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-black text-center flex'>
              <h1 className='font-bold text-[15px]'>Clear section</h1>
             
            </Link>
          </button>
        </div>

        <div className=' pt-5 flex'>
      <button
        onClick={handleIncrement}
        className="bg-[rgba(245,245,245,1)] hover:bg-[#aa9b9b] text-[rgba(126,126,126,1)] font-bold py-2 px-4 rounded"
      >
        +
      </button>
      <p className=' text bg-[rgba(245,245,245,1)] text-[rgba(0,0,0,1)] font-bold py-2 px-2'> {count}</p>
      <button
        onClick={handleDecrement}
        className="bg-[rgba(245,245,245,1)] hover:bg-[#aa9b9b] text-[rgba(126,126,126,1)] font-bold py-2 px-4 rounded"
      >
        -
      </button>
      <div className=' flex gap-2 lg:pl-40 pt-2'>
      <p className=' text-[rgba(46,187,119,1)]'>$27.00</p><span className=' text-[rgba(155,155,155,1)]'>$34.00</span>
      </div>
      
    </div>

    <div className='mt-[20px] flex'>
          <button className='bg-[rgb(46,187,119)] lg:px-36 sm:px-2 md:px-2 py-2 lg:w-96 lg:h-12 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px] '>Add to cart</h1>
             
            </Link>
          </button>
        </div>
   </section>
    </>
  )
}

export default Component3