// components/Footer.js
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12  border-t border-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-clash-of-clans">Clash of Codes</h3>
          <p className="text-sm">
            Inspired by the spirit of competitive coding, Clash of Codes is a two-day hackathon event that brings together coders, innovators, and tech enthusiasts for an unforgettable experience of creativity and collaboration.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#schedule" className="hover:text-yellow-400 transition-colors">Event Schedule</a></li>
            <li><a href="#tracks" className="hover:text-yellow-400 transition-colors">Tracks</a></li>
            <li><a href="#prizes" className="hover:text-yellow-400 transition-colors">Prizes</a></li>
            <li><a href="#faq" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
            <li><a href="#sponsors" className="hover:text-yellow-400 transition-colors">Sponsors</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <p className="text-sm">Got questions? Reach out to us for any queries about the event or participation.</p>
          <ul className="space-y-2 mt-4 text-sm">
            <li><FaEnvelope className="inline mr-2" />technexus.community2024@gmail.com</li>
            <li>Location: Microsoft Office, Gurugram</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Connect with Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://x.com/Avnish_gupta_45" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/technexus-community/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/tech_nexus_community/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaInstagram />
            </a>
            
          </div>
        </div>
      </div>

      {/* Sponsor Logos */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <h3 className="text-center text-xl font-semibold text-yellow-400 mb-6">Proudly Sponsored By</h3>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/devfolio-logo.png'}
                alt="Devfolio"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
          <a href="https://pwskills.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/pwskills-logo.png'}
                alt="pwskills"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
          <a href="https://interviewbuddy.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/interviewbuddy-logo.jpeg'}
                alt="interbuddy"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
          <a href="https://risein.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/risein-logo.jpg'}
                alt="risein"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
          <a href="https://aptos.dev" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/aptos-logo.png'}
                alt="aptos"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
          <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Image
                src={'/images/microsoft-logo.png'}
                alt="Microsoft"
                width={80}
                height={80}
                className="mx-auto mb-4"
                loading="lazy"
              />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Clash of Codes. All rights reserved.</p>
      </div>
    </footer>
  );
}
