"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClashOfCode() {
  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 text-blue-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 sm:w-80 md:w-full">
            <Image
              src="/images/clash-castle.png" // Placeholder image; replace with your own
              alt="Winter Clash of Codes Castle"
              className="rounded-lg shadow-2xl object-cover"
              width={600}
              height={600}
              priority
            />
            {/* Decorative Background Gradient */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-400 to-transparent opacity-30 rounded-lg filter blur-lg"></div>
          </div>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold font-clash-of-clans text-white mb-4"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            About Clash of Codes V1.0
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl leading-relaxed text-blue-200 mb-6"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            Welcome to the inaugural edition of{" "}
            <span className="text-white text-2xl font-semibold">Clash of Codes!</span>{" "}
            Inspired by the frosty realms of winter, this hackathon is not just a
            competition but a journey to build, conquer, and collaborate. Unleash your coding
            prowess, form alliances, and strategize your way to victory!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
          >
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
              Learn More
            </button>
            <Link
              href="https://dorahacks.io/hackathon/cocv1/detail"
              className="bg-gray-700 text-blue-100 py-3 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
