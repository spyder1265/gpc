import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

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
          priority
        />
        <div className='absolute top-0 left-0 right-0 flex flex-col justify-between bg-overlay/65 text-white h-full w-full'>
          <div className=''>
            <Navbar />
          </div>
          <div className='md:py-24 py-12 px-6 md:px-16 w-full'>
            <div className='flex flex-col gap-y-1 items-start justify-center text-left h-full'>
              <h1 className='text-3xl md:text-5xl font-bold'>about</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex h-14 w-full bg-yellowShade/80 justify-center overflow-hidden relative'>
          <div className='flex text-white font-semibold'>
            <div className='hover:bg-yellowShade py-4 px-2 active:bg-yellowActive'>
              <a href='/about'>About Us</a>
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
              welcome to grace pavilion chapel!
            </p>
          </div>
          <div className='flex flex-col text-left mx-10 md:mx-80 gap-5'>
            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              who we are
            </h1>
            <p className='dark:text-neutral-300'>
              We're thrilled that you've discovered us! at grace pavilion
              chapel, we are more than just a congregation; we are a vibrant
              community of followers of jesus christ. rooted in the belief that
              the essence of the kingdom lies in fostering genuine
              relationships, we prioritize our connection with god and with one
              another (matthew 22:36-40).
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              our vision
            </h1>
            <p className='dark:text-neutral-300'>
              Bringing the blind to the knowledge of christ. (2 corinthians 4:4)
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              our mission
            </h1>

            <p className='dark:text-neutral-300'>
              pulling down strong holds, taking territories for christ through
              the power of his word (the sword of the spirit)
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              what to expect
            </h1>

            <p className='dark:text-neutral-300'>
              when you walk through our doors, you can expect to encounter a
              warm and welcoming atmosphere, heartfelt worship, and practical,
              relevant teaching from the bible. whether you're joining us for
              one of our sunday services, participating in a small group, or
              attending a special event, you'll find a community that is eager
              to walk alongside you on your journey of faith.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              get involved
            </h1>

            <p className='dark:text-neutral-300'>
              there are numerous opportunities for you to get involved and
              become an active part of our church family. from serving on a
              ministry team to joining a bible study group, there's something
              for everyone to contribute their gifts and talents to the work of
              god's kingdom. we believe that each person has a unique role to
              play in advancing the cause of christ, and we invite you to
              discover yours.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              contact us
            </h1>

            <p className='dark:text-neutral-300'>
              if you have any questions or would like more information about
              grace pavilion chapel, please don't hesitate to reach out to us.
              our friendly staff and volunteers are here to assist you and help
              you feel at home. we look forward to connecting with you and
              journeying together in faith, hope, and love.
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
