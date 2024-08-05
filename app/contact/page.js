import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main className='h-screen w-full'>
      <section className='relative h-[500px] w-full'>
        <Image
          src={"/img/bg1.jpg"}
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
              <h1 className='text-3xl md:text-5xl font-bold'>Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto py-10 w-full'>
        <div className='max-w-sm mx-auto'>
          <div className='bg-white shadow-md rounded-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Location</h2>
            <p className='mb-4'>(Opposite Ewit School) Agege Zone 6</p>
            <h2 className='text-2xl font-bold mb-4'>Contact</h2>
            <p className='mb-4'>
              For more enquires/prayer, call us on{" "}
              <a
                href='tel:+233551449712'
                className='text-yellowActive  hover:text-yellowShade'
              >
                {" "}
                0551449712
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
