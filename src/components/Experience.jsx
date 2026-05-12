import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    company: 'Ethara.ai',
    role: 'LLM Post Training Intern',
    duration: '01/2026 – 05/2026',
    location: 'Remote',
    description: [
      'Worked on live AI/LLM client projects involving prompt engineering, AI response evaluation, conversational AI testing, and output quality analysis.',
      'Contributed to projects like Generalist and Evalves by analyzing model responses and validating AI-generated outputs.',
      'Improved workflow accuracy and supported real-world LLM evaluation processes.',
      'Gained hands-on experience in AI model assessment, prompt optimization, and production-level LLM workflows.',
    ],
    techStack: ['Prompt Engineering', 'LLM Evaluation', 'Conversational AI', 'AI Testing'],
    gradient: 'from-primary to-accent',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional experience in software development and AI."
        />

        <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-none">
          {/* Central Timeline Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative mb-12 md:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:left-1/2 top-8 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white z-10" />

              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" }}
                  className="clean-card p-6 sm:p-8 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <FaBriefcase className="text-primary text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-xs text-text-secondary font-medium">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-gray-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-50 border border-gray-200 text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
