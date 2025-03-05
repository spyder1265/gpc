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
              <p className='dark:text-neutral-300'>General Overseer, Founder</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  <a href='#'>Profile</a>
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Rev. Theophilus S.D Alvin is a dedicated spiritual leader with
                  over 18 years of experience in ministry. He is passionate
                  about community outreach, spiritual growth, and mentoring the
                  next generation of leaders. His vision is to see lives
                  transformed through faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover object-right rounded-full'
                src='/img/pastor2.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ps. Wonder Hormenu</a>
              </h3>
              <p className='dark:text-neutral-300'>Rev. Minister</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Wonder is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
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
              <p className='dark:text-neutral-300'>Rev. Minister</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Ike is a dedicated spiritual leader with over 18 years of
                  experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Newton Dablu</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Newton is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>L. P Sharon Addy</a>
              </h3>
              <p className='dark:text-neutral-300'>Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  L. P Sharon is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Nana Baffour Akoto Esq.</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Baffour is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Ebenezer Ameyaw</a>
              </h3>
              <p className='dark:text-neutral-300'>Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  Ps. Ameyaw is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Bridget.</a>
              </h3>
              <p className='dark:text-neutral-300'>Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  L. P Bridget is a dedicated spiritual leader with over 18
                  years of experience in ministry. He is passionate about
                  community outreach, spiritual growth, and mentoring the next
                  generation of leaders. His vision is to see lives transformed
                  through faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className='text-center flex flex-col items-center text-gray-500'>
              <img
                className='mx-auto mb-4 w-36 h-36 object-cover rounded-full'
                src='/img/Pastor.jpeg'
                alt='Helene Avatar'
              />
              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-50'>
                <a href='#'>Rita XXXXX</a>
              </h3>
              <p className='dark:text-neutral-300'> Lady Pastor</p>
              <div className='profile-section mt-4 text-center'>
                <h4 className='text-xl font-semibold text-gray-600 dark:text-neutral-300'>
                  Profile
                </h4>
                <p className='text-gray-600 dark:text-neutral-300'>
                  L. P Rita is a dedicated spiritual leader with over 18 years
                  of experience in ministry. He is passionate about community
                  outreach, spiritual growth, and mentoring the next generation
                  of leaders. His vision is to see lives transformed through
                  faith and the power of the Holy Spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-20 bg-slate-50'></div>
      <Footer />
    </main>
  );
}
