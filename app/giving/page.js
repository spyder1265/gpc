import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/Footer';

export default function Giving() {
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
                Giving
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='flex flex-col w-full items-center justify-center'>
            <div className='flex flex-col h-full basis-4/6'>
              
              <div className='flex flex-row gap-10 mt-8'>
                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">Parenting <span className='text-gray-500'>| Head Pastor</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                              View More
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">Creation <span className='text-gray-500'>| Dickon</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                            View More
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">Giving <span className='text-gray-500'>| Head Pastor</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                              View More
                          </a>
                      </div>
                  </div>
                </div>
              </div>

            </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
            <div className='flex flex-col h-full basis-4/6'>
              
              <div className='flex flex-row gap-10 mt-8'>
              <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">In His Presence <span className='text-gray-500'>| Head Pastor</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                              View More
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">Tomb Of Hope <span className='text-gray-500'>| Head Pastor</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                              View More
                          </a>
                      </div>
                  </div>
                </div>

                <div className='flex flex-col text-left'>
                  <div class="max-w-sm bg-white">
                      <a href="#">
                          <img src="/img/Background.jpg" alt="" />
                          
                      </a>
                      <div class="p-5">
                          <a href="#">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-yellowShade hover:text-yellowActive">Supernatural <span className='text-gray-500'>| Head Pastor</span></h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</p>
                          <a href="#" class="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellowShade hover:text-yelloActive focus:ring-4 focus:outline-none">
                              View More
                          </a>
                      </div>
                  </div>
                </div>
              </div>

            </div>
      </section> */}

      
      <div className='mt-20'>
        <Footer />
      </div> 
    </main>
  );
}