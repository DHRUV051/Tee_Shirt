import React from 'react'
import Image from "next/image";
import logo from "../../../public/assets/Contain8/logo.svg";
import logo1 from "../../../public/assets/Contain8/logo1.svg";
import logo2 from "../../../public/assets/Contain8/logo2.svg";
import logo3 from "../../../public/assets/Contain8/logo3.svg";
import logo4 from "../../../public/assets/Contain8/logo4.svg";
import logo5 from "../../../public/assets/Contain8/logo5.svg";
import logo6 from "../../../public/assets/Contain8/logo6.svg";

const container8 = () => {
  return (
    <main className="w-full h-[500px] max-w-[1345px] pt-2 relative">
        <section className="hidden md:block">
        <div className="absolute w-[104px] h-[104px] pt-10 ml-30 top-[40px] left-[620px] ">
        <Image src={logo} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[104px] h-[104px] items-start pt-36 top-[12px] left-[300px]">
        <Image src={logo1} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[178px] h-[178px] items-start pt-36 top-[70px] left-[50px]">
        <Image src={logo2} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[132px] h-[132px] items-start pt-36 top-[200px] left-[250px]">
        <Image src={logo3} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[125px] h-[125px] items-start pt-36 top-[12px] left-[950px]">
        <Image src={logo4} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[100px] h-[100px] items-start pt-36 top-[80px] left-[1150px]">
        <Image src={logo5} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>

        <div className=" absolute w-[140px] h-[140px] items-start pt-36 top-[200px] left-[1030px]">
        <Image src={logo6} alt="logo" width={10} height={10} layout="responsive" objectFit="contain" />
        </div>
       </section>

        <div className=" relative flex flex-col justify-center items-center  text-center top-[200px] ">
            <h1 className="font-bold w-[400px] h-[97px]text-[24px] lg:text-[32px] leading-tight">Join the 7,000+ companies trusting us</h1>
            <p className="text-[rgba(126,126,126,1)] mt-4">You’ve got the ideas, we’ve got the tools</p>
            <button className="mt-4 bg-[rgba(46,187,119,1)] text-white rounded-lg p-2 lg:p-4 w-[181px] h-[56px] lg:w-auto"
              style={{
                maxWidth: '181.39px',
                maxHeight: '56px',
                borderRadius: '12px',
              }}>
              Get Started
            </button>
          </div>
    </main>
  )
}

export default container8
