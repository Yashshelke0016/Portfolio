import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tight text-text-primary hover:text-primary transition-colors cursor-pointer"
          >
            Yash Shelke.
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/Yashshelke0016', label: 'GitHub' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yash-shelke-0116-sh/', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:yashshelke0116@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-md bg-white border border-gray-200 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm flex items-center gap-1.5 font-medium">
            Yash Shelke
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
