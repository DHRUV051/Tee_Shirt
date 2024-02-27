import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const Poster = () => {

    const [poster,setPoster] = useState(true);
    return (
        <>
            {
                poster ? 
                <>    
                <header className="small:hidden  flex w-full bg-gradient-to-r from-[rgb(256,253,236,100%)] to-[rgb(219,244,226,100%)] h-[45px] ">
    
                    <section className="pt-2 ml-auto">   
                            <div className="flex space-x-1">
    
                           
                                <h1 className="font-bold text-[18px] text-center ">🔥 Free shipping on all U.S. orders $50+</h1>
    
                                <div className="">
                                    <button className="bg-white ml-[30px] w-24 rounded-[7px] font-bold text-[15px] py-[3px] px-[4px]">
                                            Shop Now
                                    </button>
                                </div>
    
                            </div>
                    </section>
    
                    <div className="ml-auto pt-3 pr-6">
                        <button >
                            <HiOutlineXMark onClick={() => setPoster(false)}/>
                        </button>
                    </div>
                </header>
                </>
                : 
                ""
            }
            
        </>
    )
}

export default Poster;