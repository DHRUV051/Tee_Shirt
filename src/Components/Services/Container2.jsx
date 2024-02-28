import Image from 'next/image'
import drop from '../../../public/assets/Services/drop.svg'
import ServicesData from '@/utils/ServicesData'
const Container2 = () => {
  return (
    <main className='px-[150px] medium:px-[50px] small:px-[30px] flex flex-col items-center'>
      
      <section className='flex space-x-2'>
        <Image src={drop} alt='' width='' height='' />
        <h1 className='mt-[2px] font-bold text-[14px] uppercase'>All the features you need</h1>
      </section>

      <section className='mt-[30px]'>
        <h1 className='font-bold text-[48px] small:text-[20px] medium:text-[38px]'>
        Fast and Quality Service
        </h1>
      </section>


      <section className='mt-[50px] grid grid-cols-4 gap-[40px] small:grid-cols-1 medium:grid-cols-2 small:gap-[20px]'>
        {ServicesData.map(item => {
          return (
            <div key={item.id} className='flex flex-col items-center'>
              <Image src={item.image} alt='' width='' height='' className=''/>
              <div className=' px-[20px] py-[20px]'>
                <h1 className='font-bold text-[18px] text-center'>{item.title}</h1>
                <p className='font-medium text-[15px] text-[rgb(126,126,126)] text-center'>{item.content}</p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Container2
