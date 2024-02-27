import Image from 'next/image'
import User1 from '../../../public/assets/Home/test1.svg'
import User2 from '../../../public/assets/Home/test2.svg'
import User3 from '../../../public/assets/Home/test3.svg'

const Container9 = () => {
  return (
    <main className='px-[150px]  small:px-[30px]  medium:px-[30px] bg-[url("/assets/Home/BgDesign.svg")] bg-cover bg-no-repeat w-full h-[500px]'>
      <section className=' text-center flex flex-col items-center'>
        <h1 className='text-[48px] small:text-[28px] medium:text-[38px] font-bold'>What People Are Saying</h1>
        <p className='font-medium text-[18px] w-[55%] text-[rgb(126,126,126)] small:w-full medium:w-full'>
          We provide support for more than 15K+ Businesses.
        </p>
      </section>

      <section className='mt-[50px] flex flex-col  items-center align-middle'>
        <div className='flex medium:flex-col small:flex-col gap-[20px] '>
          <div className='bg-[rgb(255,255,255)] shadow-xl px-[20px] py-[35px]'>
            <div className='flex space-x-2'>
              <Image src={User1} alt='' width='' height='' />
              <div className='small:mt-[10px] medium:mt-[10px] w-[150px] flex space-x-2 border-b border-dashed border-[rgb(243,187,46)]'>
                <h1 className='font-bold text-[18px] mt-2'>Dean D.</h1>
                <span className='text-[rgb(126,126,126)] mt-[10px] font-medium text-[15px]'>Director</span>
              </div>
            </div>
            <p className='mt-[15px] text-[20px] font-medium '>
              “ Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are
              largely still mainstream on paper.”
            </p>
          </div>

          <div className='bg-[rgb(255,255,255)] shadow-lg px-[20px] py-[35px]'>
            <div className='flex space-x-2'>
              <Image src={User2} alt='' width='' height='' />
              <div className='small:mt-[10px] medium:mt-[10px] w-[180px] flex space-x-2 border-b border-[rgb(243,187,46)] border-dashed'>
                <h1 className='font-bold text-[18px] mt-2'>Cristian L.</h1>
                <span className='text-[rgb(126,126,126)] mt-[10px] font-medium text-[15px]'>Manager</span>
              </div>
            </div>
            <p className='mt-[15px] text-[20px] font-medium'>
              “ Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still
              mainstream on paper occasion welcome.”
            </p>
          </div>

          <div className='bg-[rgb(255,255,255)] shadow-lg px-[20px] py-[35px]'>
            <div className='flex space-x-2'>
              <Image src={User3} alt='' width='' height='' />
              <div className='small:mt-[10px] medium:mt-[10px] w-[150px] flex space-x-2 border-b border-dashed border-[rgb(243,187,46)]'>
                <h1 className='font-bold text-[18px] mt-2'>Lionel R.</h1>
                <span className='text-[rgb(126,126,126)] mt-[10px] font-medium text-[15px]'>Director</span>
              </div>
            </div>
            <p className='mt-[15px] text-[20px] font-medium'>
              “ Top noth support - Flags, programs for, birthday, and occasion welcome are largely still mainstream on
              paper exceptional capacities.”
            </p>
          </div>
        </div>
        <div className='mt-[50px] flex space-x-2'>
          <div>
            <div className='border border-black rounded-full '>
              <div className=' rounded-full p-[4px] w-fit'></div>
            </div>
          </div>

          <div>
            <div className='border border-[rgb(238,238,238)] rounded-full '>
              <div className='bg-black rounded-full p-[4px] w-fit'></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Container9
