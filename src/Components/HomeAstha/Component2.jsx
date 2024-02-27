"use client";
import React from 'react'
import Image from 'next/image';
import cloth1 from      "../../../public/assets/Image2/cloth1.svg"; 
import cloth2 from      "../../../public/assets/Image2/cloth2.svg";
import cloth3 from      "../../../public/assets/Image2/cloth3.svg";
import cloth4 from      "../../../public/assets/Image2/cloth4.svg";
import cloth5 from      "../../../public/assets/Image2/cloth5.svg";


export const Component2 = () => {
  return (
    <>

    <div className='container pt-20'>

        <h2 className='text-2xl font-bold pl-8'>Shopping by Categories</h2>
    
        
        <div className='flex md:grid-cols-[1fr,37%,1fr] gap-5 mt-10'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={cloth1}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={cloth2}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={cloth3}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>


            <div className='w-fit mx-auto'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={cloth4}
                width={500}
                height={900}
                alt='grid image'
                />

            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={cloth5}
                width={300}
                height={600}
                alt='grid image'
                />

            </div>

        </div>
        </div>

        <div className='flex md:grid-cols gap-5 mt-20'>

            <div className=' bg-[url("/banner1.svg")] w-[720px] h-[360px] mt-8 ml-12 bg-cover bg-no-repeat bg-center flex items-center relative'>
        
        <div className=' container mx-auto px-4 z-10'>
            <div className=' text-left text-[#000000] flex flex-col gap-[20px] md:gap-[40px]'>
                <div>
                    <h1 className=' text-2xl md:text-3xl font-semibold tracking-wider'>Thousands of free templates</h1>
                </div>
                
                <div>
                    <p className=' text-sm md:text-xl text-[#7E7E7E] tracking-widest'>Free and easy way to bring
your ideas to life</p>
                </div>
                    <div>
                    <button className='bg-[#2EBB77]  h-10 left-[493px] text-white px-6 py-2 rounded-2xl'>
                Expoler more 
            </button>
                    </div>
            </div>
        </div>

    </div>

    <div className=' bg-[url("/banner2.svg")] w-[720px] h-[360px] mt-8 ml-12 bg-cover bg-no-repeat bg-center flex items-center relative'>
        
        <div className=' container mx-auto px-4 z-10'>
            <div className=' text-left text-[#000000] flex flex-col gap-[20px] md:gap-[40px]'>
                <div>
                    <h1 className=' text-2xl md:text-3xl font-semibold '>Create your
unique style</h1>
                </div>
                
                <div>
                    <p className=' text-sm md:text-xl text-[#7E7E7E] tracking-widest'>Free and easy way to create
your ideas to life</p>
                </div>
                    <div>
                    <button className='bg-[#2EBB77]  h-10 left-[493px] text-white px-6 py-2 rounded-2xl'>
                Shop now
            </button>
                    </div>
            </div>
        </div>

    </div>
            </div>




    </>
  )
}

export default Component2;