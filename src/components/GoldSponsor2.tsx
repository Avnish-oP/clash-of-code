// components/GoldSponsor.js
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition"; // Hook for cursor tracking effect

export default function GoldSponsor() {
  const { x, y } = useMousePosition();
  const glowRef = useRef(null);

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    }
  }, [x, y]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 p-10 text-yellow-400">
      {/* Cursor-tracking Glow Effect */}
      <div
        ref={glowRef}
        className="absolute w-96 h-96 bg-yellow-500 opacity-20 rounded-full pointer-events-none transition-transform duration-200"
        style={{
          filter: "blur(100px)",
          top: y - 150,
          left: x - 150,
        }}
      ></div>

      {/* Bug Detector Logo and Title */}
      <motion.div
        className="flex flex-col items-center z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/bugdetector-logo.png" // Replace with Bug Detector logo path
          alt="Bug Detector Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h2 className="text-4xl md:text-5xl font-bold">Proudly Sponsored by Bug Detector</h2>
        <p className="text-lg md:text-xl text-yellow-300 mt-4 max-w-2xl">
          Bug Detector, a leader in bug detection and cloud technology training, specializes in arming tech enthusiasts with skills to master the cloud and ensure top-notch software quality. They offer high-value certifications like AWS Cloud Practitioner, empowering developers in their journeys.
        </p>
      </motion.div>

      {/* Learn More Button */}
      <motion.a
        href="https://academy.bugdetector.in/aws-cloud-practitioner-master-class"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Explore Courses
      </motion.a>
    </section>
  );
}
