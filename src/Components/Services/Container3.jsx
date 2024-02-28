import PrintServiceData from '@/utils/PrintServiceData'
import Image from 'next/image'

const Container3 = () => {
  return (
    <main className='px-[150px] medium:p-[50px] small:p-[30px] flex flex-col items-center '>
      <section className='flex flex-col items-center'>
        <div className='rounded-[40px] bg-[rgb(180,121,217,15%)] py-2 px-4  w-fit'>
          <h1 className='text-[18px] font-bold text-[rgb(180,121,217)]'>Quality Service</h1>
        </div>
        <div className='relative'>
          <h1 className=' mt-[20px] font-bold text-[48px] medium:text-[38px] small:text-[28px]'>
            T-shirt Printing for Everyone
          </h1>
          <div className='absolute top-[63px] left-[350px] w-[300px] h-[10px] bg-gradient-to-br from-[rgb(177,241,179,100%)] to-[rgb(243,238,194,100%)] -z-10 small:hidden medium:w-[240px] medium:top-[50px] medium:left-[275px]'></div>
        </div>
      </section>

      <section className='flex flex-col items-center'>
        <div className='mt-[50px] grid grid-cols-3 gap-[50px] small:grid-cols-1 medium:grid-cols-1'>
          {PrintServiceData.map(item => {
            return (
              <div
                key={item.id}
                className='bg-[rgb(255,255,255)] 
            p-[12px] outline outline-[1px] outline-[rgb(238,238,238)] rounded-[12px] shadow-lg'
              >
                <Image src={item.image} alt='' width='' height='' className='rounded-[12px] w-full' />
                <div className=' px-[20px] py-[20px] text-center '>
                  <h1 className='font-bold text-[24px]'>{item.title}</h1>
                  <h1 className='mt-[10px] font-medium text-[15px] text-[rgb(126,126,126)]'>{item.content}</h1>
                </div>
                <div>
                  <button className='w-full bg-[rgb(245,245,245)] rounded-[12px] py-[10px] text-center'>
                    {item.label}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Container3
