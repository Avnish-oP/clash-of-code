"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const tracks = [
  {
    name: "AI & Machine Learning",
    description: "Build intelligent systems that can learn, adapt, and enhance user experiences.",
    icon: "/images/AI.png",
  },
  {
    name: "Web Development",
    description: "Create dynamic, responsive websites that are both aesthetic and functional.",
    icon: "/images/web-development.png",
  },
  {
    name: "Blockchain & Web3",
    description: "Dive into the world of decentralized applications and secure digital transactions.",
    icon: "/images/blockchain-icon.png",
  },
  {
    name: "Internet of Things",
    description: "Connect devices and sensors to the cloud to automate tasks and improve efficiency.",
    icon: "/images/iot-icon.png",
  },
];

export default function Tracks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-clash-of-clans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Explore Our Tracks
          </h2>
          <p className="text-lg mt-4 text-gray-300">
            Choose your path to innovation and conquer new challenges.
          </p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-400 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={track.icon}
                    alt={track.name}
                    width={80}
                    height={80}
                    className="rounded-lg drop-shadow-lg"
                  />
                </div>
              </div>
              {/* Track Title */}
              <h3 className="text-xl font-semibold text-cyan-400 text-center mb-2">
                {track.name}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 text-center">{track.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent blur-[150px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-500 to-transparent blur-[150px] opacity-20"></div>
      </div>
    </section>
  );
}
