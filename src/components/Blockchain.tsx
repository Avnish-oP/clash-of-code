// components/SpecialBounty.js
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTrophy } from 'react-icons/fa';

export default function SpecialBounty() {
  return (
    <section
      id="special-bounty"
      className="relative py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-yellow-400 text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="container mx-auto px-6"
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-clash-of-clans text-yellow-300 mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          Special Bounty for Blockchain Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Build a full-stack blockchain project with a smart contract deployed on
          the <span className="text-yellow-300">Aptos</span> blockchain. Earn <span className="text-green-400 font-bold">$5</span> for every
          valid project and compete for the grand prize of <span className="text-green-400 font-bold">$50</span> for the best
          submission in this category!
        </motion.p>

        {/* Bounty Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {/* Valid Project Card */}
          <motion.div
            className="relative bg-yellow-300 text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 215, 0, 0.6)",
                "0 0 20px rgba(255, 215, 0, 0.8)",
                "0 0 30px rgba(255, 215, 0, 1)"
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-yellow-500 opacity-20 rounded-lg"></div>
            <Image
              src="/images/aptos-logo.png"
              alt="Aptos Logo"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Earn $5 per Valid Project</h3>
            <p className="text-sm">
              Submit a valid full-stack blockchain project deployed on Aptos and
              earn <span className="font-bold">$5</span> for each one.
            </p>
          </motion.div>

          {/* Mega Prize Card */}
          <motion.div
            className="relative bg-green-400 text-black p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(0, 128, 0, 0.6)",
                "0 0 20px rgba(0, 128, 0, 0.8)",
                "0 0 30px rgba(0, 128, 0, 1)"
              ],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-green-700 opacity-20 rounded-lg"></div>
            {/* <Image
              src="/images/blockchain-icon.png"
              alt="Prize Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            /> */}
            <FaTrophy className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mega Prize - $50</h3>
            <p className="text-sm">
              The top full-stack blockchain project will win an additional{" "}
              <span className="font-bold">$50</span> as the grand prize.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Bottom Divider */}
      <div className="absolute bottom-0 w-full flex justify-center overflow-hidden">
        <motion.div
          className="h-1 w-[80%] bg-gradient-to-r from-yellow-400 to-green-500 rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>
    </section>
  );
}
