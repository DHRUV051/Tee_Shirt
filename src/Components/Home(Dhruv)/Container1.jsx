import Link from 'next/link'
import Image from 'next/image'
import Home1 from '../../../public/assets/Home/home1.svg'
import Effect from '../../../public/assets/Home/texteffect.svg'
import Arrow from '../../../public/assets/Home/leftarrow.svg'
import { IoMdPlay } from 'react-icons/io'

const Container1 = () => {
  return (
    <main className='flex small:flex-col medium:flex-col px-[150px] small:px-[30px] medium:px-[30px]'>
      
      <section className='w-1/2 small:w-full medium:w-full small:order-first medium:order-first order-last  flex flex-col items-center'>
        <Image src={Home1} alt='' width='auto' height='auto' className='min-w-[300px] ' />
      </section>

      <section className='small:flex small:flex-col small:items-center medium:flex medium:flex-col medium:items-center order-first w-1/2 small:w-full medium:w-full small:order-first medium:order-first small:mt-[50px] medium:mt-[50px] '>
        <div className='rounded-[40px] bg-[rgb(180,121,217,15%)] py-2 px-4  w-fit'>
          <h1 className='text-[18px] font-bold text-[rgb(180,121,217)]'>Create Your Own</h1>
        </div>

        <div className='mt-[20px] relative'>
          <h1 className='text-[68px] font-bold w-11/12 small:w-full medium:w-full small:text-[28px] medium:text-[38px]'>
            Make the most of Printing
          </h1>
          <Image
            src={Effect}
            alt=''
            width='auto'
            height='auto'
            className='absolute right-8 top-[80px] small:hidden medium:hidden'
          />
        </div>

        <div className='mt-[10px]'>
          <p className='text-[18px] font-medium text-[rgb(126,126,126)] w-11/12 small:w-full medium:w-full small:text-center medium:text-center'>
            What’s more, we do it right! A full administration printing background. Print shirts for yourself or your
            online business
          </p>
        </div>

        <div className='mt-[20px] space-x-3'>
          <button className='bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px]'>
            <Link href='/shop' className='flex text-white'>
              Shop now
              <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2' />
            </Link>
          </button>
          <button>
            <Link href='/shop' className='flex text-[16px] font-bold'>
              How We Work
              <div className='ml-2 -mt-[2px]  border-2 border-slate-950 rounded-full px-[3px] pl-[4px] py-[4px]'>
                <IoMdPlay />
              </div>
            </Link>
          </button>
        </div>

        <div className='flex mt-[20px]'>
          <div className='pr-[40px]'>
            <h1 className='font-bold text-[48px] small:text-center medium:text-center'>4k+</h1>
            <p className='font-medium text-[18px] text-[rgb(126,126,126)]'>Collections</p>
          </div>

          <div class='inline-block mt-5 h-[70px] min-h-[1em] w-[1px] self-stretch bg-[rgb(204,204,204)]'></div>

          <div className='pl-[40px]'>
            <h1 className='font-bold text-[48px] small:text-center medium:text-center'>9k+</h1>
            <p className='font-medium text-[18px] text-[rgb(126,126,126)]'>items trusted to deliver</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container1
