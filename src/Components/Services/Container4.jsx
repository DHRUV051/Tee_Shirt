'use client'

import Image from 'next/image'
import Spark from '../../../public/assets/Services/spark.svg'
import DIV from '../../../public/assets/Services/div.svg'
import Accordion from '../Accordion'

const Container4 = () => {
  return (
    <main className=' px-[150px] medium:px-[30px] small:px-[30px] bg-[rgb(245,245,245)] py-[50px] '>
      <section className='flex justify-center item-center space-x-2'>
        <Image src={Spark} alt='' width='' height='' />
        <h1 className='mt-[2px] font-bold text-[14px] uppercase'>Fast and Quality Service</h1>
      </section>
      <section className='flex flex-col items-center'>
        <h1 className=' mt-[20px] font-bold text-[40px] medium:text-[30px] small:text-[20px] w-[70%] text-center'>
          Print shirts for yourself or your online business
        </h1>
      </section>

      <section className='mt-[50px] small:mt-[20px] medium:mt-[30px] medium:flex-col small:flex-col flex small:space-y-[50px] medium:space-y-[50px] space-x-[250px] medium:space-x-0 small:space-x-0'>
        <div className='order-first flex relative w-[40%] medium:w-full small:w-full'>
          {/* <Image
            src={DIV1}
            alt=''
            width=''
            height=''
            className='relative top-0 h-full z-20 w-[90%] medium:w-9/12 small:w-full'
          /> */}
          {/* <Image
            src={DIV2}
            alt=''
            width=''
            height=''
            className='absolute small:hidden medium:top-[400px] medium:right-[50px] top-[100px] -right-[180px] rounded-[12px] z-30'
          /> */}
          <Image
            src={DIV}
            alt=''
            width=''
            height=''
            className='w-full scale-150 absolute 
          top-[60px] small:relative medium:relative small:scale-100 small:top-0 medium:scale-100 medium:top-0'
          />
        </div>

        <div className='w-[60%]  medium:w-full small:w-full flex flex-col space-y-[20px] '>
          <Accordion
            title='Graphic Design Services'
            answer='To make a T-shirt design, your first need to install specific graphic
            design software. Once you’ve done that, start your creation and make
            sure that your final design is at least 220 PPI so it won’t be pixelated
            when printed…'
          />
          <Accordion
            title='Printing Services'
            answer='To make a T-shirt design, your first need to install specific graphic
            design software. Once you’ve done that, start your creation and make
            sure that your final design is at least 220 PPI so it won’t be pixelated
            when printed…'
          />
          <Accordion
            title='POD for online stores'
            answer='To make a T-shirt design, your first need to install specific graphic
            design software. Once you’ve done that, start your creation and make
            sure that your final design is at least 220 PPI so it won’t be pixelated
            when printed…'
          />
          <Accordion
            title='Branding & white-label printing'
            answer='To make a T-shirt design, your first need to install specific graphic
            design software. Once you’ve done that, start your creation and make
            sure that your final design is at least 220 PPI so it won’t be pixelated
            when printed…'
          />
        </div>
      </section>
    </main>
  )
}

export default Container4
