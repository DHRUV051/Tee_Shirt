import Link from 'next/link'
import Image from 'next/image'
import Arrow from '../../../public/assets/Home/leftarrow.svg'
import BlackArrow from '../../../public/assets/Home/BlackArrow.svg'
import Image1 from '../../../public/assets/Home/absolute1.svg'
import Image2 from '../../../public/assets/Home/absolute2.svg'
import Image3 from '../../../public/assets/Home/absolute3.svg'
import Image4 from '../../../public/assets/Home/absolute4.svg'
import Image5 from '../../../public/assets/Home/absolute5.svg'
import Image6 from '../../../public/assets/Home/absolute6.svg'

const Container10 = () => {
  return (
    <main className='relative bg-gradient-to-b from-[rgb(180,121,217,40%)] via-[rgb(180,121,217,30%)] to-[rgb(180,121,217,0%)] w-full flex flex-col items-center h-[500px]'>
      <section className=' small:hidden medium:hidden'>
        <Image
          src={Image1}
          alt=''
          width=''
          height=''
          className='absolute top-0 left-16 rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
        <Image
          src={Image2}
          alt=''
          width=''
          height=''
          className='absolute top-[260px] left-0 shadow-2xl rounded-tr-[12px] rounded-br-[12px]'
        />
        <Image
          src={Image3}
          alt=''
          width=''
          height=''
          className='absolute top-[290px] left-[350px] rounded-[12px] shadow-2xl'
        />
        <Image
          src={Image4}
          alt=''
          width=''
          height=''
          className='absolute top-0 right-[260px] rounded-bl-[12px] rounded-br-[12px] shadow-2xl'
        />
        <Image
          src={Image5}
          alt=''
          width=''
          height=''
          className='absolute top-[160px] right-0 shadow-2xl rounded-tl-[12px] rounded-bl-[12px]'
        />
        <Image
          src={Image6}
          alt=''
          width=''
          height=''
          className='absolute top-[350px] right-[300px] shadow-2xl rounded-tr-[12px] rounded-tl-[12px]'
        />
      </section>

      <section className='text-center flex flex-col items-center pt-[100px] w-1/2 small:w-full medium:w-full small:px-[30px] medium:px-[30px] '>
        <h1 className='w-9/12 small:w-full medium:w-full text-[48px] small:text-[28px] medium:text-[38px] font-bold'> 
          Enjoy up your vacations in the best T-shirts
        </h1>
        <p className='font-medium text-[18px] w-[55%]  text-[rgb(126,126,126)] small:w-full medium:w-full mt-[50px] small:mt-[20px] medium:mt-[30px]'>
          T-shirts that keep you moving.
        </p>
        <div className='mt-[50px] flex'>
          <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] '>
            <Link href='/shop' className='text-white text-center flex'>
              <h1 className='font-bold text-[15px]'>Shop Now</h1>
              <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2' />
            </Link>
          </button>

          <button className='px-4 py-2 rounded-[12px] text-center '>
            <Link href='/contact' className='flex'>
              <h1 className='font-bold text-[15px]'>Contact Us</h1>
              <Image src={BlackArrow} alt='' width='auto' height='auto' className='ml-2' />
            </Link>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Container10
