"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaGem } from "react-icons/fa";

const prizeData = [
  {
    title: "Total Prize Pool",
    amount: "₹25,000",
    description: "Amazing prizes and recognition await the champions!",
    icon: <FaGem size={60} />,
  },
  {
    title: "Winner",
    amount: "₹8,000 + Goodies",
    description: "The ultimate champion deserves the best!",
    icon: <FaTrophy size={50} />,
  },
  {
    title: "Runner-Up",
    amount: "₹5,000 + Goodies",
    description: "Celebrate a well-fought journey!",
    icon: <FaMedal size={50} />,
  },
  {
    title: "Top 10",
    amount: "Swags & Recognition",
    description: "Exclusive swags for the top 10 teams!",
    icon: <FaAward size={50} />,
  },
];

export default function Prizes() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-[#ffc800]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Prizes & Recognition
        </motion.h2>

        {/* Total Prize Pool Highlight */}
        <div className="relative flex justify-center items-center mb-16">
          <motion.div
            className="z-10 bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#00F0FF] mb-4">{prizeData[0].icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#ffc800]">
              Total Prize Pool
            </h3>
            <p className="text-5xl md:text-6xl font-extrabold my-4 text-white">
              {prizeData[0].amount}
            </p>
            <p className="text-lg text-gray-400">{prizeData[0].description}</p>
          </motion.div>
        </div>

        {/* Individual Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {prizeData.slice(1).map((prize, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-md transform hover:translate-y-[-5px] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="text-[#00F0FF] mb-6">{prize.icon}</div>
              <h4 className="text-2xl font-bold text-[#ffc800]">{prize.title}</h4>
              <p className="text-3xl font-medium text-white mt-4">
                {prize.amount}
              </p>
              <p className="mt-2 text-gray-400">{prize.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
