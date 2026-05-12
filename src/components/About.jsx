import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaCode, FaRobot, FaLightbulb, FaRocket } from 'react-icons/fa'

const highlights = [
  {
    icon: FaCode,
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with modern frameworks, clean architecture, and scalable systems.',
  },
  {
    icon: FaRobot,
    title: 'AI & LLM Technologies',
    description: 'Hands-on experience with prompt engineering, conversational AI, LLM evaluation, and workflows.',
  },
  {
    icon: FaLightbulb,
    title: 'Problem Solving',
    description: 'Passionate about tackling real-world challenges through innovative software solutions.',
  },
  {
    icon: FaRocket,
    title: 'Continuous Learner',
    description: 'Always exploring emerging technologies and contributing to impactful projects.',
  },
]

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A dedicated software engineer with a passion for building scalable solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I am a <span className="font-semibold text-text-primary">Computer Engineering student</span> with
              a strong foundation in software development and AI technologies. I focus on building
              full-stack applications that solve real-world problems.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              My experience spans <span className="font-semibold text-text-primary">full stack web development</span>,
              crafting responsive frontends and robust backend architectures, as well as <span className="font-semibold text-text-primary">AI/LLM integration</span>,
              where I implement prompt engineering and evaluate conversational AI systems.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              I prioritize clean code, user-centric design, and scalable performance in every project I tackle.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              {[
                { value: '5+', label: 'Projects' },
                { value: '10+', label: 'Technologies' },
                { value: '5+', label: 'Months Exp.' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="clean-card p-6 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-4 text-primary">
                  <item.icon size={18} />
                </div>
                <h3 className="text-text-primary font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
