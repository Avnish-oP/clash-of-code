"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  const registrationDeadline = new Date("January 14, 2025 23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = registrationDeadline - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-around bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/bg.jpg"}
          alt="Background"
          className="w-full h-full object-cover opacity-40 filter blur-sm"
          width={1920}
          height={1080}
        />
      </div>

      {/* Left Section */}
      <div className="relative z-10 basis-1/2 p-4 text-center">
        {/* Tech Nexus Logo */}
        <motion.div
          className="flex flex-col gap-4 items-center justify-center md:justify-start mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/technexus-logo.png"
            alt="Tech Nexus Logo"
            width={80}
            height={80}
            className="mr-2"
          />
          <span className="text-sm mb-4 text-white">presents</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white font-clash-of-clans"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Clash of Codes v<span className="text-blue-500">2.0</span> 
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mt-4 text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Code. Conquer. Collaborate.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="https://dorahacks.io/hackathon/cocv2/detail"
          className="mt-6 inline-block bg-white text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-white/50 hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Join the Battle
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:basis-1/2 flex mt-16 flex-col items-center">
        {/* Timer */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-lg md:text-2xl text-blue-400 antialiased mb-4">
            Registration Ends In
          </p>
          <div className="flex gap-4  p-4 rounded-lg shadow-lg">
            <div className="flex justify-center items-center">
              <div className="flex flex-col min-w-20 items-center shadow-md bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
                <span className="text-3xl font-bold text-white">
                  {timeRemaining.days}
                </span>
                <span className="text-sm text-gray-200">Days</span>
              </div>
              <span className="text-3xl ml-4 text-gray-200">:</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col min-w-20 items-center shadow-md bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
                <span className="text-3xl font-bold text-white">
                  {timeRemaining.hours}
                </span>
                <span className="text-sm text-gray-200">Hours</span>
              </div>
              <span className="text-3xl ml-4 text-gray-200">: </span>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex  flex-col min-w-20 items-center shadow-md bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
                <span className="text-3xl font-bold text-white">
                  {timeRemaining.minutes}
                </span>
                <span className="text-sm text-gray-200">Mins</span>
              </div>
              <span className="text-3xl ml-4 text-gray-200">: </span>
            </div>
            <div className="flex  justify-center items-center">
              <div className="flex flex-col min-w-20 items-center shadow-md bg-white/90 p-4 rounded-lg">
                <span className="text-3xl font-bold text-blue-600">
                  {timeRemaining.seconds}
                </span>
                <span className="text-sm text-blue-600">Sec</span>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Barbarian Image */}
        <motion.div
          className="relative w-3/4 sm:w-1/2 lg:w-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/queen.png"
            alt="Barbarian"
            className="object-contain"
            width={400}
            height={400}
          />
        </motion.div>

        {/* Background Blur Barbarian */}
        <div className="absolute inset-0 opacity-50 filter blur-lg z-0">
          <Image
            src="/images/barbian.png"
            alt="Background Barbarian"
            className="object-contain opacity-20"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
