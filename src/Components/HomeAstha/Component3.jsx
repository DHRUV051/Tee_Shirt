"use client";
import React from 'react';
import Image from 'next/image';
import top1 from      "../../../public/assets/Component3/top1.svg";
import top4 from      "../../../public/assets/Component3/top4.svg";
import top2 from      "../../../public/assets/Component3/top2.svg";
import top3 from      "../../../public/assets/Component3/top3.svg";



const Component3 = () => {
  return (
    <>
    <div className=' gap-3 mt-10 pl-6'>
      <ul className=' flex gap-4 font-bold'>
        <li>New Arrivals</li>
        <li className=' text-[#9B9B9B]'>BestSeller</li>
        <li className=' text-[#9B9B9B]'>Sale</li>
      </ul>
    </div>



    <div className='flex md:grid-cols-[1fr,37%,1fr] gap-5 mt-10'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top1}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1>Zone Sweatshirt</h1>
                <h1>$19.95 – $159.95</h1>
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top4}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1>Zoo Men’s t-shirt</h1>
                <h1>$14.95 – $119.95</h1>
            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top2}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1>Toddler T-shirt</h1>
                <h1>$26.00</h1>
            </div>


            <div className='w-fit mx-auto'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={top3}
                width={500}
                height={900}
                alt='grid image'
                />
                <h1>Fine Jersey Tee</h1><span className=' gap-2'>$28.00</span><span className=' gap-2'>$31.00</span>

            </div>

        </div>
    </>
  )
}

export default Component3