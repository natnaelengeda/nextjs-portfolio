"use client"

import { useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link'

// Firebase
import { initializeAnalytics } from './lib/firebase';

export default function Home() {
  const socialLinks = [
    {
      name: 'Gmail',
      href: 'mailto:nattynengeda@gmail.com',
      icon: '/assets/images/icons/gmail.png',
      bg: 'bg-white',
      size: 'w-6 h-6',
      padding: 'p-2',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/natnaelengeda/',
      icon: '/assets/images/icons/linkedin.png',
      bg: 'bg-white',
      size: 'w-8 h-8',
      padding: 'p-1',
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/natnaelengeda',
      icon: '/assets/images/icons/github.png',
      bg: 'bg-white',
      size: 'w-10 h-10',
      padding: 'p-1',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/natnaelengeda',
      icon: '/assets/images/icons/instagram.png',
      bg: 'bg-white',
      size: 'w-8 h-8',
      padding: 'p-1',
    },
  ]

  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <div className='w-full min-h-[calc(100vh-10rem)] relative flex flex-col justify-between'>
      <div className='w-full mx-auto container grid grid-cols-1 md:grid-cols-2 md:px-10 xl:px-20 py-10 md:py-0 md:gap-32'>
        {/* First Grid */}
        <div className='flex flex-col gap-10 items-start justify-start p-5 font-ProductSans text-fontColor'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold font-ProductSans text_background'>Natnael Engeda</h1>
            <p className='text-xl md:text-xl lg:text-3xl font-semibold text_background'>(Software Developer)</p>
            <div>
              <p
                className='text-lg  lg:text-2xl text-white'>
                A passionate individual who always thrives to work on end to end products which develop sustainable and highly scalable social and technical systems to create impact.</p>
            </div>

            <div className='flex flex-col gap-5'>
              <div>
                <p className='text-2xl text-white'>Contact Me: </p>
              </div>
              <div className="flex flex-row px-2 gap-5">
                {socialLinks.map(({ name, href, icon, bg, size, padding }) => (
                  <div
                    key={name}
                    onClick={() => window.open(href)}
                    className={`rounded-full ${bg} w-10 h-10 ${padding} cursor-pointer flex items-center justify-center`}>
                    <Image
                      className={size}
                      src={icon}
                      width={500}
                      height={500}
                      alt={`${name} Icon`}
                    />
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className='px-2 py-5'>
                <Link
                  href='/portfolio'
                  className='px-10 py-3 rounded-lg text-lg text-ProductSans button_background'>
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Second Grid */}
        <div className='flex items-start justify-center py-10'>
          <Image
            className='w-[80%] md:w-[26rem]'
            src="/assets/images/cool_pic.svg"
            width={500}
            height={500}
            alt="Programmer Image"
          />
        </div>
      </div>

      <div className='flex items-center justify-center font-ProductSans py-2 text-gray-400'>
        <p>
          Made by 😊 <span className="text-purple-400 font-medium">Natnael Engeda</span>
        </p>
      </div>
    </div>
  )
}
