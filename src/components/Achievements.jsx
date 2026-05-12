import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaTrophy, FaCrown, FaUsers, FaCalendarCheck } from 'react-icons/fa'

const achievements = [
  {
    icon: FaTrophy,
    title: 'Winner, MIT Code.C Coding Competition',
    description: 'Demonstrated competitive programming skills and problem-solving excellence.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: FaCrown,
    title: 'President (Diploma Section)',
    description: 'Led the diploma section as President, managing teams and initiatives.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaUsers,
    title: 'Member, College Coding Club',
    description: 'Active member contributing to collaborative coding projects and events.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FaCalendarCheck,
    title: 'Organizer of Technical & Non-Technical Events',
    description: 'Successfully organized multiple college-level events and competitions.',
    color: 'from-emerald-500 to-green-600',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-surface border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Recognition and leadership milestones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="clean-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold text-base sm:text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
