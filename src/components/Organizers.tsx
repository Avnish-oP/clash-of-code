// components/Organizers.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";


const organizers = [
  {
    name: "Avnish",
    designation: "Lead Organizer",
    tagline: "“Coding is the weapon of modern conquest!”",
    photo: "/images/Avnish.jpg",
    linkedin: "https://www.linkedin.com/in/avnish-gupta-23245a273/",
  },
  {
    name: "Purvesh Gupta",
    designation: "PR & Marketing Head",
    tagline: "“Innovate, conquer, repeat.”",
    photo: "/images/Purvesh.jpg",
    linkedin: "https://www.linkedin.com/in/purveshgupta/",
  },
  {
    name: "Bimlesh",
    designation: "Design Head",
    tagline: "“A battle well designed is half won.”",
    photo: "/images/Bimlesh.jpg",
    linkedin: "https://www.linkedin.com/in/bimlesharma/",
  },
  {
    name: "Kumar Ashutosh",
    designation: "Community Manager",
    tagline: "“Success is crafted in the details.”",
    photo: "/images/Ashutosh.jpg",
    linkedin: "https://www.linkedin.com/in/kumar-ashutosh-09ab02270/",
  },
];

export default function Organizers() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-yellow-400">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet the Organizers
        </motion.h2>
        <p className="text-lg mt-4 text-yellow-300 font-medium">
          Our masterminds behind the scenes, ready to bring this battle to life!
        </p>

        {/* Organizers Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl mb-4">
                <Image
                  src={organizer.photo}
                  alt={organizer.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mt-2">
                {organizer.name}
              </h3>
              <p className="text-yellow-300 text-sm font-semibold">
                {organizer.designation}
              </p>
              <p className="text-yellow-500 italic mt-2">{organizer.tagline}</p>

              <div className="absolute inset-0 rounded-lg bg-yellow-500 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
