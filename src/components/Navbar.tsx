// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed bg-gradient-to-r from-black to-gray-900 py-4 px-6 shadow-lg w-full z-20"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-400 font-bold text-2xl md:text-3xl font-clash-of-clans">
          <Link href="/">
            <Image
              src='/images/logo.svg'
              alt="Clash of Codes Logo"
              width={48}
              height={48}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          
          <NavItem href="#about" title="About" />
          <NavItem href="#schedule" title="Schedule" />
          <NavItem href="#sponsors" title="Sponsors" />
          <NavItem href="https://clash-of-codes-v1.devfolio.co/" title="Register" />
          <NavItem href="#prizes" title="Prizes" />
          <NavItem href="#faq" title="FAQs" />
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black h-screen z-10"
              onClick={() => setIsOpen(false)}
            >

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed  top-0 right-0 w-3/4 max-w-xs h-full  p-6 z-20   flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow-400 ml-auto mb-6 hover:text-yellow-500 focus:outline-none"
                aria-label="Close Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div className=" flex flex-col gap-4 items-end ">
                
                <NavItem href="#about" title="About" onClick={() => setIsOpen(false)} />
                <NavItem href="#schedule" title="Schedule" onClick={() => setIsOpen(false)} />
                <NavItem href="#sponsors" title="Sponsors" onClick={() => setIsOpen(false)} />
                <NavItem href="https://clash-of-codes-v1.devfolio.co/" title="Register" onClick={() => setIsOpen(false)} />
                <NavItem href="#prizes" title="Prizes" onClick={() => setIsOpen(false)} />
                <NavItem href="#faq" title="FAQs" onClick={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// NavItem Component
interface NavItemProps {
  href: string;
  title: string;
  onClick?: () => void;
}

function NavItem({ href, title, onClick }: NavItemProps) {
  return (
    <Link href={href}>
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.1, color: '#FFD700' }}
        className="text-yellow-400 text-lg font-clash-of-clans hover:text-yellow-500 cursor-pointer transition-all duration-300 relative"
      >
        <span className="relative hover:after:scale-x-100 after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}
