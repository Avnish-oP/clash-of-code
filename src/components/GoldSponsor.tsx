// components/GoldSponsor.js
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GoldSponsor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 bg-gray-900 text-yellow-400 overflow-hidden">
      {/* Background Glow Following Cursor */}
      <div
        className="absolute rounded-full bg-purple-500 opacity-20 pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          left: cursorPosition.x - 150,
          top: cursorPosition.y - 150,
          transition: "transform 0.1s ease",
        }}
      ></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 font-clash-of-clans tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Proudly Sponsored by <span className="text-purple-500">Bug Detector</span>
      </motion.h2>

      {/* Detector Description */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-center text-white mb-8 px-6 md:px-0 leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        We are team of security researcher{"'"}s where we are helping the industry via providing the security consultancy  and training with the prior experience of our researcher{"'"}s in order to keep them secure. So that you can build your production builds without any risk. With the help of our team you will get to know about risk assessment of your products and will makes a consolidate vulnerabilities report because we believe in &quot;You Build We Hack&quot;.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="https://detector.dev"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-lg md:text-xl shadow-lg transition duration-300 transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about Detector
        </a>
      </motion.div>
    </section>
  );
}
