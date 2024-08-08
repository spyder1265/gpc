import Navbar from "../components/Navbar";
import { ClockIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen w-full flex flex-col'>
      <section className='relative h-screen bg-transparent w-full'>
        {/* <Image
          src={"/img/bg1.jpg"}
          width={900}
          height={900}
          className='w-full h-full object-cover'
          quality={90}
          alt='bg'
          priority
        /> */}
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-8 py-8 justify-self-end px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-6xl font-bold'>
                You are welcome here.
              </h1>
              <h3 className='text-xl md:text-3xl font-medium'>
                Come worship with us!
              </h3>
              <a
                href='/about'
                className='text-center bg-yellowShade hover:opacity-75  rounded-md py-2 px-4 text-lg font-semibold'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col w-full min-h-screen items-center '>
        <div className='flex basis-2/3  bg-yellowShade/75 w-full '>
          <div className=' h-full flex basis-1/6 md:basis-2/5'></div>
          <div className='flex h-full basis-4/6'>
            <div className='flex flex-col py-4 justify-center md:py-24 space-y-1 text-white'>
              <p className='font-bold text-4xl leading-[46.8px] mb-3 tracking-normal'>
                BRINGING THE BLIND TO THE KNOWLEDGE OF CHRIST.
              </p>
              <span className='md:text-[18px] font-semibold'>
                2 CORINTHIANS 4:4
              </span>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col h-full py-24 md:py-0 bg-overlay md:flex-row gap-y-12 md:gap-36 items-center justify-start text-white'>
          <a href='/about/im-new#service-times' className=''>
            <div className='flex flex-col items-center gap-3'>
              <ClockIcon className='h-14 w-14' />
              <div className='flex flex-col items-center'>
                <h1 className='text-lg font-bold mb-2'>Worship Service</h1>
                <p className='max-w-[300px] text-center flex flex-col'>
                  Join us on Sundays in person or online on YouTube.
                  <span>click here for further details </span>
                </p>
              </div>
            </div>
          </a>
          <a href='/contact' className=''>
            <div className='flex flex-col items-center gap-3'>
              <MapPinIcon className='h-14 w-14' />
              <div className='flex flex-col items-center'>
                <h1 className='text-lg font-bold mb-2'>Location</h1>
                <p className='max-w-[340px] text-center'>
                  Location: (Opposite Ewit School) Agege Zone 6 For more
                  enquires/ prayer contact call us on 0551449712 or 0243088881
                </p>
              </div>
            </div>
          </a>
          <a href='/about/im-new' className=''>
            <div className='flex flex-col items-center gap-3'>
              <ExclamationCircleIcon className='h-14 w-14' />
              <div className='flex flex-col items-center'>
                <h1 className='text-lg font-bold mb-2'>I'm New Here</h1>
                <p className='max-w-[300px] text-center'>
                  Helpful info for visitors
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* <section className='flex flex-col w-full h-screen items-center justify-center'>
        <div className=''></div>
        <h1 className='font-bold text-4xl text-yellowShade'>Upcoming Events</h1>
        <p>Mark your calendars for these great events coming up.</p>
      </section> */}

      <div className='pt-2 bg-slate-50'>
        <Footer />
      </div>
    </main>
  );
}
