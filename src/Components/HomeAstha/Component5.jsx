"use client";
import React from 'react'
import Image from 'next/image';
import ele1 from     "../../../public/assets/Component5/ele1.svg"; 
import element2 from     "../../../public/assets/Component5/element2.svg"; 
import i from     "../../../public/assets/Component5/i.svg";
import i1 from     "../../../public/assets/Component5/i1.svg";
import i2 from     "../../../public/assets/Component5/i2.svg";
import i3 from     "../../../public/assets/Component5/i3.svg";
import i4 from     "../../../public/assets/Component5/i4.svg"; 
import Arrow from  "../../../public/assets/Component5/Arrow.svg";
import { useRef } from "react";

const Component5 = () => {
  const clickPoint = useRef();
  const handleFocus = () => {
      clickPoint.current.style.display = "none";
  };

  const handleBlur = () => {
      clickPoint.current.style.display = "block";
  };

  return (
    <>
        
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:flex-col md:flex-row px-16 py-8'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={ele1}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={element2}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
    </div>


        {/* saerch bar  */}

    <div className=' py-5'>
    <ul className=' text-center font-bold'>
        <li>Get the latest news, events & more</li>
        <li>delivered to your inbox.</li>
        <div className="items-center flex flex-col py-3 sm:pl-4 justify-center" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                     clip-rule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-80 text-gray-900 bg-[#FFFFFF] rounded-lg border border-[#00000014] focus:pl-3"
                    placeholder="Enter the email.."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    </ul>
    </div>

    {/* images  */}

    <div className='grid lg:flex lg:flex-row lg:grid-cols-[1fr,37%,1fr] sm:flex-col md:grid-cols-2 px-16 py-8 gap-5'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={i}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={i1}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={i2}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={i3}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={i4}
                width={300}
                height={600}
                alt='grid image'
                />
            </div>
    </div>





    </>
  )
}

export default Component5