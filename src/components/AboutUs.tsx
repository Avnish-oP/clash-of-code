// components/AboutClashOfCode.js
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutClashOfCode() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 text-yellow-400">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Image
              src="/images/clash-castle.png" // Placeholder image; replace with your own
              alt="Clash of Codes Castle"
              className="rounded-lg shadow-2xl object-cover"
              width={600}
              height={600}
            />
            {/* Decorative Background Image with Filter */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 to-transparent opacity-30 rounded-lg filter blur-lg transform -translate-x-5 -translate-y-5"></div>
          </div>
        </motion.div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <motion.h2
            className="text-5xl font-bold font-clash-of-clans"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            About Clash of Codes V1.0
            Welcome to the inaugural edition of &quot;Clash of Codes&quot;! Inspired by the epic world of Clash of Clans, this hackathon is not just a competition, but a battle to build, conquer, and collaborate. Unleash your coding powers, form alliances, and strategize your way to victory!
          </motion.h2>
          <motion.p
            className="text-lg mt-4 text-yellow-300 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Welcome to the inaugural edition of "Clash of Codes"! Inspired by the epic world of Clash of Clans, this hackathon is not just a competition, but a battle to build, conquer, and collaborate. Unleash your coding powers, form alliances, and strategize your way to victory!
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="bg-yellow-500 text-black py-3 px-5 rounded-full font-semibold text-xl shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 cursor-pointer">
              Learn More
            </div>
            <div className="bg-gray-800 text-yellow-400 py-3 px-5 rounded-full font-semibold text-xl shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer">
              Register Now
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
