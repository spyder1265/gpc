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
              <h1 className='text-3xl md:text-5xl font-bold'>About</h1>
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
              Welcome to Grace Pavilion Chapel!
            </p>
          </div>
          <div className='flex flex-col text-left mx-10 md:mx-80 gap-5'>
            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Who We Are
            </h1>
            <p className='dark:text-neutral-300'>
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
            <p className='dark:text-neutral-300'>
              Our vision is simple yet profound: to embody and extend the love
              of Christ in all that we do. We strive to create an atmosphere
              where everyone feels welcomed, accepted, and loved—where grace
              abounds and lives are transformed. Whether you're exploring faith
              for the first time, seeking a place to grow spiritually, or
              longing for authentic community, you'll find a home here at Grace
              Pavilion Chapel.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Our Mission
            </h1>

            <p className='dark:text-neutral-300'>
              Our mission is to love God passionately, love others
              unconditionally, and make disciples intentionally. We are
              committed to living out the teachings of Jesus Christ and sharing
              His message of hope, redemption, and reconciliation with the
              world. Through worship, fellowship, service, and outreach, we seek
              to make a positive impact in our local community and beyond.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              What to Expect
            </h1>

            <p className='dark:text-neutral-300'>
              When you walk through our doors, you can expect to encounter a
              warm and welcoming atmosphere, heartfelt worship, and practical,
              relevant teaching from the Bible. Whether you're joining us for
              one of our Sunday services, participating in a small group, or
              attending a special event, you'll find a community that is eager
              to walk alongside you on your journey of faith.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Get Involved
            </h1>

            <p className='dark:text-neutral-300'>
              There are numerous opportunities for you to get involved and
              become an active part of our church family. From serving on a
              ministry team to joining a Bible study group, there's something
              for everyone to contribute their gifts and talents to the work of
              God's Kingdom. We believe that each person has a unique role to
              play in advancing the cause of Christ, and we invite you to
              discover yours.
            </p>

            <h1 className='flex justify-center text-center space-y-1 text-yellowShade md:text-[20px] font-bold'>
              Contact Us
            </h1>

            <p className='dark:text-neutral-300'>
              If you have any questions or would like more information about
              Grace Pavilion Chapel, please don't hesitate to reach out to us.
              Our friendly staff and volunteers are here to assist you and help
              you feel at home. We look forward to connecting with you and
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
