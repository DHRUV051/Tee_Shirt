"use client";
import React from 'react'
import Image from 'next/image'
import g1 from      "../../../public/assets/Image2/g1.svg";
import g2 from      "../../../public/assets/Image2/g2.svg";
import g3 from      "../../../public/assets/Image2/g3.svg";
import g4 from      "../../../public/assets/Image2/g4.svg";



const Component1 = () => {
  return (
    <>
    <div className=' bg-[#E5F4ED] sm:w-auto h-auto lg:w-[1410px] lg:h-[600px] lg:mt-8 lg:ml-12 bg-cover bg-no-repeat bg-center
    bg-fixed lg:flex lg:items-center lg:relative'>
        
        <div className=' container mx-auto px-10 z-10'>
            <div className=' text-left text-[#000000] flex flex-col gap-[10px] md:gap-[40px]'>
                <div>
                    <h1 className=' text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>Let's configure you own</h1>
                </div>
                <div>
                    <h1 className=' text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'> print product</h1>
                </div>
                <div>
                    <p className=' text-sm md:text-xl text-[#7E7E7E] tracking-widest'>The easiest way to get your print as you want</p>
                </div>
                    <div>
                    <button className='bg-[#2EBB77]  h-10 left-[493px] text-white px-6 py-2 rounded-2xl'>
                Print your own
            </button>
                    </div>
            </div>

        </div>

                 <div className='md:grid md:auto-cols-auto md:auto-rows-auto md:mt-auto lg:grid lg:gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:mt-5 lg:pr-14'>

                <Image className='w-[100%] max-w-[400px] sm:max-w-auto h-auto'
                src={g1}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className='w-[100%] max-w-[400px] sm:max-w-auto h-auto'
                src={g2}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:max-w-auto h-auto'
                src={g3}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:max-w-auto h-auto'
                src={g4}
                width={300}
                height={600}
                alt='grid image'
                />
          
                </div>  

    </div>
    </>
  )
}

export default Component1