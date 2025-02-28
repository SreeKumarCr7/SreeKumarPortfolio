import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            C. Sree Kumar
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Frontend Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a frontend developer specializing in building exceptional digital
            experiences. Currently, I'm focused on building responsive web
            applications using React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row"
        >
          <Link to="contact" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mr-4">
              Get in Touch
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
            </button>
          </Link>
        </motion.div>

        {/* Email contact button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <a
            href="mailto:sreekumar.c@outlook.com"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 w-48"
          >
            <HiOutlineMail className="mr-2" size={20} />
            Email Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 