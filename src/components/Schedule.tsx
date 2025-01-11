"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const schedule = [
  {
    date: "January 1, 2025 10:00 AM",
    title: "Registration Opens",
    description: "Welcome to Clash of Code v2.0! Get ready for an exciting start.",
  },
  {
    date: "January 14, 2025 11:59 PM",
    title: "Registration Deadline",
    description: "Ensure your team is registered before the deadline.",
  },
  {
    date: "January 15, 2025 09:00 AM",
    title: "Project submission deadline",
    description: "Submit your project before the deadline to qualify for the finals.",
  },
  {
    date: "January 16, 2025 09:00 AM",
    title: "Round 1 Results",
    description: "Check your email for the results of the first round.",
  },
  {
    date: "January 18, 2025 09:00 AM",
    title: "Offline Grand Finale",
    description: "Join us at the Microsoft office,Noida for the final showdown.",
  },
  {
    date: "January 18, 2025 03:00 PM",
    title: "Winner Announcement And Closing Ceremony",
    description: "Celebrate the winners and the end of Clash of Code v2.0.",
  },
];

export default function Schedule() {
  const [progress, setProgress] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const now = new Date();
    const startTime = new Date(schedule[0].date).getTime();
    const endTime = new Date(schedule[schedule.length - 1].date).getTime();
    const currentTime = now.getTime();

    const eventIndex = schedule.findIndex((event) => new Date(event.date) > now);
    setCurrentEvent(eventIndex === -1 ? schedule.length : eventIndex);

    const totalDuration = endTime - startTime;
    const elapsedTime = currentTime - startTime;
    setProgress(Math.min(elapsedTime / totalDuration, 1));
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-clash-of-clans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Event Schedule
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative flex justify-center">
          {/* Main Vertical Timeline Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full overflow-hidden h-full">
            {/* Progress Fill */}
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"
              style={{ height: `${progress * 100}%` }}
              transition={{ ease: "easeOut", duration: 2 }}
            />
          </div>

          <div className="w-full md:w-[55vw] flex flex-col space-y-20 mt-10">
            {schedule.map((item, index) => {
              const isPastEvent = index < currentEvent;
              const isUpcomingEvent = index === currentEvent;

              return (
                <motion.div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`relative max-w-xs p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-300 backdrop-blur-md ${
                      isPastEvent ? "brightness-75" : ""
                    }`}
                  >
                    <p className="text-sm font-medium text-cyan-400">{item.date}</p>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    <p className="mt-2 text-gray-300">{item.description}</p>

                    {/* Dot Indicator with Glowing Effect */}
                    <span
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "-left-8" : "left-full ml-[9px]"
                      } w-5 h-5 ${
                        isUpcomingEvent
                          ? "bg-white animate-pulse"
                          : isPastEvent
                          ? "bg-gray-600"
                          : "bg-cyan-400"
                      } rounded-full transform -translate-y-1/2 shadow-lg`}
                    ></span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent blur-[150px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-500 to-transparent blur-[150px] opacity-20"></div>
      </div>
    </section>
  );
}
