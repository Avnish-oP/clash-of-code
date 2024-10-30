// components/FAQ.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is the Clash of Codes hackathon?",
    answer:
      "Clash of Codes is an exciting competitive programming hackathon where participants solve problems in multiple tracks to showcase their skills and win prizes.",
  },
  {
    question: "Who can participate in the hackathon?",
    answer:
      "Anyone interested in coding and problem-solving can join! From beginners to experienced developers, everyone is welcome to test their skills.",
  },
  {
    question: "What should I bring to the event?",
    answer:
      "You should bring a laptop, any required accessories, and a strong competitive spirit. We’ll provide refreshments and a space to work on your projects.",
  },
  {
    question: "How can I register for the hackathon?",
    answer:
      "Register online through our event website before the deadline. Follow the instructions provided to secure your spot!",
  },
  {
    question: "Are there any prizes for winners?",
    answer:
      "Yes, winners will receive exciting prizes, certificates, and the opportunity to connect with industry professionals.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full md:w-3/4 mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden border-2 ${
                activeIndex === index ? "border-yellow-500 bg-yellow-600" : "border-gray-700 bg-gray-800"
              } shadow-md`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Section */}
              <motion.div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center p-6 font-bold font-clash-of-clans text-lg md:text-xl text-white"
                initial={{ backgroundColor: "#1A202C" }}
                whileHover={{ backgroundColor: "#2D3748" }}
              >
                <span>{faq.question}</span>
                <motion.div
                  className="w-6 h-6 text-yellow-400"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.div>
              </motion.div>

              {/* Answer Section */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="p-6 text-left bg-gray-700 text-yellow-200"
                    initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}