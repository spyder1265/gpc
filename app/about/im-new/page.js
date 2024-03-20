import Navbar from '@/components/Navbar';
import Image from "next/image";


export default function About() {
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
                I'm New
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

      <section className='flex flex-col w-full'>
        <div className='flex h-full basis-4/6'>
          <div className='relative w-1/2'>
            <Image
                src={"/img/trialbg.jpeg"}
                width={900}
                height={900}
                className='w-full h-full'
                quality={90}
                alt='bg'
              />
          </div>
          <div className='flex flex-col w-1/2 md:py-24 text-yellowShade my-2 mx-12'>
            <h2 className='font-bold text-3xl leading-[46.8px] mb tracking-normal'>
              Frequently Asked Questions
            </h2>
            <h4 className='font-semibold text-lg mt-2 mb-5'>Q&A</h4>
            <div className='text-slate-900 text-wrap'>
              <div className='text-base mb-1'>
                <strong>
                  Q: What time are your services?
                </strong>
              </div>
              <div className='text-base mb-3 italic'>
                A: We have services at 10am and 1pm.
              </div>
            </div>

            <div className='text-slate-900 text-wrap'>
              <div className='text-base mb-1'>
                <strong>
                  Q: What can I expect when I visit?
                </strong>
              </div>
              <div className='text-base mb-3 italic'>
                A: You can expect a warm welcome and a friendly atmosphere. We have a casual dress code and our services are contemporary in style.
              </div>
            </div>

            <div className='text-slate-900'>
              <div className='text-base mb-1'>
                <strong>
                  Q: What can I expect on a Sunday morning?
                </strong>
              </div>
              <div className='text-base mb-3 italic'>
                A: When people visit, they're struck by the 'family feel'. We're a pretty casual, non-denominational body of believers who love the Lord and love being together. Service starts at 10:00 a.m. and usually lasts about an 1 hour-1.5 hours. It's a mix of getting in God's Word, singing songs of worship, and sharing with one another. In the past, it's often been followed by refreshments or a meal..
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}