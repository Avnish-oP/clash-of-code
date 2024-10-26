// components/Tracks.js
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const tracks = [
  {
    name: 'AI & Machine Learning',
    description: 'Build intelligent systems that can learn, adapt, and enhance user experiences.',
    icon: '/images/AI.png',
  },
  {
    name: 'Web Development',
    description: 'Create dynamic, responsive websites that are both aesthetic and functional.',
    icon: '/images/web-development.png',
  },
  {
    name: 'Blockchain & Web3',
    description: 'Dive into the world of decentralized applications and secure digital transactions.',
    icon: '/images/blockchain-icon.png',
  },
  {
    name: 'Internet of Things',
    description: 'Connect devices and sensors to the cloud to automate tasks and improve efficiency.',
    icon: '/images/iot-icon.png',
  },
];

export default function Tracks() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-yellow-400">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Our Tracks
        </motion.h2>
        <p className="text-lg mt-4 text-yellow-300 font-medium">
          Choose a track that aligns with your skills and interests to conquer new challenges.
        </p>

        {/* Stacked Card Track Layout */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              className="group relative transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Card Stack with Rotated Layers */}
              <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-lg rotate-[3deg] group-hover:rotate-[0deg] transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gray-600 opacity-20 rounded-lg rotate-[6deg] group-hover:rotate-[0deg] transition-all duration-300"></div>
              <div className="relative z-10 bg-gray-800 rounded-lg shadow-2xl p-8 text-center transition-transform transform hover:-translate-y-2">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={track.icon}
                    alt={track.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  {track.name}
                </h3>
                <p className="text-yellow-300 text-sm mt-2 font-medium">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
