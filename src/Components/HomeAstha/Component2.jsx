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

    <div className='container px-16 py-6'>

        <h2 className='lg:text-2xl md:text-base sm:text-base sm:text-center md:text-center lg:text-center font-bold ml-4 '>Shopping by Categories</h2>
    
        
        <div className=' grid lg:flex lg:flex-row lg:grid-cols md:grid-cols-2 sm:flex-col sm:items-center md:items-center gap-3 mt-5'>
           
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

        {/* for images 2  */}


        {/* <div className=' lg:flex md:flex-cols gap-1 mt-10 px-5'>

            <div className=' rounded-xl bg-[url("/banner1.svg")] lg:w-[820px] lg:h-[300px] md:w-auto md:h-auto mt-8 ml-12 mr-10 bg-cover bg-no-repeat bg-center flex items-center relative'>
        
        <div className=' container mx-auto xl:px-4 md:px-4 sm:px-4 sm:py-4 md:py-4 lg:py-4 z-10'>
            <div className=' text-left text-[#000000] flex flex-col gap-[10px] md:gap-[40px]'>
                <div>
                    <h1 className=' lg:text-4xl md:text-2xl font-semibold tracking-wider'>Thousands of</h1>
                    <h1 className=' lg:text-4xl md:text-2xl font-semibold tracking-wider'> free templates</h1>
                </div>
                <div>
                    <p className=' xl:text-xl sm:text-xs md:text-sm text-[#7E7E7E] tracking-widest'>Free and easy way to bring</p>
                    <p className=' xl:text-xl sm:text-xs md:text-sm text-[#7E7E7E] tracking-widest'>your ideas to life</p>
                </div>
                
                <div><button className='bg-[#2EBB77] xl:h-10 md:h-8 sm:h-8 left-[493px] text-white px-3 py-1 md:rounded-md sm:rounded-lg xl:rounded-2xl'>Expoler more </button></div>
            </div>
        </div>
    </div>

    <div className=' rounded-xl bg-[url("/banner2.svg")] lg:w-[820px] lg:h-[300px] md:w-auto md:h-auto mt-8 ml-10 mr-12 bg-cover bg-no-repeat bg-center flex items-center relative'>
        
        <div className=' container mx-auto xl:px-4 md:px-4 sm:px-4 sm:py-4 md:py-4 lg:py-4 z-10'>
            <div className=' text-left text-[#000000] flex flex-col gap-[10px] md:gap-[40px]'>
                <div>
                    <h1 className=' lg:text-4xl md:text-2xl font-semibold '>Create your </h1>
                    <h1 className=' lg:text-4xl md:text-2xl font-semibold '>unique style</h1>
                </div>
                <div>
                    <p className=' xl:text-xl sm:text-xs md:text-sm text-[#7E7E7E] tracking-widest'>Free and easy way to create</p>
                    <p className=' xl:text-xl sm:text-xs md:text-sm text-[#7E7E7E] tracking-widest'>your ideas to life</p>
                </div>   
                <div><button className='bg-[#2EBB77] xl:h-10 md:h-8 sm:h-8 left-[493px] text-white px-3 py-1 md:rounded-md sm:rounded-lg xl:rounded-2xl'>Shop now</button></div>
            </div>
        </div>
    </div>
            </div>
 */}


    
            <main className='sm:hidden px-[150px]  sm:px-[30px]  md:px-[30px]  flex sm:flex-col md:flex-col space-x-[50px] 
            sm:space-x-0 md:space-x-0 md:space-y-[50px] sm:space-y-[50px]'>

      <section className='w-full  mt-[20px] bg-[url("/banner1.svg")] bg-cover px-[20px] py-[40px] bg-no-repeat  h-fit'>
       
        <div className='w-1/2  pl-[30px]'>
          <h1 className='w-[85%] sm:w-[90%] md:w-[95%] text-[32px] font-bold'>Thousands of free templates</h1>
          <p className='mt-[20px] text-[rgb(126,126,126)] w-[80%] text-[18px] font-md'>
            Free and easy way to bring your ideas to life
          </p>

          <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
            Explore More
          </button>
        </div>
      </section>

      <section className='w-full h-[390px] mt-[9px] bg-[url("/banner2.svg")] bg-cover bg-no-repeat  px-[20px] py-[40px] md:w-[100%]  rounded-[12px] '>
      
        <div className='w-1/2 pl-[30px]'>
          <h1 className='w-[85%] text-[32px] font-bold'>Create your unique style</h1>
          <p className='mt-[20px] text-[rgb(126,126,126)] w-[80%] text-[18px] font-md'>
            Free and easy way to make your creative to life
          </p>

          <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
            Shop Now
          </button>
        </div>
      </section>
    </main>




    </>
  )
}

export default Component2;