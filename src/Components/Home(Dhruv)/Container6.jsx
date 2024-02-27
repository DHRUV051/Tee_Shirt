import Image from 'next/image'
import Select1 from '../../../public/assets/Home/select1.svg'
import Select2 from '../../../public/assets/Home/select2.jpg'
import Arrow from '../../../public/assets/Home/leftarrow.svg'

const Container6 = () => {
  return (
    <main className='small:hidden px-[150px]  small:px-[30px]  medium:px-[30px]  flex small:flex-col medium:flex-col space-x-[50px] small:space-x-0 medium:space-x-0 medium:space-y-[50px] small:space-y-[50px]'>
      <section className='w-full  mt-[20px] bg-[url("/assets/Home/select1.svg")] bg-cover   px-[20px] py-[40px] bg-no-repeat  h-fit'>
       
        <div className='w-1/2  pl-[30px]'>
          <h1 className='w-[85%] small:w-[90%] medium:w-[95%] text-[32px] font-bold'>Thousands of free templates</h1>
          <p className='mt-[20px] text-[rgb(126,126,126)] w-[80%] text-[18px] font-medium'>
            Free and easy way to bring your ideas to life
          </p>

          <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
            Explore More
            <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2 mt-[7px]' />
          </button>
        </div>
      </section>

      <section className='w-full h-[390px] mt-[9px] bg-[url("/assets/Home/select2.svg")] bg-cover bg-no-repeat  px-[20px] py-[40px] medium:w-[100%]  rounded-[12px] '>
      
        <div className='w-1/2 pl-[30px]'>
          <h1 className='w-[85%] text-[32px] font-bold'>Create your unique style</h1>
          <p className='mt-[20px] text-[rgb(126,126,126)] w-[80%] text-[18px] font-medium'>
            Free and easy way to make your creative to life
          </p>

          <button className='mt-[20px] bg-[rgb(46,187,119)] px-4 py-2 rounded-[12px] flex text-white'>
            Shop Now
            <Image src={Arrow} alt='' width='auto' height='auto' className='ml-2 mt-[7px]' />
          </button>
        </div>
      </section>
    </main>
  )
}

export default Container6
