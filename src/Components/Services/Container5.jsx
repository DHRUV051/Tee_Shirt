import Image from 'next/image'
import PIC1 from '../../../public/assets/Services/pic1.svg'
import PIC2 from '../../../public/assets/Services/pic2.svg'
import PIC3 from '../../../public/assets/Services/pic3.svg'
import PIC4 from '../../../public/assets/Services/pic4.svg'

const Container5 = () => {
  return (
    <main className=' px-[150px] medium:px-[30px] small:px-[30px] py-[50px] flex flex-col items-center'>
      <section className='flex flex-col items-center'>
        <h1 className='text-[40px] font-bold small:text-[20px] medium:text-[30px] small:text-center medium:text-center'>
          T-shirt printing made easy.
        </h1>
        <p className='text-[20px] font-bold small:text-[14px] medium:text-[16px] text-[rgb(126,126,126)] small:text-center medium:text-center'>
          Let us show you how your product come to life.
        </p>
      </section>
      <section className='mt-[50px] flex flex-col items-center'>
        <div className='grid grid-cols-4 gap-[50px] small:grid-cols-1 medium:grid-cols-2'>
          <div className='relative'>
            <div className='bg-gradient-to-b from-[rgb(0,0,0,50)] to-[rgb(0,0,0,51)] p-0 outline-none rounded-[12px]'>
              <Image src={PIC1} alt='' width='' height='' className='opacity-60 rounded-[12px] ' />
            </div>
            <h1 className='absolute bottom-[5%] left-[20%] text-[14px] font-bold text-white'>Printing Services</h1>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-b from-[rgb(0,0,0,50)] to-[rgb(0,0,0,51)] p-0 outline-none rounded-[12px]'>
              <Image src={PIC2} alt='' width='' height='' className='opacity-60 rounded-[12px] ' />
            </div>
            <h1 className='absolute bottom-[5%] left-[20%] text-[14px] font-bold text-white'>
              Graphic Design Services
            </h1>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-b from-[rgb(0,0,0,50)] to-[rgb(0,0,0,51)] p-0 outline-none rounded-[12px]'>
              <Image src={PIC3} alt='' width='' height='' className='opacity-60 rounded-[12px] ' />
            </div>
            <h1 className='absolute bottom-[5%] left-[20%] text-[14px] font-bold text-white'>POD for online stores</h1>
          </div>
          <div className='relative'>
            <div className='bg-gradient-to-b from-[rgb(0,0,0,50)] to-[rgb(0,0,0,51)] p-0 outline-none rounded-[12px]'>
              <Image src={PIC4} alt='' width='' height='' className='opacity-60 rounded-[12px] ' />
            </div>
            <h1 className='absolute bottom-[5%] left-[20%] text-[14px] font-bold text-white'>
              Branding & white- label printing
            </h1>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container5
