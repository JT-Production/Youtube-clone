
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ScrollTab from "../components/ScrollTab"
import Banner from "../components/Banner"
import Thumbnails from "../components/Thumbnails"

const Homepage = () => {

  

  return (
    <>
        <div className="flex gap-2 p-3 w-full">
            <Sidebar />
            <div className=" w-[80%] p-2 text-white absolute left-76">
                <Navbar/>
                <ScrollTab/>
                <Banner/>
                <Thumbnails/>


            </div>
        </div>
    </>
  )
}

export default Homepage