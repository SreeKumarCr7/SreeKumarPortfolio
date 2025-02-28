import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaDatabase, FaTools, FaUsers, FaChrome } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMysql, SiFigma, SiGit, SiWebpack, SiNpm } from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
  icon: React.ReactNode;
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: <FaReact className="w-6 h-6" />,
    color: 'from-blue-400 to-indigo-600',
    skills: [
      { name: 'HTML5', level: 90, icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: 'CSS3', level: 90, icon: <FaCss3Alt className="w-5 h-5 text-blue-500" /> },
      { name: 'JavaScript', level: 85, icon: <FaJs className="w-5 h-5 text-yellow-500" /> },
      { name: 'React.js', level: 85, icon: <FaReact className="w-5 h-5 text-blue-400" /> },
      { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
      { name: 'Responsive Design', level: 90 },
      { name: 'UI/UX Principles', level: 80 },
    ],
  },
  {
    category: 'Backend & Database',
    icon: <FaDatabase className="w-6 h-6" />,
    color: 'from-purple-400 to-purple-600',
    skills: [
      { name: 'Python', level: 85, icon: <FaPython className="w-5 h-5 text-blue-600" /> },
      { name: 'MySQL', level: 80, icon: <SiMysql className="w-5 h-5 text-blue-800" /> },
      { name: 'Web Scraping', level: 90 },
      { name: 'Chrome Extensions', level: 85, icon: <FaChrome className="w-5 h-5 text-green-500" /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <FaTools className="w-6 h-6" />,
    color: 'from-green-400 to-teal-600',
    skills: [
      { name: 'VS Code', level: 90 },
      { name: 'Cursor', level: 85 },
      { name: 'Webpack', level: 75, icon: <SiWebpack className="w-5 h-5 text-blue-500" /> },
      { name: 'Git/GitHub', level: 85, icon: <SiGit className="w-5 h-5 text-orange-600" /> },
      { name: 'Figma', level: 80, icon: <SiFigma className="w-5 h-5 text-purple-500" /> },
      { name: 'Chrome DevTools', level: 85 },
      { name: 'npm/yarn', level: 85, icon: <SiNpm className="w-5 h-5 text-red-500" /> },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <FaUsers className="w-6 h-6" />,
    color: 'from-amber-400 to-orange-600',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Communication', level: 85 },
      { name: 'Time Management', level: 80 },
      { name: 'Adaptability', level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills that I've developed throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-6 pb-3 border-b border-gray-100">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>}
                          <span className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{skill.name}</span>
                        </div>
                        <span className="text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 px-2.5 py-1 rounded-full">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 