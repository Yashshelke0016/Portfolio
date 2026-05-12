import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaDatabase, FaGitAlt, FaGithub
} from 'react-icons/fa'
import {
  SiCplusplus, SiTailwindcss, SiExpress, SiFlask, SiDjango,
  SiMongodb, SiFirebase, SiMysql, SiPostman
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { HiCode } from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    icon: HiCode,
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'C', icon: HiCode },
      { name: 'C++', icon: SiCplusplus },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Java', icon: FaJava },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: FaNodeJs,
    color: 'from-emerald-500 to-green-600',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: HiCode },
      { name: 'Flask', icon: SiFlask },
      { name: 'Django', icon: SiDjango },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    color: 'from-orange-500 to-amber-600',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'AI / LLM',
    icon: FaRobot,
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Prompt Engineering', icon: FaRobot },
      { name: 'Conversational AI', icon: FaRobot },
      { name: 'LLM Evaluation', icon: FaRobot },
      { name: 'Gemini API', icon: FaRobot },
      { name: 'RAG Fundamentals', icon: FaRobot },
    ],
  },
  {
    title: 'Tools',
    icon: FaGitAlt,
    color: 'from-indigo-500 to-blue-600',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscCode },
      { name: 'Postman', icon: SiPostman },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The technical toolkit I use to build scalable solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="clean-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-primary">
                  <category.icon size={18} />
                </div>
                <h3 className="text-text-primary font-bold text-sm uppercase tracking-wide">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs font-medium text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <skill.icon className="opacity-70" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
