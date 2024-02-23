
import Image from "next/image"
import container1 from "../../../public/assets/Contain1/container1.svg";
import container2 from "../../../public/assets/Contain1/container2.svg";

const Container1 = () => {
  return (
    <div className="flex space-x-3">
      <Image src={container1} alt="Logo" className="w-[670px] h-[550px]" />
      <Image src={container2} alt="Logo" className="w-[670px] h-[550px]" />
    </div>
  )
}
export default Container1
