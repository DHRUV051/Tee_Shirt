import Link from 'next/link'
import Image from 'next/image'
import img1 from '../../../public/assets/Print/img1.svg'
import img2 from '../../../public/assets/Print/img2.svg'
import img3 from '../../../public/assets/Print/img3.svg'
import img4 from '../../../public/assets/Print/img4.svg'
import img5 from '../../../public/assets/Print/img5.svg'
import img6 from '../../../public/assets/Print/img6.svg'

const Component1 = () => {
  return (
    <main className='relative bg-[rgb(180,121,217,15%)] bg-gradient-to-b from-[rgb(180,121,217,40%)] via-[rgb(180,121,217,30%)] to-[rgb(180,121,217,0%)] 
    w-full flex flex-col items-center h-[550px] mt-10'>
      <section className=' sm:hidden md:hidden'>
        <Image
          src={img1}
          alt=''
          width=''
          height=''
          className='absolute top-0 left-16 rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
        <Image
          src={img2}
          alt=''
          width=''
          height=''
          className='absolute top-[260px] left-0 shadow-2xl rounded-tr-[12px] rounded-br-[12px]'
        />
         <Image
          src={img3}
          alt=''
          width=''
          height=''
          className='absolute top-[365px] left-[350px] rounded-[12px] shadow-2xl '
        />
        <Image
          src={img4}
          alt=''
          width=''
          height=''
          className='absolute top-0 right-[260px] rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
      <Image
          src={img5}
          alt=''
          width=''
          height=''
          className='absolute top-[160px] right-0 shadow-2xl rounded-tl-[12px] rounded-bl-[12px]'
        />
         <Image
          src={img6}
          alt=''
          width=''
          height=''
          className='absolute top-[370px] right-[300px]  rounded-tr-[12px] rounded-tl-[12px]'
        />
      </section>

      <section className='text-center flex flex-col items-center pt-[100px] w-1/2 sm:w-full md:w-full sm:px-[30px] md:px-[30px] '>
        <h1 className='w-9/12 sm:w-full md:w-full text-[48px] sm:text-[28px] md:text-[38px] font-bold'> 
        Let's configure you own print product
        </h1>
        <p className='font-md text-[18px] w-[55%]  text-[rgb(126,126,126)] sm:w-full md:w-full mt-[10px] sm:mt-[20px] md:mt-[30px]'>
        The easiest way to get your print as you want
        </p>
        <div className='mt-[20px] flex'>
          <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px]'>Print Your Own</h1>
             
            </Link>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Component1
