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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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
      const isMobile = window.innerWidth < 640;
      
      // On mobile, scroll one full project at a time
      const scrollAmount = direction === 'left' 
        ? (isMobile ? -clientWidth : -clientWidth / 2) 
        : (isMobile ? clientWidth : clientWidth / 2);
        
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectLinkClick = (e: React.MouseEvent, type: string) => {
    // For all project links, show the toast message
    e.preventDefault();
    setToastMessage(`${type} will be updated soon!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    // Check if we need to show right arrow initially
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowRightArrow(scrollWidth > clientWidth);
    }
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my professional and personal projects, demonstrating my skills in frontend development, UI/UX design, and more
          </p>
        </motion.div>

        {/* Professional Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-4 py-2 bg-gray-50 rounded-r-lg shadow-sm">
              Professional Projects
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                onLinkClick={handleProjectLinkClick} 
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-4 py-2 bg-gray-50 rounded-r-lg shadow-sm">
              Personal Projects
            </h3>
          </motion.div>
          
          <div className="relative">
            {/* Left scroll button */}
            {showLeftArrow && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg text-indigo-600 hover:text-indigo-800 hover:shadow-xl transition-all duration-300"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
            )}
            
            {/* Right scroll button */}
            {showRightArrow && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg text-indigo-600 hover:text-indigo-800 hover:shadow-xl transition-all duration-300"
                aria-label="Scroll right"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            )}
            
            {/* Scrollable container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth"
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
                <div key={project.title} className="w-full sm:min-w-[300px] md:min-w-[350px] lg:min-w-[380px] px-2 sm:px-4 snap-start mobile-full-width">
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    onLinkClick={handleProjectLinkClick} 
                    isPersonal={true} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-fade-in-up text-center font-medium">
          {toastMessage}
        </div>
      )}

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate(-50%, 20px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.3s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onLinkClick: (e: React.MouseEvent, type: string) => void;
  isPersonal?: boolean;
}

const ProjectCard = ({ project, index, onLinkClick, isPersonal = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className={`relative ${isPersonal ? 'h-56 sm:h-60' : 'h-48 sm:h-48'} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className={`text-gray-600 mb-4 flex-grow ${isPersonal ? 'line-clamp-6 min-h-[120px]' : 'line-clamp-4'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
              onClick={(e) => onLinkClick(e, 'GitHub repository')}
            >
              <FaGithub className="mr-1" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
              onClick={(e) => onLinkClick(e, 'Live demo')}
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