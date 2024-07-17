import Navbar from "../../components/Navbar";
import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Home() {
  const images = [
    {
      title: "grid1",
      image: "/img/grid1.jpeg",
    },
    {
      title: "grid2",
      image: "/img/grid2.jpeg",
    },
    {
      title: "grid3",
      image: "/img/grid3.jpeg",
    },
    {
      title: "grid4",
      image: "/img/grid4.jpeg",
    },
  ];
  return (
    <div className='min-h-screen w-full'>
      <div className='relative h-[500px] w-full'>
        <Image
          src={"/img/trialbg.jpeg"}
          width={900}
          height={900}
          className='w-full h-full object-cover'
          quality={90}
          alt='bg'
          priority
        />
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>Gallery</h1>
            </div>
          </div>
        </div>
      </div>
      <section className='flex flex-col w-full h-full items-center justify-center'>
        <div className='grid grid-cols-1 w-full h-full sm:grid-cols-2 gap-4 p-6 bg-gray-100'>
          {images.map((img, i) => (
            <div
              key={img.title + i}
              className='bg-white p-4 rounded-lg shadow-md'
            >
              <img
                src={img.image}
                alt={img.title}
                className='w-full h-full object-cover rounded-md mb-4'
              />
            </div>
          ))}
        </div>
      </section>

      <div className=''>
        <Footer />
      </div>
    </div>
  );
}