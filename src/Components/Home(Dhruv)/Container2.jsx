import Image from "next/image";
import Spotify from "../../../public/assets/Home(DHRUV)/spotify.svg";
import Feedly from "../../../public/assets/Home(DHRUV)/feedly.svg";
import Lattice from "../../../public/assets/Home(DHRUV)/lattice.svg";
import Hopin from "../../../public/assets/Home(DHRUV)/hopin.svg";
import Upwork from "../../../public/assets/Home(DHRUV)/upwork.svg";

const Container2 = () => {
  return (
    <main className='bg-[rgb(245,245,245)] px-[150px] py-[70px] small:px-[50px] small:py-[30px] medium:px-[50px] medium:py-[30px] flex flex-col items-center'>
      <div className='w-2/3 small:w-full medium:w-full'>
        <p className='text-[24px] font-bold text-center'>
          “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
        </p>
      </div>
      <div className="mt-[30px]">
            <ul className="flex small:grid small:grid-cols-3 medium:grid medium:grid-cols-3">
                <li>
                    <Image src={Spotify} alt="" width="" height="" />
                </li>
                <li>
                    <Image src={Feedly} alt="" width="" height="" />
                </li>
                <li>
                    <Image src={Lattice} alt="" width="" height="" />
                </li>
                <li>
                    <Image src={Hopin} alt="" width="" height="" />
                </li>
                <li>
                    <Image src={Upwork} alt="" width="" height="" />
                </li>
                <li>
                    <Image src={Hopin} alt="" width="" height="" />
                </li>
            </ul>
      </div>
    </main>
  )
}
export default Container2
