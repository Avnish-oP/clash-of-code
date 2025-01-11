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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#FBFF00] font-clash-of-clans"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet the Organizers
        </motion.h2>
        <p className="text-lg mt-4 text-gray-300 font-medium">
          The masterminds orchestrating this epic event!
        </p>

        {/* Organizers Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {organizers.map((organizer, index) => (
            <motion.a
              key={index}
              href={organizer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FBFF00]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Organizer Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#FBFF00] shadow-xl mb-4">
                <Image
                  src={organizer.photo}
                  alt={organizer.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Organizer Details */}
              <h3 className="text-2xl font-bold text-[#FBFF00]">{organizer.name}</h3>
              <p className="text-sm text-gray-300 font-semibold">
                {organizer.designation}
              </p>
              <p className="text-gray-400 italic mt-2">{organizer.tagline}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-[#FBFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
