import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[50vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-6">
        <div className="text-center pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-3">
              Hi, I'm <span className="text-indigo-600">C. Sree Kumar</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-3xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <p className="text-gray-600">
              Passionate about creating beautiful, responsive, and user-friendly web applications.
              Specialized in modern frontend technologies and UI/UX design principles.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-sm"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/c-sree-kumar-0ab829293"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:srikumarpride@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="Email"
              >
                <HiOutlineMail className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/sreekumarcr7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="h-7 w-7" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 