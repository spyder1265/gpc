import Navbar from '@/components/Navbar';
import Image from "next/image";


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
              <h1 className='text-3xl md:text-5xl font-bold'>
                Our Team
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex h-14 w-full bg-yellowShade/80 justify-center items-center overflow-hidden relative'>
          <div className='flex text-white font-semibold'>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about'>
              About Us
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-team'>
              Our Team
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/im-new'>
              I'm New
              </a>
            </div>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about/our-beliefs'>
              Our Beliefs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
            <div className='flex h-full basis-4/6'>
              <div className='flex flex-col py-4 justify-center text-center md:py-24 space-y-1 text-yellowShade'>
                <p className='flex justify-center font-bold text-4xl leading-[46.8px] mb tracking-normal'>
                  Meet Our Team!
                </p>
                {/* <span className='flex justify-center mb-4 md:text-[18px] font-semibold'>
                  Who We Are
                </span>
                <p className='flex mb-3 tracking-normal lg:px-32 px-0 text-black'>
                  We're so glad you found us! We are a community of followers of Jesus who believe that the greatest thing in the Kingdom is right relationship; first with God and then with one another (Matthew 22:36-40). We are learning together as we grow in love and obedience in serving Him here and around the world. We'd be excited to have you join us!
                </p> */}
              </div>
            </div>
      </section>
    </main>
  );
}