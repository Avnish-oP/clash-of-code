// components/TitleSponsor.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TitleSponsor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative cursor-pointer flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-center overflow-hidden">
      {/* Cursor Tracking Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none transform transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #0687ED, transparent 25%)`,
        }}
      />

      {/* Tech Canvas Logo */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/techcanvas-logo.png" // Replace with actual logo path
          alt="Tech Canvas Logo"
          width={400}
          height={400}
          className="rounded-lg shadow-lg p-2 bg-white"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold font-clash-of-clans drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Title Sponsor: Tech Canvas
      </motion.h2>

      {/* Description */}
      <motion.p
        className="relative z-10 text-lg md:text-xl lg:text-2xl max-w-3xl text-black drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Techcanvass is a training and consulting company founded in 2011, based in Mumbai, India. It primarily focuses on business analysis and IT training, offering various certification programs and courses for professionals looking to advance in fields such as business analysis, data analytics, agile methodologies, and software testing. Some of their notable courses include IIBA (International Institute for Business Analysis) certifications like ECBA, CCBA, and CBAP, as well as specialized courses in selenium automation testing, SQL, and domain-specific areas like banking and healthcare and many others.
      </motion.p>
    </section>
  );
}
