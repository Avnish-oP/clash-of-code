// components/Hero2.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  const registrationDeadline = new Date("November 09, 2024 23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [isTimeCritical, setIsTimeCritical] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = registrationDeadline - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining("Registration Closed");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setIsTimeCritical(hours + days * 24 > 12); // Color timer text green if more than 12 hours remain
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-around bg-black text-yellow-400 p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/clash-background.png"}
          alt="Clash of Clans Style Background"
          className="w-full h-full object-cover opacity-40 filter blur-sm"
          width={1920}
          height={1080}
        />
      </div>

      {/* Left Section - Title, Subtitle, and Button */}
      <div className="relative mt-16 md:mt-12 z-10 basis-1/2 p-4 md:p-8 flex flex-col items-center justify-center md:items-center text-center">
        {/* Tech Nexus Logo and "presents" */}
        <motion.div
          className="text-lg md:text-2xl font-semibold mb-2 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/technexus-logo.png"
            alt="Tech Nexus Logo"
            width={100}
            height={100}
            className="mb-2"
          />
          <span className="text-white mb-4 text-sm">presents</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight font-clash-of-clans drop-shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Clash of Codes V1.0
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-4 font-clash-of-clans text-yellow-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Code. Conquer. Collaborate.
        </motion.p>

        {/* "Powered by Tech Canvas" with Logo */}
        <motion.div
          className="mt-2 md:mt-4 mb-4 text-lg font-semibold text-yellow-300 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white">Powered by</span>
          <Image
            src="/images/techcanvas-logo.jpg"
            alt="Tech Canvas Logo"
            width={150}
            height={40}
            className="ml-1"
          />
        </motion.div>

        <motion.div
          className="mt-2 md:mt-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <a
            href="https://dorahacks.io/hackathon/cocv1/detail"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-xl md:text-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Join the Battle
          </a>
        </motion.div>
      </div>

      {/* Right Section - Timer and 3D Barbarian Image */}
      <div className="relative z-10 md:mt-24 md:basis-1/2 h-full flex flex-col items-center justify-center">
        {/* Countdown Timer */}
        <motion.div
          className={`text-2xl md:text-5xl font-bold flex flex-col items-center mb-4 ${isTimeCritical ? "text-green-500" : "text-red-400"} drop-shadow-md`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-yellow-300 text-lg md:text-2xl mb-2">Registration Ends In</span>
          <div className="flex space-x-4 text-center">
            <div className="p-2 md:p-4 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
              <span className="block text-lg md:text-3xl">{timeRemaining}</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Image of Barbarian */}
        <motion.div
          className="relative w-[90vw] sm:w-[250px] md:w-[400px] lg:w-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/barbian.png"
            alt="Clash of Clans Barbarian"
            className="object-cover w-full h-full drop-shadow-lg"
            width={500}
            height={1000}
          />
        </motion.div>

        {/* Background Barbarian Image with White Filter */}
        <div className="absolute inset-0 opacity-70 md:opacity-90 filter blur-lg z-0">
          <Image
            src="/images/barbian.png"
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
