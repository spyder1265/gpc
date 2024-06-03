import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Events() {
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
              <h1 className='text-3xl md:text-5xl font-bold'>Events</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full items-center justify-center'>
        <div className='flex flex-col h-full basis-4/6'>
          <div className='flex flex-col py-4 justify-center text-center md:pt-24 space-y-1 text-gray-700'>
            <h2 className='flex justify-center font-bold text-4xl leading-[46.8px] mb-4 text-yellowShade tracking-normal'>
              Events
            </h2>
            <p className='flex justify-center text-xl font-semibold'>
              Mark your calendars for these great events coming up
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-8'>
            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Spiritual Maintenance Service
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Wednesdays | 9:00 - 11:30 AM | @ Church
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5 min-h-[216px] md:min-h-0'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Midweek Bible Studies
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Wednesdays | 18:00 -20:00 PM | @ Church
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5 min-h-[216px] md:min-h-0'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Power Night
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Fridays | 18:00 - 20:00 PM | @ Church
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5 min-h-[216px] md:min-h-0'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Youth Meetings
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Saturdays | 17:00 - 18:30 PM | @ Church
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5 min-h-[216px] md:min-h-0'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Fasting And Prayers
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Last Week Of Every Month | 18:00 - 20:00 PM each night | @
                    Church
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col text-left'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                <a href='#'>
                  <img
                    className='rounded-t-lg'
                    src='/img/Background.jpg'
                    alt=''
                  />
                </a>
                <div className='p-5 min-h-[216px] md:min-h-0'>
                  <a href='#'>
                    <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                      Thanksgiving Service
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                    Last Sunday Of Each Month | 9:30 - 11:30 PM | @ Church
                  </p>
                </div>
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
