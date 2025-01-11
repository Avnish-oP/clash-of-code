"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClashOfCode() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
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
              className="rounded-xl shadow-2xl object-cover"
              width={600}
              height={600}
              priority
            />
            {/* Decorative Background Glow */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/50 to-transparent rounded-xl blur-lg opacity-50"></div>
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
            className="text-4xl sm:text-5xl font-bold font-clash-of-clans mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          >
            About Clash of Codes V1.0
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-8"
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
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-teal-400/50 hover:scale-105 transition-transform">
              Learn More
            </button>
            <Link
              href="https://dorahacks.io/hackathon/cocv1/detail"
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-blue-100 py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-gray-400/50 hover:scale-105 transition-transform"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full blur-3xl opacity-30 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl opacity-20 absolute bottom-20 right-10"></div>
      </div>
    </section>
  );
}
