import Navbar from "@/components/Navbar";
import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-full w-full'>
        <Image
          src={"/img/trialbg.jpeg"}
          width={900}
          height={900}
          className='w-full h-full object-cover'
          quality={90}
          alt='bg'
        />
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-6xl font-bold'>
                You are welcome here.
              </h1>
              <h3 className='text-xl md:text-3xl font-medium'>
                Come worship with us!
              </h3>
              <a
                href='#about'
                className='text-center bg-yellowShade hover:opacity-75  rounded-md py-2 px-4 text-lg font-semibold'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col w-full h-screen items-center justify-center'>
        <div className='flex h-2/3 w-full justify-center overflow-hidden relative'>
          <Image
            src={"/img/Background.jpg"}
            width={900}
            height={900}
            className='w-full h-full object-cover'
            alt='bg'
          />
          <div className='absolute top-0 bg-yellowShade/75 w-full h-full flex '>
            <div className=' h-full flex basis-1/6 md:basis-2/5'></div>
            <div className='flex h-full basis-4/6'>
              <div className='flex flex-col py-4 justify-center md:py-24 space-y-1 text-white'>
                <p className='font-bold text-4xl leading-[46.8px] mb-3 tracking-normal'>
                  The greatest thing in the Kingdom of God is relationship,
                  first with God and then with one another.
                </p>
                <span className='md:text-[18px] font-semibold'>
                  Matthew 22:36-40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-1/2 w-full bg-overlay'>
          <div className='w-full flex items-center justify-center text-white'>
            <a href='#' className=''>
              <ClockIcon className='h-12 w-12' />
            </a>
            <a href='#' className=''>
              <MapPinIcon className='h-12 w-12' />
            </a>
            <a href='#' className=''>
              <ExclamationCircleIcon className='h-12 w-12' />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
