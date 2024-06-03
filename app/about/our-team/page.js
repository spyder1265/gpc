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
          priority
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
        <div className='flex h-14 w-full bg-yellowShade/80 justify-center items-center overflow-hidden relative'>
          <div className='flex text-white font-semibold'>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about'>About Us</a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-team'>Our Team</a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/im-new'>I'm New</a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-beliefs'>Our Beliefs</a>
            </div>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
          <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-yellowShade'>
              Meet Our Team!
            </h2>
          </div>
          <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                alt='Bonnie Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Bonnie Green</a>
              </h3>
              <p className='dark:text-neutral-300'>Head Pastor</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Helene Engels</a>
              </h3>
              <p className='dark:text-neutral-300'>Dickoness</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                alt='Jese Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Jese Leos</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
                alt='Joseph Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Joseph Mcfall</a>
              </h3>
              <p className='dark:text-neutral-300'>Reverend</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png'
                alt='Sofia Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Lana Byrd</a>
              </h3>
              <p className='dark:text-neutral-300'>Bishop</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png'
                alt='Leslie Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Leslie Livingston</a>
              </h3>
              <p className='dark:text-neutral-300'>Welfare</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                alt='Michael Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Michael Gough</a>
              </h3>
              <p className='dark:text-neutral-300'>Cash Team</p>
            </div>
            <div className='text-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png'
                alt='Neil Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Neil Sims</a>
              </h3>
              <p className='dark:text-neutral-300'>Usher</p>
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
