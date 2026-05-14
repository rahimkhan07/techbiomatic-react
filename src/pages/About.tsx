import { motion } from 'framer-motion'
import { Target, Eye, Compass } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import AnimatedCounter from '../components/AnimatedCounter'
import CTASection from '../components/home/CTASection'

const missionItems = [
  { icon: Target, title: 'Our Mission', description: 'To deliver transformative technology and engineering solutions that drive sustainable growth, operational excellence, and competitive advantage for our clients across the UAE and Middle East. We are committed to bridging the gap between cutting-edge innovation and real-world business challenges.' },
  { icon: Eye, title: 'Our Vision', description: 'To be the most trusted and innovative technology partner in the Middle East — shaping the digital future of the region through intelligent solutions, deep expertise, and an unwavering commitment to client success and societal progress.' },
  { icon: Compass, title: 'Our Purpose', description: "We exist to empower organizations with the technology they need to thrive in an increasingly digital world. Every solution we build is designed to create lasting value, foster innovation, and contribute to the UAE's vision of becoming a global technology hub." },
]

const values = [
  { title: 'Innovation', desc: 'We continuously push boundaries and embrace emerging technologies to deliver forward-thinking solutions.', emoji: '🚀' },
  { title: 'Integrity', desc: 'We operate with complete transparency, honesty, and ethical standards in every client engagement.', emoji: '🛡️' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality, precision, and professional delivery.', emoji: '⭐' },
  { title: 'Collaboration', desc: 'We work as true partners with our clients, fostering open communication and shared success.', emoji: '🤝' },
  { title: 'Agility', desc: 'We adapt quickly to changing requirements and market dynamics to deliver timely, relevant solutions.', emoji: '⚡' },
  { title: 'Impact', desc: 'Every solution we build is designed to create measurable, lasting positive impact for our clients.', emoji: '🎯' },
]

const milestones = [
  { year: '2019', title: 'Company Founded', desc: 'Techbiomatic Middle East established in Dubai Free Zone with a vision to transform enterprise technology.' },
  { year: '2020', title: 'First Major Contract', desc: 'Secured first government enterprise contract, delivering a comprehensive IT infrastructure overhaul.' },
  { year: '2021', title: 'AI Division Launch', desc: 'Launched dedicated AI & Machine Learning division, delivering first AI automation projects.' },
  { year: '2022', title: 'Regional Expansion', desc: 'Expanded operations across UAE, serving clients in Abu Dhabi, Sharjah, and beyond.' },
  { year: '2023', title: 'Cloud Partnership', desc: 'Achieved AWS Advanced Partner and Microsoft Gold Partner status, strengthening cloud capabilities.' },
  { year: '2024', title: 'Smart Cities Focus', desc: 'Launched Smart Cities practice, winning major IoT infrastructure contracts across the UAE.' },
]

const team = [
  { name: 'Ahmad Al Rashid', role: 'Chief Executive Officer', dept: 'Leadership', initials: 'AR' },
  { name: 'Sarah Mitchell', role: 'Chief Technology Officer', dept: 'Technology', initials: 'SM' },
  { name: 'Mohammed Al Farsi', role: 'VP Engineering', dept: 'Engineering', initials: 'MF' },
  { name: 'Priya Sharma', role: 'Head of AI & Data', dept: 'AI Division', initials: 'PS' },
  { name: 'James Wilson', role: 'Head of Cloud Services', dept: 'Cloud', initials: 'JW' },
  { name: 'Fatima Al Zaabi', role: 'Head of Cybersecurity', dept: 'Security', initials: 'FZ' },
  { name: 'Raj Patel', role: 'Head of Enterprise Solutions', dept: 'Enterprise', initials: 'RP' },
  { name: 'Layla Hassan', role: 'Head of Client Success', dept: 'Operations', initials: 'LH' },
]

const stats = [
  { end: 200, suffix: '+', label: 'Projects Completed' },
  { end: 50, suffix: '+', label: 'Clients Served' },
  { end: 12, suffix: '+', label: 'Industries Covered' },
  { end: 5, suffix: '+', label: 'Years of Excellence' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-4xl mx-auto">
            <span className="tag mb-6 inline-flex">About Us</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              Pioneering Technology &{' '}
              <span className="gradient-text-gold">Engineering Excellence</span>
              {' '}in the UAE
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Techbiomatic Middle East L.L.C-FZ is a premier technology and engineering company headquartered at Meydan Grandstand, Dubai. We are dedicated to delivering intelligent, scalable, and future-ready solutions that empower enterprises across the UAE and the broader Middle East region.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ label: 'Headquarters', value: 'Meydan Grandstand, Dubai' }, { label: 'Established', value: 'Dubai, UAE' }, { label: 'License Type', value: 'L.L.C-FZ (Free Zone)' }].map((item, i) => (
              <div key={item.label} className={`text-center ${i < 2 ? 'md:border-r border-gray-100' : ''}`}>
                <div className="text-[#DC2626] text-xs font-semibold tracking-widest uppercase mb-2">{item.label}</div>
                <div className="text-gray-900 font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#FFEBEB]">
                  <item.icon size={26} className="text-[#DC2626]" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative section-padding-sm bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto container-pad">
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <SectionHeader tag="Our Values" title="The Principles That " highlight="Guide Us"
            description="Our core values define who we are and how we work. They are the foundation of every decision, every solution, and every client relationship." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white border border-gray-200 rounded-xl p-6 card-hover text-center">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-[#DC2626] transition-colors">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative section-padding bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto container-pad">
          <SectionHeader tag="Our Journey" title="A Timeline of " highlight="Growth"
            description="From a startup vision to a leading technology company — our journey of innovation and impact." />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DC2626]/30 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <motion.div key={milestone.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover shadow-sm">
                      <div className="text-[#DC2626] font-black text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-gray-900 font-bold text-base mb-2">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white shrink-0 relative z-10 shadow-sm">
                    <div className="absolute inset-0 rounded-full bg-[#DC2626] animate-ping opacity-30" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <SectionHeader tag="Leadership Team" title="The Experts Behind " highlight="Our Success"
            description="Our leadership team brings decades of combined experience in technology, engineering, and business transformation." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white border border-gray-200 rounded-xl p-6 text-center card-hover">
                <div className="w-16 h-16 rounded-2xl bg-[#FFEBEB] flex items-center justify-center mx-auto mb-4 text-[#DC2626] font-black text-lg group-hover:scale-110 transition-transform duration-300 border border-red-100">
                  {member.initials}
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">{member.name}</h3>
                <div className="text-[#DC2626] text-xs font-medium mb-1">{member.role}</div>
                <div className="text-gray-400 text-xs">{member.dept}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
