import logo from "../public/Youtube logo.png";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { FaHistory, FaYoutube } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { CiStreamOn } from "react-icons/ci";

const Sidebar = () => {
  return (
   <>
     <div className="bg-white w-70 p-3 text-white rounded-2xl h-screen overflow-y-auto fixed pb-5" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
     <div className="sticky bg-white">
     <center>
        <Image
          src={logo}
          alt="logo"
          className="rounded-full object-cover w-32 h-10"
        />
        </center>
     </div>
      
      <div>
        <div className="tabs flex flex-col gap-5 mt-5 px-5 ">
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <MdVideoLibrary className="self-center text-[#6B6B6B] text-xl" />
              <p>Libary</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <FaHistory className="self-center text-[#6B6B6B] text-xl" />
              <p>History</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <RiVideoLine className="self-center text-[#6B6B6B] text-xl" />
              <p>Your Videos</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <MdWatchLater className="self-center text-[#6B6B6B] text-xl" />
              <p>Watch Later</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <BiSolidLike className="self-center text-[#6B6B6B] text-xl" />
              <p>Liked Videos</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <IoIosArrowDown className="self-center text-[#6B6B6B] text-xl" />
              <p>Show more</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-gray-500 text-sm font-bold mt-4">SUBSCRIPTION</p>

            <div className="flex gap-2 text-gray-700 cursor-pointer ">
              <Image
                src={avatar}
                alt="avatar"
                className=" text-[#6B6B6B] h-10 object-contain rounded-full w-6"
              />
              <p className="self-center text-sm">Davido </p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer ">
              <Image
                src={avatar}
                alt="avatar"
                className=" text-[#6B6B6B] h-10 object-contain rounded-full w-6"
              />
              <p className="self-center text-sm ">MANOVA DERACELO </p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer ">
              <Image
                src={avatar}
                alt="avatar"
                className=" text-[#6B6B6B] h-10 object-contain rounded-full w-6"
              />
              <p className="self-center text-sm">Demelovato</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer ">
              <Image
                src={avatar}
                alt="avatar"
                className=" text-[#6B6B6B] h-10 object-contain rounded-full w-6"
              />
              <p className="self-center text-sm">Davido </p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer mt-2">
              <IoIosArrowDown className="self-center text-[#6B6B6B] text-xl" />
              <p className="text-sm font-medium">Show 70 more</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
          <p className="text-gray-500 text-sm font-bold mt-4">MORE FROM YOUTUBE</p>

            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <FaYoutube className="self-center text-[#6B6B6B] text-xl" />
              <p>Youtube Premium</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <SiYoutubegaming className="self-center text-[#6B6B6B] text-xl" />
              <p>Gaming</p>
            </div>
            <div className="flex gap-2 text-gray-700 cursor-pointer">
              <CiStreamOn className="self-center text-[#6B6B6B] text-xl" />
              <p>Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Sidebar;
