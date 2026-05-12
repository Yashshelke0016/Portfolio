import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'VitaKita',
    subtitle: 'AI Mental Wellness Platform',
    description:
      'Built an AI-powered full-stack platform for student mental health assessment and early depression detection. Includes PHQ-9 based analysis, multilingual AI chatbot support, severity classification, doctor-patient workflows, and real-time mental health assistance.',
    techStack: ['React.js', 'Firebase', 'Python', 'Gemini API', 'REST APIs'],
    github: '#',
    demo: '#',
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
    accentColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
  },
  {
    title: 'CiviSync',
    subtitle: 'Smart Civic Issue Reporting Platform',
    description:
      'Developed a smart civic issue reporting platform that enables citizens to report public issues while helping authorities proactively analyze root causes to prevent recurring problems. Includes dashboards, analytics, API integrations, and scalable workflows.',
    techStack: ['React.js', 'Firebase', 'JavaScript', 'REST APIs'],
    github: '#',
    demo: 'https://civisync-y.vercel.app/',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-emerald-500/20',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
  },
  {
    title: 'Furni',
    subtitle: 'Furniture E-Commerce Website',
    description:
      'Developed a responsive multi-page furniture e-commerce website with cart functionality and modern UI components. Features product listings, filtering, cart management, and a clean responsive design.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Yashshelke0016/furni',
    demo: 'https://yashshelke0016.github.io/furni/shop.html#',
    gradient: 'from-amber-500/20 via-orange-500/10 to-red-500/20',
    accentColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-surface-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of technical projects highlighting my problem-solving capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="clean-card flex flex-col overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-white border border-gray-300 text-text-primary hover:bg-gray-50 transition-colors"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
