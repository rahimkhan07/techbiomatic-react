import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building, Heart, Droplets, Landmark, Factory, Truck, Home, Building2 } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const industries = [
  { icon: Building, title: 'Construction', desc: 'Smart construction management and BIM solutions' },
  { icon: Heart, title: 'Healthcare', desc: 'Digital health platforms and medical IT systems' },
  { icon: Droplets, title: 'Oil & Gas', desc: 'Industrial automation and asset management' },
  { icon: Landmark, title: 'Government', desc: 'E-government and smart city platforms' },
  { icon: Factory, title: 'Manufacturing', desc: 'Industry 4.0 and smart factory solutions' },
  { icon: Truck, title: 'Logistics', desc: 'Supply chain optimization and fleet management' },
  { icon: Home, title: 'Real Estate', desc: 'PropTech and property management platforms' },
  { icon: Building2, title: 'Smart Cities', desc: 'Integrated urban technology infrastructure' },
]

const VP = { once: true, margin: '0px 0px -80px 0px' }

export default function IndustriesSection() {
  return (
    <section className="relative section-padding bg-white">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Industries We Serve"
          title="Transforming Every "
          highlight="Industry"
          description="Our expertise spans across diverse sectors, delivering specialized technology solutions that address unique industry challenges."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.38, delay: i * 0.06 }}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer card-hover"
              style={{ padding: 'clamp(14px, 3vw, 24px)' }}
            >
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-center mb-3">
                <div className="rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-[#FFEBEB]"
                  style={{
                    width: 'clamp(44px, 10vw, 56px)',
                    height: 'clamp(44px, 10vw, 56px)',
                  }}>
                  <industry.icon className="text-[#DC2626]" style={{ width: 'clamp(18px, 4vw, 24px)', height: 'clamp(18px, 4vw, 24px)' }} />
                </div>
              </div>

              <h3 className="text-gray-900 font-bold text-center mb-1" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>
                {industry.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed hidden sm:block" style={{ fontSize: '11px' }}>
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP}
          transition={{ delay: 0.3 }} className="text-center mt-8 sm:mt-10">
          <Link to="/industries" className="btn-outline inline-flex items-center gap-2">
            Explore All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
