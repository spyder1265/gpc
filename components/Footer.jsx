import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-greenShade'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white'>
              Menu
            </h2>
            <ul className='text-gray-400 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Home
                </a>
              </li>
              <li className='mb-4'>
                <a href='/about' className=' hover:underline'>
                  About
                </a>
              </li>
              <li className='mb-4'>
                <a href='/events' className='hover:underline'>
                  Events
                </a>
              </li>
              <li className='mb-4'>
                <a href='/appointment' className='hover:underline'>
                  Book Appointment
                </a>
              </li>
              <li className='mb-4'>
                <a href='/contact' className='hover:underline'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white'>
              Help center
            </h2>
            <ul className='text-gray-400 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a
                  href='https://www.facebook.com/share/37KLivCdEoTL8kn8/?mibextid=JRoKGi'
                  className='hover:underline'
                >
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://www.youtube.com/@gracepavilionchapel1632'
                  className='hover:underline'
                >
                  YouTube
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://www.instagram.com/gracepavilionchapel?igsh=OW91YjF4M2VsYzB1'
                  className='hover:underline'
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white'>
              Legal
            </h2>
            <ul className='text-gray-400 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Licensing
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div> */}
          <div>
            {/* <h2 className='mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white'>
              Ministries
            </h2> */}
          </div>
        </div>
        <div className='px-4 py-6 bg-greenActive dark:bg-gray-700 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-100 dark:text-gray-300 sm:text-center'>
            © 2024 <a href='/'>GracePavilionChurch™</a>. All Rights Reserved.
          </span>
          <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'>
            <a
              href='https://www.facebook.com/share/37KLivCdEoTL8kn8/?mibextid=JRoKGi'
              className='text-gray-100 hover:text-gray-900 dark:hover:text-white'
            >
              <FaFacebookF />
              <span className='sr-only'>Facebook page</span>
            </a>
            <a
              href='https://www.instagram.com/gracepavilionchapel?igsh=OW91YjF4M2VsYzB1'
              className='text-gray-100 hover:text-gray-900 dark:hover:text-white'
            >
              <FaInstagram />
              <span className='sr-only'>Instagram Page</span>
            </a>
            <a
              href='https://www.youtube.com/@gracepavilionchapel1632'
              className='text-gray-100 hover:text-gray-900 dark:hover:text-white'
            >
              <FaYoutube />
              <span className='sr-only'>Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
