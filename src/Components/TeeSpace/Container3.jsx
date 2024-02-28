import Image from 'next/image'
import Person from '../../../public/assets/Teespace/person.svg'
import Member1 from '../../../public/assets/Teespace/member1.svg'
import MemberData from '@/utils/Member'
const Container3 = () => {
  return (
    <main className='bg-[rgb(248,248,248)] pb-[100px] px-[150px] medium:p-[50px] small:p-[30px] flex flex-col items-center'>
      <section className='flex space-x-2'>
        <Image src={Person} alt='' width='' height='' />
        <h1 className='font-bold text-[14px]'>OUR TEAM</h1>
      </section>
      <section className='mt-[30px]'>
        <h1 className='font-bold text-[48px] small:text-[20px] medium:text-[38px]'>Meet the TeeSpace team</h1>
      </section>
      <section className='mt-[50px] grid grid-cols-4 gap-[50px] small:grid-cols-1 medium:grid-cols-2 bg-[rgb(248,248,248)] '>
        {MemberData.map(item => {
          return (
            <div key={item.id} className='shadow-lg'>
              <Image src={item.image} alt='' width='' height='' className='rounded-tl-[12px] rounded-tr-[12px]' />
              <div className='bg-[rgb(255,255,255)] px-[20px] py-[20px] rounded-bl-[12px] rounded-br-[12px]'>
                <h1 className='font-bold text-[18px]'>{item.name}</h1>
                <h1 className='font-medium text-[15px] text-[rgb(126,126,126)]'>{item.title}</h1>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Container3
