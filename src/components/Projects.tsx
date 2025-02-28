import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: 'professional' | 'personal';
}

const projectsData: Project[] = [
  {
    title: 'Custom Software Solutions',
    description: 'Developed tailored software applications for business clients, integrating frontend interfaces with backend functionality. Created solutions that automated workflows and improved operational efficiency using React.js and Python.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1170&auto=format&fit=crop',
    tags: ['React.js', 'Python', 'Automation', 'Frontend Development'],
    type: 'professional'
  },
  {
    title: 'UI Design & Development',
    description: 'Created UI designs in Figma and implemented them as functional web interfaces using HTML5, CSS3, and JavaScript. Ensured designs were responsive, accessible, and provided optimal user experiences across all devices.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop',
    tags: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    type: 'professional'
  },
  {
    title: 'Web Scraping Solutions',
    description: 'Developed web scraping tools to extract and analyze data from various websites. Implemented automated data collection processes that provided valuable insights for business decision-making and market analysis.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    tags: ['Python', 'Data Analysis', 'Automation', 'Web Scraping'],
    type: 'professional'
  },
  {
    title: 'Interactive E-commerce Platform',
    description: 'Built a responsive e-commerce website using React.js with product filtering, shopping cart functionality, and user authentication. Implemented responsive design principles for seamless viewing across desktop and mobile devices.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    tags: ['React.js', 'JavaScript', 'CSS3', 'E-commerce', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#',
    type: 'personal'
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website showcasing projects and skills. Created with HTML5, CSS3, and JavaScript, featuring smooth animations, responsive design, and optimized performance across all devices.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1170&auto=format&fit=crop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://sreekumarcr7.github.io/SreeKumarPortfolio/',
    githubUrl: 'https://github.com/sreekumarcr7/SreeKumarPortfolio',
    type: 'personal'
  },
  {
    title: 'Weather Application',
    description: 'Developed a weather application that fetches real-time data from a weather API. Built with React.js, featuring location-based forecasts, interactive UI elements, and responsive design for both desktop and mobile users.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1170&auto=format&fit=crop',
    tags: ['React.js', 'API Integration', 'JavaScript', 'Weather Data'],
    liveUrl: '#',
    githubUrl: '#',
    type: 'personal'
  },
];

const Projects = () => {
  // Limit to 3 projects per section
  const professionalProjects = projectsData.filter(project => project.type === 'professional').slice(0, 3);
  const personalProjects = projectsData.filter(project => project.type === 'personal').slice(0, 3);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Check if we need to show right arrow initially
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightArrow(scrollWidth > clientWidth);
    }
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">My Projects</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            A showcase of my professional and personal projects, demonstrating my skills in frontend development, UI/UX design, and more
          </p>
        </motion.div>

        {/* Professional Projects */}
        <div className="mb-10 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-l-4 border-indigo-600 pl-3 sm:pl-4"
          >
            Professional Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-l-4 border-indigo-600 pl-3 sm:pl-4"
          >
            Personal Projects
          </motion.h3>
          
          <div className="relative">
            {/* Left scroll button */}
            {showLeftArrow && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg text-indigo-600 hover:text-indigo-800 hover:shadow-xl transition-all duration-300"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
            
            {/* Right scroll button */}
            {showRightArrow && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg text-indigo-600 hover:text-indigo-800 hover:shadow-xl transition-all duration-300"
                aria-label="Scroll right"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
            
            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-6 sm:pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>
                {`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              
              {personalProjects.map((project, index) => (
                <div key={project.title} className="min-w-[260px] w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[30vw] px-2 sm:px-3 snap-start">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{project.title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 sm:py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm md:text-base text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FaGithub className="mr-1" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm md:text-base text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FaExternalLinkAlt className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 