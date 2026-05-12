import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'B.E. Computer Engineering',
    institution: 'G.H. Raisoni College of Engineering and Management, Pune',
    score: 'CGPA: 8.07',
    icon: '🎓',
    gradient: 'from-primary to-gradient-mid',
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'MSBTE',
    score: '82%',
    icon: '📚',
    gradient: 'from-gradient-mid to-accent',
  },
]

const Education = () => {
  return (
    <section id="education" className="section-padding bg-surface-light border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic background and educational journey."
        />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="clean-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-xl text-primary">
                  {edu.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-text-secondary text-sm sm:text-base mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-2 sm:mt-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-200 text-text-primary font-semibold text-sm">
                        <FaGraduationCap className="text-primary" />
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
