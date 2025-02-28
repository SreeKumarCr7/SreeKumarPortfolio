import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineCode, HiOutlineClock, HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';
import meImage from '../assets/me1.jpeg';
import { useEffect, useState } from 'react';

const About = () => {
  const shadowColors = [
    'from-indigo-200/50 to-indigo-300/50',
    'from-blue-200/50 to-blue-300/50',
    'from-purple-200/50 to-purple-300/50',
    'from-teal-200/50 to-teal-300/50'
  ];

  const [currentShadowIndex, setCurrentShadowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShadowIndex((prev) => (prev + 1) % shadowColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Frontend Developer with a passion for creating exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm mb-8">
                <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-indigo-400 pl-4">
                  "Frontend Developer with 1 year of experience at Thor Signia, specializing in creating responsive and user-friendly web applications. Proficient in React.js, JavaScript, HTML5, and CSS3 with a strong foundation in UI/UX principles."
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Versatile professional with hands-on experience in web development, UI design with Figma, web scraping, and automation solutions. Passionate about building clean, efficient code and delivering exceptional user experiences.
              </p>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <HiOutlineBriefcase className="w-6 h-6 text-indigo-600 mr-2" />
                  Work Experience
                </h3>
                <div className="relative pl-8 border-l-2 border-indigo-200 space-y-6 md:space-y-10 before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-indigo-600">
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-[-17px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-indigo-100"></div>
                    
                    {/* Content */}
                    <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-lg font-semibold text-gray-900">Frontend Developer</h4>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 w-fit">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        February 2024 - Present
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                        <svg className="w-4 h-4 text-indigo-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="text-gray-700 font-medium">Thor Signia</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <ul className="space-y-2 md:space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Developed responsive web applications using <span className="text-indigo-600 font-medium">React.js</span>, ensuring cross-browser compatibility and mobile responsiveness</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Created custom software solutions and implemented automation processes to improve workflow efficiency</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Designed UI mockups and prototypes using <span className="text-indigo-600 font-medium">Figma</span>, collaborating with stakeholders to refine user experiences</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Built interactive user interfaces with <span className="text-indigo-600 font-medium">JavaScript, HTML5, and CSS3</span></span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Utilized <span className="text-indigo-600 font-medium">Python</span> for backend automation and data processing tasks</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Implemented web scraping solutions to gather and analyze data from various sources</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${shadowColors[currentShadowIndex]} rounded-2xl transform rotate-3 scale-105 -z-10`}></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                  <img
                    src={meImage}
                    alt="C. Sree Kumar"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <HiOutlineAcademicCap className="w-6 h-6 text-indigo-600 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4 hover:bg-indigo-50 transition-colors duration-300 p-3 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-gray-900">Bachelor of Technology (CSE)</h4>
                  <p className="text-gray-600">Dr. K.V.Subba Reddy Institute Of Technology, Kurnool, India</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">2020 - 2024</span>
                    <span className="text-sm font-medium text-indigo-600">CGPA: 7.65</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-indigo-600 pl-4 hover:bg-indigo-50 transition-colors duration-300 p-3 rounded-r-lg">
                  <h4 className="text-lg font-semibold text-gray-900">Pre-university (Mathematics, Physics, Chemistry)</h4>
                  <p className="text-gray-600">Vijayawada Nalanda Junior College, Ananthapur, India</p>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">2018 - 2020</span>
                    <span className="text-sm font-medium text-indigo-600">GPA: 8.82</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <HiOutlineLocationMarker className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Bengaluru, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <HiOutlineCode className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Specialization</h4>
                    <p className="text-gray-600">Frontend Development</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <HiOutlineClock className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Experience</h4>
                    <p className="text-gray-600">1 Year</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                  <HiOutlineBriefcase className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Current Role</h4>
                    <p className="text-gray-600">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 