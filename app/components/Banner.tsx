import Image from 'next/image'
import banner from '../public/banner.png'
const Banner = () => {
  return (
    <Image
      src={banner} alt="banner"
      className="rounded-2xl object-cover w-full h-40"/>
  )
}

export default Banner