import Navbar from "../../../components/Navbar";
import Image from "next/image";
import AboutNav from "@/components/AboutNav";
import Footer from "../../../components/Footer";

export default function OurTeam() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-[500px] w-full'>
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
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>Our Team</h1>
            </div>
          </div>
        </div>
      </section>

      <AboutNav />

      <section className=''>
        <div className='py-8 px-4 mx-auto flex bg-slate-50 flex-col items-center w-full max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-yellowShade'>
              Meet Our Team!
            </h2>
          </div>
          <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3'>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 object-cover h-36 rounded-full'
                src='/img/Head-Pastor.jpeg'
                alt='head-pastor'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Rev. Theophilus S.D Alvin</a>
              </h3>
              <p className='dark:text-neutral-300'>Head Pastor</p>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover object-right rounded-full'
                src='/img/pastor2.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Wonder Hormenu</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ikechukwu Onwumelu</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-20 bg-slate-50'></div>
      <Footer />
    </main>
  );
}
