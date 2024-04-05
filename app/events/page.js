import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/Footer';

export default function Events() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-[500px] w-full'>
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
              <h1 className='text-3xl md:text-5xl font-bold'>
                Events
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
            <div className='flex flex-col h-full basis-4/6'>
              <div className='flex flex-col py-4 justify-center text-center md:pt-24 space-y-1 text-gray-700'>
                <h2 className='flex justify-center font-bold text-4xl leading-[46.8px] mb-4 tracking-normal'>
                  Events
                </h2>
                <p className='flex justify-center text-xl font-semibold'>
                  Mark your calendars for these great events coming up
                </p>
              </div>
              <div className='flex flex-row gap-10 mt-8'>
                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                      <a href="#">
                          <img class="rounded-t-lg" src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Community Good Friday Service</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">29-03-2024 | 7:00PM | @ Church</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellowShade rounded-lg hover:bg-greenActive focus:ring-4 focus:outline-none">
                              More
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                      <a href="#">
                          <img class="rounded-t-lg" src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Women's Easter Gathering</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">30-03-2024 | 10:00AM | @ Church</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellowShade rounded-lg hover:bg-greenActive focus:ring-4 focus:outline-none">
                              More
                              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                      <a href="#">
                          <img class="rounded-t-lg" src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Easter Service</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">01-04-2024 | 10:00AM | @ Church</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellowShade rounded-lg hover:bg-greenActive focus:ring-4 focus:outline-none">
                            More
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                          </a>
                      </div>
                  </div>
                </div>
              </div>

            </div>
      </section>
      
      <div className='mt-20'>
        <Footer />
      </div> 
    </main>
  );
}