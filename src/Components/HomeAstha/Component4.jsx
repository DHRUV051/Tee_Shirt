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
        {/* <div className=' flex bg-[#B479D926] sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-[1300px] lg:h-[600px] lg:mt-8 lg:ml-24 bg-cover bg-no-repeat bg-center
    bg-fixed lg:flex lg:items-center lg:relative'>
                    
        
        <div className=' container mx-auto sm:mx-auto md:mx-auto sm:px-1 md:px-1 px-10 z-10'>
            <ul className=' lg:text-left sm:text-center md:text-center text-[#000000] flex flex-col gap-3 md:gap-[40px] sm:gap-3 ml-8 '>
                
                    <div className='flex gap-2 border-4 w-7 bg-[#2EBB77] h-7  rounded-full'><span>Choose from 412 custom products in
our catalog</span>

                    
                    </div>
                
                <div className='flex gap-2 border-4 w-7 bg-[#2EBB77] h-7  rounded-full'><span>Customize your design with graphics,
text or your own uploaded images.</span>
                </div>
                
                <div className='flex gap-2 border-4 w-7 bg-[#2EBB77] h-7  rounded-full'><span>Get your order sent to your door with free standard shipping.</span>

                </div>
                
            </ul>

        </div>

                 <div className=' md:auto-cols-auto md:auto-rows-auto md:mt-auto  sm:py-5 sm:px-3  lg:mt-5 lg:pr-36 '>

                <Image className=' lg:gap-2 sm:gap-3 sm:py-3 sm:px-3'
                src={img}
                width= ''
                height= ''
                alt='grid image'
                />           
          
                </div>  

    </div> */}
   
   


    <div className=' gap-3 px-16 py-6 lg:flex justify-between'>
      <ul className=' lg:flex sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center font-bold'>
        <li className=' text-[#000000]'>Hot under $39</li>
      </ul>
      <button className='bg-white xl:h-10 md:h-8 sm:h-8 text-[#000000] border-[#EEEEEE] border-2 px-2 py-2 md:rounded-md sm:rounded-lg xl:rounded-xl lg:flex sm:flex-col sm:text-base md:text-base sm:text-center md:text-center hover: '>View All → </button>
          
    </div>

    <div className='lg:flex lg:flex-row lg:grid-cols-[1fr,37%,1fr] sm:flex-col md:flex-row px-16 py-8 gap-5'>
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


   
   <div className=' gap-3 px-16 py-6 lg:flex justify-between'>
      <ul className=' lg:flex sm:flex-col gap-4 lg:text-xl sm:text-base md:text-lg sm:text-center md:text-center font-bold'>
        <li className=' text-[#000000] sm:text-center md:text-center'>We intergrate with</li>
      <button className='bg-white xl:h-10 md:h-8 sm:h-8 text-[#000000] border-[#EEEEEE] border-2 px-2 py-2 md:rounded-md sm:rounded-lg xl:rounded-xl 
      lg:flex sm:flex-col sm:text-base md:text-base sm:text-center md:text-center hover: '>Add more → </button>
      </ul>

      <div className=' ml-14 md:grid md:auto-cols-auto md:auto-rows-auto md:mt-auto lg:grid lg:grid-cols-4 lg:grid-rows-2'>

                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3 lg:pr-36'
                src={s1}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3'
                src={s2}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3 lg:pr-40'
                src={s3}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3'
                src={s4}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3 lg:pr-36'
                src={s5}
                width={300}
                height={600}
                alt='grid image'
                />           
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3'
                src={s6}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3 lg:pr-40'
                src={s7}
                width={300}
                height={600}
                alt='grid image'
                />
                <Image className='w-[100%] max-w-[400px] sm:w-auto h-auto sm:h-auto md:w-auto md:h-auto lg:gap-1 sm:gap-2 sm:py-3 sm:px-3'
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