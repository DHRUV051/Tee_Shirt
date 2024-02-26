import Image from "next/image";
import container1 from "../../../public/assets/Contain1/container1.svg";
import container2 from "../../../public/assets/Contain1/container2.svg";

const Container1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-3">
      <div className="relative w-full md:w-[670px] md:min-w-[50%] mt-4 md:mt-0 mb-4 md:mb-0 rounded-lg md:rounded-none overflow-hidden shadow-lg md:shadow-none">
        <Image src={container1} alt="Logo" layout="responsive" width={670} height={550} />
        <div className="absolute top-[55%] left-4 md:left-10 lg:left-14" style={{ width: '40%' }}>
          <p className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px]">T-shirt printing made easy.</p>
          <p className="text-[rgba(126,126,126,1)] text-xs sm:text-sm md:text-base lg:text-lg">Create your design for your online business</p>
          <button
            className="bg-[rgba(46,187,119,1)] text-white rounded-lg p-2 md:p-4 mt-2 md:mt-4 w-full md:w-auto"
            style={{
              maxWidth: '211.39px',
              maxHeight: '56px',
              borderRadius: '12px',
            }}
          >
            Create T-Shirt
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-[670px] md:min-w-[50%] rounded-lg md:rounded-none overflow-hidden shadow-lg md:shadow-none">
        <Image src={container2} alt="Logo" layout="responsive" width={670} height={550} />
        <div className="absolute top-[55%] left-4 md:left-10 lg:left-14" style={{ width: '40%' }}>
          <p className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px]">Bring your ideas to life in minutes</p>
          <p className="text-[rgba(126,126,126,1)] text-xs sm:text-sm md:text-base lg:text-lg">Print shirts for yourself or your creative works</p>
          <button
            className="bg-[rgba(46,187,119,1)] text-white rounded-lg p-2 md:p-4 mt-2 md:mt-4 w-full md:w-auto"
            style={{
              maxWidth: '170.39px',
              maxHeight: '56px',
              borderRadius: '12px',
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container1;
