import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar, FaPaintBrush, FaReact, FaRobot, FaSearchengin } from 'react-icons/fa';

interface Interest {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  borderColor: string;
}

const interestsData: Interest[] = [
  {
    name: 'Web Development',
    icon: <FaLaptopCode className="w-10 h-10" />,
    description: 'Building responsive and interactive web applications using modern frameworks and technologies',
    color: 'text-indigo-600',
    borderColor: 'border-indigo-600',
  },
  {
    name: 'Data Visualization',
    icon: <FaChartBar className="w-10 h-10" />,
    description: 'Creating intuitive and informative data visualizations to communicate complex information',
    color: 'text-blue-600',
    borderColor: 'border-blue-600',
  },
  {
    name: 'UI/UX Design',
    icon: <FaPaintBrush className="w-10 h-10" />,
    description: 'Designing user-friendly interfaces that provide exceptional user experiences',
    color: 'text-purple-600',
    borderColor: 'border-purple-600',
  },
  {
    name: 'Frontend Frameworks',
    icon: <FaReact className="w-10 h-10" />,
    description: 'Exploring and mastering modern frontend frameworks and libraries',
    color: 'text-teal-600',
    borderColor: 'border-teal-600',
  },
  {
    name: 'Automation',
    icon: <FaRobot className="w-10 h-10" />,
    description: 'Developing automated solutions to streamline workflows and improve efficiency',
    color: 'text-green-600',
    borderColor: 'border-green-600',
  },
  {
    name: 'Web Scraping',
    icon: <FaSearchengin className="w-10 h-10" />,
    description: 'Extracting and analyzing data from websites to generate valuable insights',
    color: 'text-orange-600',
    borderColor: 'border-orange-600',
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interests</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Areas of technology and development that I'm passionate about
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {interestsData.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 border-2 ${interest.borderColor} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gray-50 rounded-full opacity-20"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`mb-5 p-4 rounded-full ${interest.color}`}>
                  {interest.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${interest.color}`}>{interest.name}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests; 