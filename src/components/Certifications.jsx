import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    icon: '🌐',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'Foundational C#',
    issuer: 'freeCodeCamp',
    icon: '💻',
    color: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-500/20',
  },
  {
    title: 'AI & Emerging Technologies',
    issuer: 'Basics',
    icon: '🤖',
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/20',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-surface-light border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and completed coursework."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="clean-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center mx-auto mb-4 text-2xl text-primary">
                {cert.icon}
              </div>
              <h3 className="text-text-primary font-bold text-sm mb-2">
                {cert.title}
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-text-secondary text-xs font-medium uppercase tracking-wider">
                <FaCertificate className="text-primary" />
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
