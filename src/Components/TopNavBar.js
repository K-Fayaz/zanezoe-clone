import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowDownLeft } from "react-icons/fi";



const TopNavBar = ()=>{
    return(
        <div className="w-full flex flex-row fixed top-0 bg-black z-50">
            {/* The Hamburger */}
            <div className="w-[5%] grid place-items-center py-4 border-r-[1px] border-b-[1px] border-gray-200">
                <RxHamburgerMenu className="text-slate-400 text-2xl"/>
            </div>

            {/* Top section */}
            <div className="w-[95%] font-secondary  flex flex-row justify-between  items-center border-b border-gray-200 text-white">
                <h1 className="ml-2">ZANE & ZOE</h1>
                <div className="mr-2 flex flex-row items-center">
                    <FiArrowDownLeft className="text-xl"/>
                    <FiArrowDownLeft className="text-xl"/>
                    <span>
                        JANUARY 15,2025
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;