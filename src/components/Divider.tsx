// components/SimpleDivider.js
"use client";
import { motion } from "framer-motion";

export default function SimpleDivider({ icon = "🔥" }) {
  return (
    <div className="flex justify-center items-center py-4 relative z-10">
      {/* Left Line */}
      <motion.div
        className="h-0.5 bg-yellow-400 w-1/3"
        initial={{ width: "0%" }}
        animate={{ width: "33%" }}
        transition={{ duration: 1.2 }}
      ></motion.div>
      
      {/* Icon in Center */}
      <motion.div
        className="mx-4 text-yellow-400 text-2xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      
      {/* Right Line */}
      <motion.div
        className="h-0.5 bg-yellow-400 w-1/3"
        initial={{ width: "0%" }}
        animate={{ width: "33%" }}
        transition={{ duration: 1.2 }}
      ></motion.div>
    </div>
  );
}
