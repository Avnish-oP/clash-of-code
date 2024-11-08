// components/Prizes.js
"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaGem } from "react-icons/fa"; // Adding icons for each prize tier

const prizeData = [
  {
    title: "Total Prize Pool",
    amount: "$1000",
    description: "Epic prizes await the champions!",
    icon: <FaGem size={50} />,
  },
  {
    title: "Winner",
    amount: "7000 INR + Goodies and Swags",
    description: "The ultimate champion deserves the ultimate prize!",
    icon: <FaTrophy size={40} />,
  },
  {
    title: "Runner-Up",
    amount: "5000 INR + Goodies and Swags",
    description: "A well-fought victory deserves recognition!",
    icon: <FaMedal size={40} />,
  },
  {
    title: "Top 10",
    amount: "Everyone will get swags and goodies",
    description: "Recognition for the top 10 teams!",
    icon: <FaAward size={40} />,
  },
  
];

export default function Prizes() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-yellow-400">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Prizes & Glory
        </motion.h2>

        <div className="relative flex justify-center items-center mb-12">
          <motion.div
            className="absolute inset-0 bg-yellow-500 opacity-20 blur-lg rounded-full w-96 h-92 mx-auto"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="z-10 bg-gray-800 rounded-lg p-6 md:p-12 shadow-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-yellow-400 mb-4">{prizeData[0].icon}</div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">Total Prize Pool</h3>
            <p className="text-4xl md:text-6xl font-extrabold text-white">{prizeData[0].amount}</p>
            <p className="mt-2 text-lg md:text-xl text-gray-300">{prizeData[0].description}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizeData.slice(1).map((prize, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-400 opacity-10 blur-lg"
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative z-10 text-yellow-400 mb-4">{prize.icon}</div>
              <h4 className="text-2xl font-bold text-yellow-400">{prize.title}</h4>
              <p className="text-4xl font-medium text-white mt-2">{prize.amount}</p>
              <p className="mt-2 font-thin text-gray-300">{prize.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
