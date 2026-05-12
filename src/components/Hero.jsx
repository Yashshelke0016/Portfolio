import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-surface"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs font-medium text-green-700">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-text-primary"
        >
          Yash Shelke
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl font-medium text-text-secondary mb-6"
        >
          Software Engineer <span className="text-gray-300 mx-2">|</span> Full Stack & AI/LLM Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Motivated Computer Engineering student seeking opportunities in Software Development,
          Full Stack Development, and AI/LLM technologies to apply technical skills, gain hands-on
          industry experience, and contribute to real-world projects.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-text-secondary"
        >
          <a href="mailto:yashshelke0116@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaEnvelope className="text-gray-400" />
            yashshelke0116@gmail.com
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="tel:+917378445471" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaPhone className="text-gray-400" />
            +91-7378445471
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            Pune, Maharashtra, India
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200 cursor-pointer"
          >
            Get In Touch
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1Hhwft6vG6SsK0utKqEqyvO4Z-4mFyeBI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-white text-text-primary font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-center cursor-pointer"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/Yashshelke0016', label: 'GitHub' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yash-shelke-0116-sh/', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:yashshelke0116@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 bg-white border border-gray-200 rounded-md text-text-secondary hover:text-primary hover:border-primary transition-colors duration-200 cursor-pointer"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
