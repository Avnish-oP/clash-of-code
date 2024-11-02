// components/Hero2.js
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero2() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center  bg-black text-yellow-400 p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={'/images/clash-background.png'}
          alt="Clash of Clans Style Background"
          className="w-full h-full object-cover opacity-40 filter blur-sm"
          width={1920}
          height={1080}
        />
      </div>

      {/* Left Section - Title, Subtitle, and Button */}
      <div className="relative mt-28 md:mt-12 z-10 basis-1/2 md:basis-[65%] p-2 md:p-12 flex flex-col items-center justify-center md:items-start text-center md:text-left">
        <motion.h1
          className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight font-clash-of-clans"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Clash of Codes V1<span className=''>{'.'}</span>0
        </motion.h1>
        <motion.p
          className="text-xl sm:text-xl md:text-2xl lg:text-3xl mt-2 md:mt-4 font-clash-of-clans text-yellow-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Code. Conquer. Collaborate.
        </motion.p>

        <motion.div
          className="mt-4 md:mt-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <a
            href="https://dorahacks.io/hackathon/cocv1/detail"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-xl md:text-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Join the Battle
          </a>
        </motion.div>
      </div>

      {/* Right Section - 3D Barbarian Image */}
      <div className="relative z-10 md:mt-12 md:basis-1/2 h-full flex justify-center items-center ">
        {/* 3D Image of Barbarian */}
        <div className="relative w-[90vw] sm:w-[250px] md:w-[400px] lg:w-[500px]">
          <Image
            src="/images/barbian.png" // Replace with your actual 3D image path
            alt="Clash of Clans Barbarian"
            className="object-cover w-full h-full"
            width={500}
            height={1000}
          />
        </div>

        {/* Background Barbarian Image with White Filter */}
        <div className="absolute inset-0 opacity-70 md:opacity-90 filter blur-lg z-0">
          <Image
            src="/images/barbian.png" // Use the same or a slightly different image for aesthetic
            alt="Clash of Clans Barbarian Background"
            className="object-cover opacity-20"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
