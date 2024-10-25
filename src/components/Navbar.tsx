// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-r from-black to-gray-900 py-4 px-6 flex items-center justify-between relative shadow-lg"
    >
      {/* Logo */}
      <div className="text-yellow-400 font-bold text-2xl md:text-3xl font-clash-of-clans">
        <Link href="/">
          
            <Image
              src='/images/logo.svg'
              alt="Clash of Codes Logo"
              width={64}
              height={64}
            />
          
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className={`md:flex space-x-8 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <NavItem href="#home" title="Home" />
        <NavItem href="#about" title="About" />
        <NavItem href="#schedule" title="Schedule" />
        <NavItem href="#register" title="Register" />
      </div>
    </motion.nav>
  );
}

// NavItem Component to avoid repetitive code
interface NavItemProps {
  href: string;
  title: string;
}

function NavItem({ href, title }: NavItemProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1, color: '#FFD700' }}
        className="text-yellow-400 text-lg font-clash-of-clans hover:text-yellow-500 cursor-pointer transition-all duration-300 relative"
      >
        <span className="before:absolute before:left-0 before:-bottom-1 before:h-1 before:w-full before:scale-x-0 before:bg-yellow-500 before:transition-transform before:duration-300 hover:before:scale-x-100">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}
