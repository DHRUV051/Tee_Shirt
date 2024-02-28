import joinMember from '@/utils/JoinMember'
import Image from 'next/image'

const Container4 = () => {
  return (
    <main className='px-[150px] medium:p-[50px] small:p-[30px] flex flex-col items-center '>
      <section className='flex flex-col items-center'>
        <div className='rounded-[40px] bg-[rgb(180,121,217,15%)] py-2 px-4  w-fit'>
          <h1 className='text-[18px] font-bold text-[rgb(180,121,217)]'>Join Us Today</h1>
        </div>
        <h1 className='mt-[20px] font-bold text-[48px] medium:text-[38px] small:text-[28px]'>Meet Our Team!</h1>
      </section>

      <section className='mt-[50px] grid grid-cols-4 gap-[50px] small:grid-cols-1 medium:grid-cols-2 '>
        {joinMember.map(item => {
          return (
            <div key={item.id}>
              <Image src={item.image} alt='' width='' height='' className='rounded-[12px]' />
              <div className=' px-[20px] py-[20px] text-center '>
                <h1 className='font-bold text-[18px]'>{item.name}</h1>
                <h1 className='font-medium text-[15px] text-[rgb(126,126,126)]'>{item.title}</h1>
              </div>
            </div>
          )
        })}
      </section>

      <section className='mt-[50px] mb-[10px] flex flex-col items-center'>
                <button className='outline oultine-[0px] outline-[rgb(238,238,238)] font-bold text-[15px] px-[20px] py-[10px] rounded-[12px]'>
                        Join Our Team
                </button>
      </section>
    </main>
  )
}

export default Container4
