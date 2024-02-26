import Container1 from '@/Components/Home(Dhruv)/Container1'
import Container2 from '@/Components/Home(Dhruv)/Container2'


const Home = () => {
  return (
    <main className='space-y-[50px] mt-[50px] '>
      <section className='px-[150px] small:px-[30px] medium:px-[30px]'>
        <Container1 />
      </section>
      <section>
            <Container2/>
      </section>
    </main>
  )
}

export default Home
