"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "/about" },
  { name: "Events", href: "#" },
  { name: "Ministries", href: "#" },
  { name: "Messages", href: "#" },
  { name: "Give", href: "#" },
  { name: "Serve", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-transparent relative h-auto py-8'>
      {({ open }) => (
        <>
          <div className='mx-auto z-50 relative max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-start sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    className='h-24 w-auto'
                    src='/img/logo_nobg.png'
                    alt='Your Company'
                    width={550}
                    height={550}
                  />
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='hidden sm:ml-6 lg:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-300 hover:opacity-75",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 font-semibold hover:opacity-75 focus:outline-none focus:ring-0'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <>
                        <Bars3Icon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                        <span>{"menu".toUpperCase()}</span>
                      </>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden absolute top-0 w-full'>
            <div className='space-y-1 flex flex-col animate__animated mt-0 animate__bounce bg-overlay pt-24 items-center px-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-gray-300 hover:opacity-75",
                    "block rounded-md px-3 py-2 text-base font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name.toUpperCase()}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
