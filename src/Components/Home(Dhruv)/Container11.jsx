import Link from "next/link"

const Container11 = () => {
  return (
    <main className="">
        <section className="small:flex small:flex-col small:items-center small:justify-center medium:flex medium:flex-col medium:items-center medium:justify-center">
                <ul className="px-[350px] small:px-[30px]  small:grid small:grid-cols-2 small:gap-[30px]  flex justify-between text-[28px] font-bold">
                    <li>
                        <Link href="https://facebook.com/">Facebook</Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/">Twitter</Link>
                    </li>
                    <li>
                        <Link href="https://instagram.com/">Instaram</Link>
                    </li>
                    <li>
                        <Link href="https://youtube.com/">Youtube</Link>
                    </li>
                    
                </ul>
        </section>
    </main>
  )
}

export default Container11