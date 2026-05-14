import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Briefcase, Upload, X } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/home/CTASection'

const benefits = [
  { title: 'Competitive Salary', desc: 'Market-leading compensation packages reviewed annually', icon: '💰' },
  { title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage', icon: '🏥' },
  { title: 'Annual Leave', desc: '30 days annual leave plus UAE public holidays', icon: '🌴' },
  { title: 'Learning Budget', desc: 'AED 10,000 annual budget for certifications and courses', icon: '📚' },
  { title: 'Flexible Hours', desc: 'Flexible start/end times and hybrid work options', icon: '⏰' },
  { title: 'Team Events', desc: 'Regular team outings, celebrations, and company retreats', icon: '🎉' },
  { title: 'Career Growth', desc: 'Clear career paths with mentorship and promotion opportunities', icon: '📈' },
  { title: 'Modern Office', desc: 'Premium workspace at Meydan Grandstand, Dubai', icon: '🏢' },
]

const positions = [
  { title: 'Senior AI/ML Engineer', dept: 'AI Division', type: 'Full-time', location: 'Dubai, UAE', level: 'Senior' },
  { title: 'Cloud Solutions Architect', dept: 'Cloud Services', type: 'Full-time', location: 'Dubai, UAE', level: 'Senior' },
  { title: 'Cybersecurity Analyst', dept: 'Security', type: 'Full-time', location: 'Dubai, UAE', level: 'Mid-level' },
  { title: 'Full Stack Developer', dept: 'Engineering', type: 'Full-time', location: 'Dubai, UAE', level: 'Mid-level' },
  { title: 'IoT Systems Engineer', dept: 'Smart Infrastructure', type: 'Full-time', location: 'Dubai, UAE', level: 'Senior' },
  { title: 'Data Engineer', dept: 'Data Analytics', type: 'Full-time', location: 'Dubai, UAE', level: 'Mid-level' },
  { title: 'Project Manager', dept: 'Operations', type: 'Full-time', location: 'Dubai, UAE', level: 'Senior' },
  { title: 'Business Development Manager', dept: 'Sales', type: 'Full-time', location: 'Dubai, UAE', level: 'Senior' },
]

const cultureValues = [
  { title: 'Continuous Learning', desc: 'We invest in our team\'s growth through training, certifications, and knowledge sharing.', icon: '🎓' },
  { title: 'Diverse & Inclusive', desc: 'Our team represents 20+ nationalities, bringing diverse perspectives to every challenge.', icon: '🌍' },
  { title: 'Innovation Culture', desc: 'We encourage experimentation, creative thinking, and bold ideas at every level.', icon: '💡' },
  { title: 'Work-Life Balance', desc: 'We believe great work comes from well-rested, fulfilled team members.', icon: '⚖️' },
]

export default function Careers() {
  const [applyFor, setApplyFor] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setApplyFor(null) }, 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Careers</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              Build the Future <span className="gradient-text-gold">With Us</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Join a team of passionate technologists and engineers shaping the digital future of the Middle East. We're always looking for exceptional talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <SectionHeader tag="Our Culture" title="A Place Where You " highlight="Thrive"
            description="We've built a culture that empowers people to do their best work, grow professionally, and make a real impact." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center card-hover group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative section-padding bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative container-pad">
          <SectionHeader tag="Benefits & Perks" title="Why Work at " highlight="Techbiomatic"
            description="We invest in our people because they are our greatest asset. Here's what you can expect when you join our team." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover group shadow-sm">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#DC2626] transition-colors">{benefit.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative section-padding bg-[#F9FAFB] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Open Positions" title="Current " highlight="Opportunities"
            description="We're always looking for talented individuals to join our growing team. Explore our current openings below." />
          <div className="space-y-3">
            {positions.map((pos, i) => (
              <motion.div key={pos.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover shadow-sm">
                <div>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {pos.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {pos.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {pos.type}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#FFEBEB] text-[#DC2626]">{pos.level}</span>
                  </div>
                </div>
                <button onClick={() => setApplyFor(pos.title)} className="btn-primary text-sm whitespace-nowrap shrink-0">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {applyFor && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setApplyFor(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setApplyFor(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                <X size={20} />
              </button>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 text-sm">We'll review your application and get back to you within 3-5 business days.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-gray-900 font-black text-xl mb-1">Apply for Position</h2>
                  <p className="text-[#DC2626] text-sm mb-6">{applyFor}</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Full Name *" className="input-field" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <input type="email" placeholder="Email Address *" className="input-field" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    <input type="tel" placeholder="Phone Number" className="input-field" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    <textarea placeholder="Cover Letter / Message" rows={4} className="input-field resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    <label className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#DC2626] transition-colors">
                      <Upload size={18} className="text-[#DC2626]" />
                      <span className="text-gray-500 text-sm">Upload CV / Resume (PDF, DOC)</span>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                    <button type="submit" className="btn-primary w-full justify-center">Submit Application</button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
