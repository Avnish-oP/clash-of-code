// components/Schedule.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const schedule = [
  {
    date: "October 29, 2024 09:00 AM",
    title: "Kick-Off & Registration",
    description: "Welcome to the Clash of Codes! Start with registration and an exciting opening ceremony.",
  },
  {
    date: "November 7, 2024 11:59 PM",
    title: "Registration And Project Submission Deadline",
    description: "Make sure to register and submit your project before the deadline.",
  },
  // {
  //   date: "November 10, 2024 09:00 AM",
  //   title: "Hacking Begins",
  //   description: "Start hacking on your projects and bring your ideas to life.",
  // },
  {
    date: "November 11, 2024 09:00 AM",
    title: "Project Evaluation",
    description: "Judges will evaluate your projects and select the top 10 teams.",
  },
  {
    date: "November 13, 2024 09:00 PM",
    title: "Top 10 Announcement",
    description: "Find out who made it to the top 10 and get ready for the final round at Microsoft office.",
  },
  {
    date: "November 16, 2024 09:00 AM",
    title: "Final Round",
    description: "Compete in the final round and showcase your project to the world.",
  },
  {
    date: "November 16, 2024 02:00 PM",
    title: "Closing Ceremony",
    description: "Join us for the closing ceremony and celebrate the winners of the event.",
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

    const eventIndex = schedule.findIndex(event => new Date(event.date) > now);
    setCurrentEvent(eventIndex === -1 ? schedule.length : eventIndex);

    const totalDuration = endTime - startTime;
    const elapsedTime = currentTime - startTime;
    setProgress(Math.min(elapsedTime / totalDuration, 1));
  }, []);

  return (
    <section id="#schedule" className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold font-clash-of-clans mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Event Schedule
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative flex justify-center">
          {/* Main Vertical Timeline Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-full overflow-hidden h-full">
            {/* Progress Fill */}
            <motion.div
              className="w-full h-full bg-white  rounded-full"
              style={{ height: `${progress * 100}%` }}
              transition={{ ease: "easeOut", duration: 2 }}
            />
          </div>

          <div className="w-full md:w-[55.3vw] flex flex-col space-y-20 mt-10">
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
                    className={`relative max-w-xs p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? "bg-yellow-600 text-black" : "bg-teal-600 text-black"
                    } ${isPastEvent ? " brightness-50 " : ""}`}
                  >
                    <p className="text-sm font-medium">{item.date}</p>
                    <h3 className="text-xl font-bold font-clash-of-clans mt-2">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>

                    {/* Dot Indicator with Pulsing Effect for Upcoming Event */}
                    <span
                      className={`absolute top-1/2 ${
                        index % 2 === 0 ? "-left-11" : "left-full"
                      } ml-3 w-5 h-5 ${
                        isUpcomingEvent ? "bg-yellow-400  animate-pulse" : isPastEvent ? "bg-gray-300" : "bg-white"
                      } rounded-full transform -translate-y-1/2`}
                    ></span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
