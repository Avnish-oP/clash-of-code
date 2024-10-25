// components/Hero.js
import Image from "next/image";
export default function Hero() {
    return (
      <section className="relative h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={'/images/clash-background.png'}
            alt="Clash of Clans Style Background"
            className="w-full h-full object-cover opacity-40 filter blur-sm"
            width={1920}
            height={1080}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-orange-400 opacity-50"></div> */}
        </div>
  
        {/* Hero Content */}
        <div className="relative z-10 text-center text-yellow-400 px-4">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight font-clash-of-clans">
            Clash of Codes
          </h1>
          <p className="text-xl md:text-3xl mt-4 font-clash-of-clans text-yellow-300">
            Code. Conquer. Collaborate.
          </p>
  
          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="#register"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-xl shadow-lg transition duration-300 transform hover:scale-105"
            >
              Join the Battle
            </a>
          </div>
        </div>
      </section>
    );
  }
  