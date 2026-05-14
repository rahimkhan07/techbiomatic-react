import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, title: 'Office Address', lines: ['6th Floor, Meydan Grandstand', 'Meydan Road, Nad Al Sheba', 'Dubai, United Arab Emirates'] },
  { icon: Phone, title: 'Phone', lines: ['+971 52 695 5656'], href: 'tel:+971526955656' },
  { icon: Mail, title: 'Email', lines: ['info@techbiomatic.ae', 'projects@techbiomatic.ae'], href: 'mailto:info@techbiomatic.ae' },
  { icon: Clock, title: 'Business Hours', lines: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM', 'Sunday: Closed'] },
]

const services = ['IT Solutions', 'Engineering Consultancy', 'AI & Automation', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'Smart Infrastructure', 'Enterprise Solutions', 'Other']

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Let's Start a <span className="gradient-text-gold">Conversation</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with technology? Our team of experts is here to help you design and implement the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative section-padding bg-[#F9FAFB] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Contact <span className="gradient-text-gold">Information</span>
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  We're headquartered in the heart of Dubai at Meydan Grandstand. Reach out through any of the channels below and our team will get back to you promptly.
                </p>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, i) => (
                    <motion.div key={info.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#FFEBEB]">
                        <info.icon size={18} className="text-[#DC2626]" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold text-sm mb-1">{info.title}</div>
                        {info.lines.map((line) => (
                          <div key={line} className="text-gray-500 text-sm">
                            {info.href ? <a href={info.href} className="hover:text-[#DC2626] transition-colors">{line}</a> : line}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <a href="https://wa.me/971526955656" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-all mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">Chat on WhatsApp</div>
                    <div className="text-gray-400 text-xs">Typically replies within minutes</div>
                  </div>
                </a>

                <div className="map-container rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.3047!3d25.1512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5b5b5b5b5%3A0x0!2sMeydan+Grandstand%2C+Dubai!5e0!3m2!1sen!2sae!4v1"
                    width="100%" height="250"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Techbiomatic Office - Meydan Grandstand Dubai"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                      <CheckCircle size={64} className="text-[#DC2626] mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-gray-900 font-black text-2xl mb-3">Message Sent!</h3>
                    <p className="text-gray-500 leading-relaxed">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-gray-900 font-black text-2xl mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name *" className="input-field" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        <input type="email" placeholder="Email Address *" className="input-field" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="tel" placeholder="Phone Number" className="input-field" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                        <input type="text" placeholder="Company Name" className="input-field" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                      </div>
                      <select className="input-field" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="" disabled>Select Service of Interest</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <textarea placeholder="Tell us about your project or requirements *" rows={5} className="input-field resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                      <button type="submit" disabled={loading} className="btn-primary w-full justify-center gap-2 disabled:opacity-70">
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                        ) : (
                          <><Send size={16} /> Send Message</>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
