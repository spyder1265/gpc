import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function Contact() {
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
              <h1 className='text-3xl md:text-5xl font-bold'>Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='h-auto py-10 w-full'>
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500 dark:shadow-sm-light'
              placeholder='John Smith '
              autoComplete='name'
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500 dark:shadow-sm-light'
              placeholder='name@company.com'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='phone'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              className='shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500 dark:shadow-sm-light'
              placeholder='+233-00-1500-00'
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-white'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500'
              placeholder='Leave a Message...'
            ></textarea>
          </div>

          <button
            type='submit'
            className='text-white bg-greenShade hover:bg-greenActive focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
