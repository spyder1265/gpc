import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function OurTeam() {
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
              <h1 className='text-3xl md:text-5xl font-bold'>Our Team</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex h-14 w-full bg-yellowShade/80 justify-center overflow-hidden relative'>
          <div className='flex text-white font-semibold'>
            <div className='hover:bg-yellowShade h-full flex items-center  active:bg-yellowActive'>
              <a href='/about' className='py-4 h-full px-2'>
                About Us
              </a>
            </div>
            <div className='hover:bg-yellowShade h-full flex items-center  active:bg-yellowActive'>
              <a href='/about/our-team' className='py-4 h-full px-2'>
                Our Team
              </a>
            </div>
            <div className='hover:bg-yellowShade h-full flex items-center  active:bg-yellowActive'>
              <a href='/about/im-new' className='py-4 h-full px-2'>
                I'm New
              </a>
            </div>
            <div className='hover:bg-yellowShade h-full flex items-center active:bg-yellowActive'>
              <a href='/about/our-beliefs' className='py-4 h-full px-2'>
                Our Beliefs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class='bg-white'>
        <div class='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div class='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
            <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-yellowShade'>
              Meet Our Team!
            </h2>
          </div>
          <div class='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div class='text-center text-gray-500'>
              <img
                class='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png'
                alt='Neil Avatar'
              />
              <h3 class='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
                <a href='#'>Theophilus S.D Alvin</a>
              </h3>
              <p>Reverend</p>
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
