import Image from 'next/image'
import Acticel1 from '../../../public/assets/Home/Acticel1.svg'
import Acticel2 from '../../../public/assets/Home/Acticel2.svg'
import User from '../../../public/assets/Home/User.svg'

const Container8 = () => {
  return (
    <main className='px-[150px]  small:px-[30px]  medium:px-[30px]'>
      <section className=' text-center flex flex-col items-center'>
        <h1 className='text-[48px] small:text-[28px] medium:text-[38px] font-bold'>More resources</h1>
        <p className='font-medium text-[18px] w-[55%] text-[rgb(126,126,126)] small:w-full medium:w-full'>
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec
          tetopak
        </p>
      </section>

      <section className='mt-[50px] mb-[100px] flex gap-[50px] small:flex-col medium:flex-col'>
        <div className='w-1/2 small:w-full medium:w-full flex space-x-[40px] small:flex-col small:space-x-0 '>
          <Image src={Acticel1} alt='' width='' height='' className='w-1/2 rounded-[12px] small:w-full medium:w-1/2 ' />
          <div className='mt-[15px]'>
            <div className='bg-[rgb(245,245,245)] text-[rgb(46,187,119)] font-semibold text-[14px] px-3 py-1 rounded-[40px] w-fit'>
              <h1>Design Serivce</h1>
            </div>
            <h1 className='font-bold text-[18px] mt-[10px]'>Make yourself happy with our T-shirt customer…</h1>
            <div className='mt-[10px] flex space-x-2'>
              <Image src={User} alt='' width='' height='' />
              <div className='mt-2'>
                <h1 className='text-[rgb(126,126,126)] text-[15px]'>
                  by<span className='text-[black] font-semibold'> admin</span>
                </h1>
                <h1 className='text-[rgb(126,126,126)] text-[15px]'>August 20, 2022</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='w-1/2 small:w-full medium:w-full  flex space-x-[40px] small:flex-col small:space-x-0 '>
          <Image src={Acticel2} alt='' width='' height='' className='w-1/2 rounded-[12px] small:w-full medium:w-1/2' />
          <div className='mt-[15px] '>
            <div className='flex space-x-[15px]'>
              <div className='bg-[rgb(245,245,245)] text-[rgb(46,187,119)] font-semibold text-[14px] px-3 py-1 rounded-[40px] w-fit'>
                <h1>Print Company</h1>
              </div>
              <div className='bg-[rgb(245,245,245)] text-[rgb(46,187,119)] font-semibold text-[14px] px-3 py-1 rounded-[40px] w-fit'>
                <h1>Print Shop</h1>
              </div>
            </div>

            <h1 className='font-bold text-[18px] mt-[10px]'>
                Are you ready to make it awesome with us
            </h1>
            <div className='mt-[10px] flex space-x-2'>
              <Image src={User} alt='' width='' height='' />
              <div className='mt-2'>
                <h1 className='text-[rgb(126,126,126)] text-[15px]'>
                  by<span className='text-[black] font-semibold'> admin</span>
                </h1>
                <h1 className='text-[rgb(126,126,126)] text-[15px]'>August 20, 2022</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container8
