import Image from 'next/image'
import Team from '../../utils/Team'

const Container2 = () => {
  return (
    <main className=''>
      <div className=' px-[150px] medium:px-[50px] small:px-[30px] flex flex-col items-center'>
        <h1 className='font-bold text-[48px] small:text-[28px] medium:text-[38px] medium:text-center small:text-center'>Meet the TeeSpace team</h1>
        <h1 className='font-medium text-[20px] small:text-[14px] small:text-center text-[rgb(126,126,126)] medium:text-center medium:text-[18px]'>
          Let us show you how your product come to life.
        </h1>
      </div>

      <div className='px-[150px] small:px-[30px] mt-[80px] mb-[50px]'>
        <div className='grid grid-cols-5 small:grid-cols-1 small:gap-[30px] medium:grid-cols-2 medium:gap-[40px]  gap-[50px] '>
          {Team.map(item => {
            return (
              <div key={item.id} className='flex flex-col items-center '>
                <Image src={item.image} alt='' width='' height='' />
                <h1 className='mt-2 font-bold text-[18px] small:text-[16px] medium:text-[16px] medium:w-[150px] medium:text-center'>{item.name}</h1>
                <h1 className='font-medium text-[15px] text-[rgb(126,126,126)] medium:w-[200px] medium:text-center'>{item.title}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Container2
