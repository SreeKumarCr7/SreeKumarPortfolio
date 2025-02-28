import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaCode, FaLaptopCode, FaReact, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/c-sree-kumar-0ab829293',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/sreekumarcr7',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/mr_._._consistent7/',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Frontend Development', icon: FaReact },
    { name: 'UI/UX Design', icon: FaLaptopCode },
    { name: 'Chrome Extensions', icon: FaCode },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 md:col-span-2"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                C. Sree Kumar
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A passionate Frontend Developer focused on creating responsive and user-friendly web applications with modern technologies.
              </p>
              <div className="flex justify-center space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 flex items-center justify-center w-10 h-10"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href="mailto:srikumarpride@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 flex items-center justify-center w-10 h-10"
                  aria-label="Email"
                >
                  <HiMail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+917993793171"
                  className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 flex items-center justify-center w-10 h-10"
                  aria-label="Phone"
                >
                  <HiPhone className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center text-gray-400 mt-4">
                <HiLocationMarker className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Bengaluru, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-lg">
                      <service.icon className="h-4 w-4 text-indigo-400" />
                    </div>
                    <span className="text-gray-400">{service.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} C. Sree Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 