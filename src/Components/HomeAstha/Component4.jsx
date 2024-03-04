"use client";
import React from 'react'
import Image from 'next/image';
import img from  "../../../public/assets/Component4/img.svg";
import Link from  "../../../public/assets/Component4/Link.svg";
import Link1 from  "../../../public/assets/Component4/Link1.svg";
import Link2 from  "../../../public/assets/Component4/Link2.svg";
import link4 from  "../../../public/assets/Component4/link4.svg";
import s1 from  "../../../public/assets/Component4/s1.svg";
import s2 from   "../../../public/assets/Component4/s2.svg";
import s3 from   "../../../public/assets/Component4/s3.svg";
import s4 from   "../../../public/assets/Component4/s4.svg";
import s5 from   "../../../public/assets/Component4/s5.svg";
import s6 from   "../../../public/assets/Component4/s6.svg";
import s7 from   "../../../public/assets/Component4/s7.svg";
import s8 from   "../../../public/assets/Component4/s8.svg";

const Component4 = () => {
  return (
    <>


    <div className=' gap-3 px-16 py-6 lg:flex sm:flex md:flex justify-between'>
      <ul className=' lg:flex sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center font-bold'>
        <li className=' text-[#000000]'>Hot under $39</li>
      </ul>
      <button className='bg-white lg:h-10 md:h-8 sm:h-8 text-[#000000] border-[#EEEEEE] border-2 px-2 py-2 sm:py-1 md:py-1
       md:rounded-md sm:rounded-lg lg:rounded-xl lg:flex sm:flex-col sm:text-base md:text-base sm:text-center md:text-center hover '>View All → </button>
          
    </div>

    <div className='grid md:grid-cols-2 lg:flex lg:flex-row lg:grid-cols-[1fr,37%,1fr] sm:flex-col md:flex-row px-16 py-8 gap-5'>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Link}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Astronauts</h1>
                <h1 className=' text-center text-[#7E7E7E] '>85 resources</h1>
            </div>
            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Link1}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Quote that collection</h1>
                <h1 className=' text-center text-[#7E7E7E]'>6 resources</h1>
            </div>

            <div className='w-fit mx-auto self-end'>
                <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto'
                src={Link2}
                width={300}
                height={600}
                alt='grid image'
                />
                <h1 className=' font-bold text-center pt-3'>Art Styles</h1>
                <h1 className=' text-center text-[#7E7E7E] '>68 resources</h1>
            </div>


        </div>

   
   

   {/* all logo and brands */}


   
   <div className=' px-16 py-6'>
      <ul className='lg:flex lg:pl-4 sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center font-bold py-4 md:justify-between sm:justify-between'>
        <li>We intergrate with</li>
      <button className='bg-white lg:h-9 md:h-8 sm:h-8 text-[#000000] border-[#EEEEEE] border-2 px-2 lg:py-1 sm:py-1 md:py-1 md:rounded-md sm:rounded-lg lg:rounded-xl 
      lg:flex sm:flex-col sm:text-base md:text-base sm:text-center md:text-center hover: '>Add more → </button>
      </ul>

      <div className=' grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>

                <Image className=''
                src={s1}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className=''
                src={s2}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className=''
                src={s3}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className=''
                src={s4}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className=''
                src={s5}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className=''
                src={s6}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className=''
                src={s7}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className=''
                src={s8}
                width={300}
                height={600}
                alt='grid image'
                />
          
                </div>  
          
   
                </div>
   
   
   
   
   
   
    </>
  )
}

export default Component4