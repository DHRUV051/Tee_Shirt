import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../../../public/assets/Print/Icon.svg';




const Component2 = () => {
  return (
    <section className='text-center flex flex-col items-center py-10  sm:w-full md:w-full sm:px-[30px] md:px-[30px] '>
   
    <div className='flex pt-4'>
      <button className='bg-[rgba(17,177,150,0.1)] px-4 py-2'>
        <Link href='/shop' className='text-[rgba(17,177,150,1)] text-center flex'>
          <h1 className='font-bold text-[18px]'>STEP 1</h1>
        </Link>
      </button>
    </div>

    <form class=" border-dashed border-2 my-7 flex items-center space-x-6 sm:flex-col">
  <div class="shrink-0">
    <Image class=" h-14 w-16 object-cover rounded-full" 
    src={Icon}
     alt="icon" />
  </div><span>Drag & Drop Files Here <text className='text-[rgba(126,126,126,1)]'>or</text></span>
  <label class="block">
    <span class="sr-only">Upload File</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
       file:border-0
      file:text-sm file:font-semibold
      file:bg-[rgba(0,0,0,1)] file:text-[rgba(255,255,255,1)]
      hover:file:bg-[#dbd9d9]"/>
  </label>
</form>

<div className='pt-4'>
      <button className='bg-[rgba(17,177,150,0.1)] px-4 py-2'>
        <Link href='/shop' className='text-[rgba(17,177,150,1)] text-center flex'>
          <h1 className='font-bold text-[18px]'>STEP 2</h1>
        </Link>
      </button>
      <p className=' text-[rgba(0,0,0,1)] text-[40px] font-[Plus Jakarta Sans] sm:text-xl md:text-3xl'>Choose your Color</p>

{/* radio color */}

      <div class="flex items-center justify-center pt-5">
  <div class="mx-auto max-w-6xl px-12">
    <div class="flex flex-wrap gap-5">

     
    <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-5 rounded-full bg-[rgba(0,0,0,1)] p-5 ring-2 ring-transparent
         transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-5 rounded-full bg-[rgba(215,169,131,1)] p-5 ring-2 ring-transparent
         transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-5 rounded-full bg-[rgba(221,51,51,1)] p-5 ring-2 ring-transparent
         transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-5 rounded-full bg-[rgba(255,255,255,1)] p-5 ring-2 ring-black ring-transparent
         transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-5 rounded-full bg-[rgba(238,238,34,1)] p-5 ring-2 ring-transparent
         transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">   
        </div>
      </label>

    </div>
  </div>
</div>
  
    </div>

{/* size */}

    <div className=' pt-14'>
      <button className='bg-[rgba(17,177,150,0.1)] px-4 py-2'>
        <Link href='/shop' className='text-[rgba(17,177,150,1)] text-center flex'>
          <h1 className='font-bold text-[18px]'>STEP 3</h1>
        </Link>
      </button>
      <p className=' text-[rgba(0,0,0,1)] text-[40px] font-[Plus Jakarta Sans] sm:text-xl md:text-3xl'>Choose your Size</p>
</div>

<div class="flex items-center justify-center pt-4">
  <div class="mx-auto max-w-6xl px-12">
    <div class="flex flex-wrap gap-3">

      {/* <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500 mb-3 mr-4">2XL</p>
            </div>
          </div>
        </div>
      </label> */}

      <label class="cursor-pointer">
        
            <div class="w-10 h-10 rounded-full bg-[rgba(238,238,238,1)] text-gray-600 flex ">
              <p class="text-sm font-semibold uppercase text-gray-500">2XL</p>
            </div>
         
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">3XL</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">L</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">M</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">S</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">XL</p>
            </div>
          </div>
        </div>
      </label>

      <label class="cursor-pointer">
        <input type="radio" class="peer sr-only" name="pricing" />
        <div class="w-3 h-2 rounded-full bg-[rgba(238,238,238,1)] p-5 text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-[rgba(0,0,0,1)] peer-checked:ring-offset-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase text-gray-500">XS</p>
            </div>
          </div>
        </div>
      </label>

    </div>
  </div>
</div>




  </section>
  )
}

export default Component2