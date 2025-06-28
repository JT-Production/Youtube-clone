"use client";
import { AiFillHome } from "react-icons/ai";
import { BiSolidMoviePlay, BiSolidVideoPlus } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { HiFire, HiOutlineChevronDown } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import Image from "next/image";
import avatar from "../public/avatar.png"
import useStore from "./store";


const Navbar = () => {
  // const [searchQuery, setSearchQuery] = useState<searchProps>({ searchQuery: "", });
  const {  setSearchQuery } = useStore();
 

  return (
    <>
      <div className="text-black px-5 py-4 bg-white mb-3 rounded-2xl">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex gap-6">
            <div className="bg-gray-100 p-3 rounded-lg">
              <CiMenuBurger className="text-xl  text-neutral-600"/>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
            <AiFillHome className="text-xl  text-red-600"/>
          </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <HiFire className="text-xl  text-neutral-600"/>
        </div>
            <div className="bg-gray-100 p-3 rounded-lg">
            <BiSolidMoviePlay className="text-xl text-neutral-600"/>
            </div>
          </div>

          <div className="">
            <input type="text"
            
            onChange={(e) => setSearchQuery(e.target.value) }
             placeholder="Search..." className="bg-gray-100 px-5 p-3 rounded-lg w-100 text-gray-500 text-sm outline-0"/>
          </div>

          <div className="flex gap-6">
            <div className="bg-gray-100 p-3 rounded-lg">
              <BiSolidVideoPlus className="text-xl  text-neutral-600"/>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
            <PiDotsNineBold className="text-xl  text-red-600" style={{fontWeight:"bold"}}/>
          </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <IoMdNotifications className="text-xl  text-neutral-600"/>
        </div>
            <div className="bg-gray-100 px-2 py-1 rounded-lg flex">
            <Image src={avatar} alt="avatar" className="rounded-full h-9 w-10 object-cover" />
            <HiOutlineChevronDown className="text-xl text-neutral-600 self-center"/>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;

