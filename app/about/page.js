import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

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
              <h1 className='text-3xl md:text-5xl font-bold'>About</h1>
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

      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex flex-col h-full basis-4/6'>
          <div className='flex py-4 justify-center text-center md:pt-24 space-y-1 text-yellowShade'>
            <p className='flex justify-center font-bold text-4xl leading-[46.8px] mb-4 tracking-normal'>
              Welcome to Grace Pavilion Chapel!
            </p>
          </div>
          <div className='flex flex-col text-left mx-80 gap-5'>
            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Who We Are
            </h1>

            <p className='text-center'>
              We're thrilled that you've discovered us! At Grace Pavilion
              Chapel, we are more than just a congregation; we are a vibrant
              community of followers of Jesus Christ. Rooted in the belief that
              the essence of the Kingdom lies in fostering genuine
              relationships, we prioritize our connection with God and with one
              another (Matthew 22:36-40).
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Our Vision
            </h1>

            <p className='text-center'>
              Bringing the blind to the knowledge of Christ. (2 Corinthians 4:4)
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Our Mission
            </h1>

            <p className='text-center'>
              Pulling down strong holds, taking territories for Christ through
              the power of His Word (the sword of the Spirit)
            </p>
          </div>
        </div>
      </section>
      <div className='mt-20'>
        <Footer />
      </div>
    </main>
  );
}
