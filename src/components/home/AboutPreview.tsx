import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Globe, Users, Zap } from 'lucide-react'
import AnimatedCounter from '../AnimatedCounter'
import SectionHeader from '../SectionHeader'

const stats = [
  { end: 200, suffix: '+', label: 'Projects Completed' },
  { end: 50, suffix: '+', label: 'Clients Served' },
  { end: 12, suffix: '+', label: 'Industries Covered' },
  { end: 5, suffix: '+', label: 'Years of Excellence' },
]

const highlights = [
  { icon: Award, title: 'ISO Certified', desc: 'International quality standards' },
  { icon: Globe, title: 'UAE Based', desc: 'Meydan, Dubai headquarters' },
  { icon: Users, title: 'Expert Team', desc: '50+ certified professionals' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile project execution' },
]

const VP = { once: true, margin: '0px 0px -80px 0px' }

export default function AboutPreview() {
  return (
    <section className="relative section-padding bg-white">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <SectionHeader
              tag="About Techbiomatic"
              title="Pioneering Technology & Engineering in the "
              highlight="Middle East"
              centered={false}
            />
            <p className="text-gray-500 leading-relaxed mb-5 text-sm sm:text-base">
              Techbiomatic Middle East L.L.C-FZ is a premier technology and engineering company headquartered at Meydan Grandstand, Dubai. We deliver intelligent, scalable, and future-ready solutions that empower enterprises across the UAE and the broader Middle East region.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
              Our mission is to bridge the gap between cutting-edge technology and real-world business challenges, delivering measurable outcomes through innovation, expertise, and unwavering commitment to excellence.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP} transition={{ delay: 0.08 * i }}
                  className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FFEBEB] flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-[#DC2626]" />
                  </div>
                  <div>
                    <div className="text-gray-900 text-xs sm:text-sm font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-[11px] sm:text-xs">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Discover Our Story <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP} transition={{ duration: 0.55 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm"
            >
              <div className="grid grid-cols-2 gap-5 sm:gap-8">
                {stats.map((stat) => (
                  <AnimatedCounter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: 0.15 }}
                className="bg-[#FFEBEB] border border-red-100 rounded-xl p-4 sm:p-5">
                <div className="text-[#DC2626] font-bold text-xs mb-2 tracking-wider uppercase">Mission</div>
                <p className="text-gray-600 text-xs leading-relaxed">To deliver transformative technology solutions that drive sustainable growth and competitive advantage for our clients.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: 0.25 }}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                <div className="text-[#DC2626] font-bold text-xs mb-2 tracking-wider uppercase">Vision</div>
                <p className="text-gray-600 text-xs leading-relaxed">To be the most trusted technology partner in the Middle East, shaping the digital future of the region.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
