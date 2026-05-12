import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const formRef = useRef()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission (replace with EmailJS or backend integration)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'yashshelke0116@gmail.com',
      href: 'mailto:yashshelke0116@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-7378445471',
      href: 'tel:+917378445471',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: null,
    },
  ]

  const socials = [
    { icon: FaGithub, href: 'https://github.com/Yashshelke0016', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yash-shelke-0116-sh/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:yashshelke0116@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="section-padding bg-surface-light border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="clean-card p-6 sm:p-8 space-y-6 h-full">
              <h3 className="text-xl font-bold text-text-primary">Let's Talk</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I'm always excited to discuss new opportunities, creative projects, or ways to contribute to your team. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
                      <item.icon />
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs uppercase tracking-wider font-semibold">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text-primary text-sm font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-text-secondary text-xs uppercase tracking-wider mb-3 font-semibold">Follow Me</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="clean-card p-6 sm:p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-text-primary text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-text-primary text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-text-primary text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
