import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";

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
              <h1 className='text-3xl md:text-5xl font-bold'>I'm New</h1>
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

      <section className='text-neutral-500 dark:text-neutral-400'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-yellowShade'>
            Frequently asked questions
          </h2>
          <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2'>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What are your worship service times?
                </h3>
                <p className=''>
                  Our regular worship services are held every Sunday from 8:00
                  AM to 11:00 AM. Additionally, we may have special services
                  during holidays and other significant occasions. Please check
                  our events calendar for any updates or changes.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Do you have programs for children and youth?
                </h3>
                <p className=''>
                  Yes, we offer a variety of programs for children and youth,
                  including Sunday school classes, youth groups, and special
                  events throughout the year. Visit our Youth Ministry page for
                  more information.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  How can I get involved in the church community?
                </h3>
                <p className=''>
                  There are many opportunities to get involved, including
                  volunteering for various ministries, joining small groups or
                  Bible studies, and participating in outreach activities.
                  Explore our Get Involved page to discover how you can
                  contribute.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Is there a dress code for attending services?
                </h3>
                <p className=''>
                  There is no specific dress code, but we encourage modesty and
                  respect for the sacredness of our worship space.
                </p>
              </div>
            </div>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Do you offer counseling services?
                </h3>
                <p className=''>
                  Yes, our pastoral team provides counseling services for
                  individuals and families. Please contact the church office to
                  schedule an appointment.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Are there opportunities for spiritual growth and education?
                </h3>
                <p className=''>
                  Absolutely! We offer adult education classes, seminars, and
                  workshops throughout the year to help individuals deepen their
                  faith and understanding of Scripture. Check out our Education
                  page for upcoming opportunities.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  How do I become a member of the church?
                </h3>
                <p className=''>
                  We offer membership classes for those interested in formally
                  joining our church family. Visit our Membership page for more
                  information on the process and requirements.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Can I request a baptism, wedding, or funeral service?
                </h3>
                <p className=''>
                  Yes, please contact the church office to schedule sacraments
                  or ceremonies. Our pastoral team will work with you to make
                  these occasions meaningful and memorable.
                </p>
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
