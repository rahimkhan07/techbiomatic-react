import { motion } from 'framer-motion'
import { Lightbulb, MapPin, Zap, Headphones, Users, Brain } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const features = [
  { icon: Lightbulb, title: 'Innovation First', description: 'We stay ahead of technology trends, bringing the latest innovations to solve your business challenges.' },
  { icon: MapPin, title: 'UAE Expertise', description: 'Deep understanding of the UAE market, regulations, and business culture built over years of local experience.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile methodologies and experienced teams ensure rapid project delivery without compromising quality.' },
  { icon: Headphones, title: 'Enterprise Support', description: '24/7 dedicated support with SLA-backed response times and proactive monitoring for critical systems.' },
  { icon: Users, title: 'Experienced Team', description: '50+ certified professionals with expertise across technology, engineering, and business domains.' },
  { icon: Brain, title: 'Smart Solutions', description: 'AI-powered, data-driven solutions that continuously learn and adapt to your evolving business needs.' },
]

const VP = { once: true, margin: '0px 0px -80px 0px' }

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding bg-[#F9FAFB]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Why Techbiomatic"
          title="The Competitive Edge You "
          highlight="Deserve"
          description="We combine technical excellence with deep industry knowledge to deliver solutions that create lasting competitive advantages."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group relative bg-white border border-gray-200 rounded-xl p-5 sm:p-6 card-hover overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-3 right-4 font-black select-none pointer-events-none text-gray-100"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-[#FFEBEB]">
                <feature.icon size={20} className="text-[#DC2626]" />
              </div>

              <h3 className="text-gray-900 font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
