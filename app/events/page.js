import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import { cn } from "@/lib/utils";

export default function Events() {
  const events = [
    {
      title: "Spiritual Maintenance Service",
      time: "Wednesdays | 10:00 - 12:00  | @ Grace City",
      image: "/img/SMS_New.jpg",
    },
    {
      title: "Midweek Bible Studies",
      time: "Wednesdays | 18:15 -20:00  | @ Grace City",
      image: "/img/mid-week.jpeg",
    },
    {
      title: "Power Night",
      time: "Fridays | 18:30 - 20:45  | @ Grace City",
      image: "/img/Power-Night.jpeg",
    },
    {
      title: "Youth Meetings",
      time: "Saturdays | 16:00 - 17:00  | @ Grace City",
      image: "/img/Youth.jpg",
    },
    {
      title: "Glorious Service Hour",
      time: "First Service | 07:00 - 09:00 | Second Service |09:00-11:03 | @ Grace City",
      image: "/img/Glorious-Service.jpeg",
    },
    {
      title: "Men in the Gap",
      time: "Sundays | 5:30 - 7:00 PM | @ Grace City",
      image: "/img/meninthegap.jpeg",
      ImageClassName:
        "rounded-t-lg w-full object-cover relative object-top max-h-[255.296875px]",
    },
    {
      title: "Fasting And Prayers",
      time: "Last Week Of Every Month | 18:00 - 20:00  each night | @ Grace City",
      image: "/img/Cover.jpg",
    },
    {
      title: "Thanksgiving Service",
      time: "Last Sunday Of Each Month | 9:30 - 11:30  | @ Grace City",
      image: "/img/Grace.jpg",
    },
  ];

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
              <h1 className='text-3xl md:text-5xl font-bold'>Events</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col w-full bg-slate-50 items-center justify-center p-5'>
        <div className='flex flex-col h-full basis-4/6'>
          <div className='flex flex-col py-4 justify-center text-center md:pt-24 space-y-1 text-gray-700'>
            <h2 className='flex justify-center font-bold text-4xl leading-[46.8px] mb-4 text-yellowShade tracking-normal'>
              Events
            </h2>
            <p className='flex justify-center text-xl font-semibold'>
              Mark your calendars for these great events coming up
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10 max-md:flex max-md:flex-col mt-8'>
            {events.map((event, i) => (
              <div key={event.title + i} className='flex flex-col text-left'>
                <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
                  <a href='#'>
                    <img
                      className={cn(
                        "rounded-t-lg w-full object-fill max-h-[255.296875px]",
                        event.ImageClassName
                      )}
                      src={event.image}
                      alt=''
                    />
                  </a>
                  <div className='p-5'>
                    <a href='#'>
                      <h5 className='mb-2 text-xl min-h-[84px] md:min-h-0 flex items-center font-bold tracking-tight text-gray-700'>
                        {event.title}
                      </h5>
                    </a>
                    <p className='mb-3 font-normal text-gray-700 md:min-h-[48px]'>
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='pt-20 bg-slate-50'></div>
      <Footer />
    </main>
  );
}
