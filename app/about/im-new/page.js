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

      {/* <section className='flex flex-col w-full'>
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
      </section> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-yellowShade">Frequently asked questions</h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  What are your worship service times?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Our regular worship services are held every Sunday from 8:00 AM to 11:00 AM. Additionally, we may have special services during holidays and other significant occasions. Please check our events calendar for any updates or changes.
                </p>
              </div>
                <div class="mb-10">                        
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    Do you have programs for children and youth?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Yes, we offer a variety of programs for children and youth, including Sunday school classes, youth groups, and special events throughout the year. Visit our Youth Ministry page for more information.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    How can I get involved in the church community?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    There are many opportunities to get involved, including volunteering for various ministries, joining small groups or Bible studies, and participating in outreach activities. Explore our Get Involved page to discover how you can contribute.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    Is there a dress code for attending services?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    There is no specific dress code, but we encourage modesty and respect for the sacredness of our worship space.
                  </p>
                </div>
              </div>
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    Do you offer counseling services?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Yes, our pastoral team provides counseling services for individuals and families. Please contact the church office to schedule an appointment.
                  </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  Are there opportunities for spiritual growth and education?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Absolutely! We offer adult education classes, seminars, and workshops throughout the year to help individuals deepen their faith and understanding of Scripture. Check out our Education page for upcoming opportunities.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  How do I become a member of the church?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  We offer membership classes for those interested in formally joining our church family. Visit our Membership page for more information on the process and requirements.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  Can I request a baptism, wedding, or funeral service?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Yes, please contact the church office to schedule sacraments or ceremonies. Our pastoral team will work with you to make these occasions meaningful and memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}