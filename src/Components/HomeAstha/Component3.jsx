"use client";
import React from 'react';
import Image from 'next/image';
import top1 from      "../../../public/assets/Component3/top1.svg";
import top4 from      "../../../public/assets/Component3/top4.svg";
import top2 from      "../../../public/assets/Component3/top2.svg";
import top3 from      "../../../public/assets/Component3/top3.svg";
import Item1 from     "../../../public/assets/Component3/Item1.svg"; 
import Item2 from     "../../../public/assets/Component3/Item2.svg"; 
import Item3 from     "../../../public/assets/Component3/Item3.svg"; 
import Item4 from     "../../../public/assets/Component3/Item4.svg";  



const Component3 = () => {
  return (
    <>
    <div className=' gap-3 px-16 py-16'>
      <ul className=' lg:flex md:flex-row sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center lg:text-left font-bold'>
        <li>New Arrivals</li>
        <li className=' text-[#9B9B9B]'>BestSeller</li>
        <li className=' text-[#9B9B9B]'>Sale</li>
      </ul>
    </div>



    <div className='lg:flex lg:flex-row lg:grid-cols-[1fr,37%,1fr] sm:flex-col md:flex-row px-16 py-8 gap-5'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top1}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Zone Sweatshirt</h1>
                <h1 className=' font-bold text-center '>$19.95 – $159.95</h1>
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top4}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Zoo Men’s t-shirt</h1>
                <h1 className=' font-bold text-center '>$14.95 – $119.95</h1>
            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top2}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Toddler T-shirt</h1>
                <h1 className=' font-bold text-center '>$26.00</h1>
            </div>


            <div className='w-fit mx-auto'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top3}
                width={500}
                height={900}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Fine Jersey Tee</h1>
                <h1 className=' font-bold text-center pt-3 text-[#2EBB77] gap-3'>$28.00<span className=' text-[#9B9B9B] text-sm'>$31.00</span></h1>

            </div>

        </div>

        <div className=' gap-3 px-16 py-6 lg:flex justify-between'>
      <ul className=' lg:flex sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center font-bold'>
        <li className=' text-[#000000]'>Hot under $39</li>
      </ul>
      <button className='bg-white xl:h-10 md:h-8 sm:h-8 text-[#000000] border-[#EEEEEE] border-2 px-2 py-2 md:rounded-md sm:rounded-lg xl:rounded-xl lg:flex sm:flex-col sm:text-base md:text-base sm:text-center md:text-center hover: '>View All → </button>
          
    </div>


    {/* 2nd time image */}

    <div className='lg:flex lg:flex-row lg:grid-cols-[1fr,37%,1fr] sm:flex-col md:flex-row px-16 py-8 gap-5'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Item1}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Adult Quantity Tee</h1>
                <h1 className=' font-bold text-center '>$26.00 – $29.00</h1>
                <div className='mt-[10px] flex justify-center items-center'>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-black rounded-full p-[8px] w-fit'></div>
                </div>
              </div>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-[rgb(215,169,131)] rounded-full p-[8px] w-fit'></div>
                </div>
              </div>+3
            </div>
            </div>
            



            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Item2}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>All-Over-Print Hoodie</h1>
                <h1 className=' font-bold text-center '>$26.00 – $29.00</h1>
                <div className='mt-[10px] flex justify-center items-center'>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-black rounded-full p-[8px] w-fit'></div>
                </div>
              </div>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-[rgb(215,169,131)] rounded-full p-[8px] w-fit'></div>
                </div>
              </div>+3
            </div>
            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Item3}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>AOP Cut & Sew Tee</h1>
                <h1 className=' font-bold text-center '>$26.00 – $29.00</h1>
                <div className='mt-[10px] flex justify-center items-center'>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-black rounded-full p-[8px] w-fit'></div>
                </div>
              </div>
              <div aria-label='Product Color'>
                <div className='border border-[rgb(238,238,238)] rounded-full p-1'>
                  <div className='bg-[rgb(215,169,131)] rounded-full p-[8px] w-fit'></div>
                </div>
              </div>+3
            </div>
            </div>


            <div className='w-fit mx-auto'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Item4}
                width={500}
                height={900}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Fine Jersey Tee</h1>
                <h1 className=' font-bold text-center pt-3 text-[#2EBB77] gap-3'>$28.00<span className=' text-[#9B9B9B] text-sm'>$31.00</span></h1>

            </div>

        </div>
    </>
  )
}

export default Component3