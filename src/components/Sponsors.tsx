// components/Sponsors.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Dorahack", logo: "/images/dorahack-logo.jpg", url: "https://dorahacks.io/home" },
  { name: "TechCanvass", logo: "/images/techcanvas-logo.jpeg", url: "https://techcanvass.com/" },
  { name: "PW Skills", logo: "/images/pwskills-logo.png", url: "https://pwskills.com" },
  { name: "Interview Buddy", logo: "/images/interviewbuddy-logo.jpeg", url: "https://interviewbuddy.com" },
  { name: "RiseIn", logo: "/images/risein-logo.jpg", url: "https://risein.com" },
  { name: "Aptos", logo: "/images/aptos-logo.png", url: "https://aptos.com" },
  { name: "commudle", logo: "/images/commudle-logo.png", url: "https://www.commudle.com/" },
  { name: "Bug Detector", logo: "/images/bugdetector-logo.jpg", url: "https://academy.bugdetector.in/about" },
  
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-yellow-400">
      <div className="container flex flex-col sm:flex-row justify-center items-center gap-16 mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Sponsors
        </motion.h2>

        <div className="max-w-4xl grid grid-cols-2 md:grid-cols-3  gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(sponsor.url, "_blank")}
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={120}
                height={60}
                className="mx-auto mb-4 rounded-full"
                loading="lazy"
              />
              <p className="text-xl font-semibold">{sponsor.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
