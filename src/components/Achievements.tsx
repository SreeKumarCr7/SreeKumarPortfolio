import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaSmile, FaCode, FaChartBar } from 'react-icons/fa';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Client Satisfaction',
    description: 'Successfully delivered 5+ frontend projects with 100% client satisfaction rate at Thor Signia',
    icon: <FaSmile className="w-8 h-8 text-white" />,
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    title: 'Performance Optimization',
    description: 'Reduced page load time by 40% through code optimization in the E-commerce Platform project',
    icon: <FaChartLine className="w-8 h-8 text-white" />,
    gradient: 'from-green-400 to-green-600',
  },
  {
    title: 'UI/UX Excellence',
    description: 'Designed UI mockups that improved user experience and received positive client feedback',
    icon: <FaCode className="w-8 h-8 text-white" />,
    gradient: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'Portfolio Development',
    description: 'Built a responsive Portfolio Website that showcases technical skills and creative abilities',
    icon: <FaTrophy className="w-8 h-8 text-white" />,
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Data Visualization',
    description: 'Implemented data visualization solutions that improved business decision-making processes',
    icon: <FaChartBar className="w-8 h-8 text-white" />,
    gradient: 'from-blue-400 to-blue-600',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key milestones and accomplishments from my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.slice(0, 3).map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${achievement.gradient} p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-white text-opacity-90">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Center-aligned container for the 4th and 5th achievements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {achievementsData.slice(3).map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${achievement.gradient} p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02]`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-white text-opacity-90">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 