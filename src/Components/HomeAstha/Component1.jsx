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
    <div className=' bg-[#E5F4ED] sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-[1410px] lg:h-[600px] lg:mt-8 lg:ml-12 bg-cover bg-no-repeat bg-center
    bg-fixed lg:flex lg:items-center lg:relative'>
        
        <div className=' container mx-auto sm:mx-auto md:mx-auto sm:px-1 md:px-1 px-10 z-10'>
            <div className=' lg:text-left sm:text-center md:text-center text-[#000000] flex flex-col gap-3 md:gap-[40px] sm:gap-3 ml-8 '>
                <div>
                    <h1 className=' sm:text-sm md:text-3xl lg:text-5xl font-semibold tracking-wider'>Let's configure you own</h1>
                </div>
                <div>
                    <h1 className=' sm:text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'> print product</h1>
                </div>
                <div>
                    <p className=' text-sm md:text-xl text-[#7E7E7E] tracking-widest'>The easiest way to get your print as you want</p>
                </div>
                    <div>
                    <button className='bg-[#2EBB77] h-10 left-[493px] text-white px-6 py-2 rounded-2xl sm:h-10 md:h-10 sm:mb-4 md:mb-4 sm:pb-4'>
                Print your own
            </button>
                    </div>
            </div>

        </div>

                 <div className='md:grid md:auto-cols-auto md:auto-rows-auto md:mt-auto lg:grid  sm:py-5 sm:px-3 lg:grid-cols-2 lg:grid-rows-2 lg:mt-5 lg:pr-36 '>

                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-2 sm:gap-3 sm:py-3 sm:px-3 lg:pr-36'
                src={g1}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-2 sm:gap-3 sm:py-3 sm:px-3'
                src={g2}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-2 sm:gap-3 sm:py-3 sm:px-3 lg:pr-40'
                src={g3}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-2 sm:gap-3 sm:py-3 sm:px-3'
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