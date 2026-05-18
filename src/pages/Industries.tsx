import { motion } from 'framer-motion'
import { Building, Heart, Droplets, Landmark, Factory, Truck, Home, Building2 } from 'lucide-react'
import CTASection from '../components/home/CTASection'

const industries = [
  { icon: Building, title: 'Construction', color: '#C9A84C', challenges: ['Project cost overruns', 'Safety compliance', 'Resource management', 'Document control'], solutions: ['BIM & digital twin platforms', 'IoT safety monitoring', 'Project management systems', 'Document management'], benefits: ['30% cost reduction', 'Zero safety incidents', 'Real-time visibility', 'Faster approvals'] },
  { icon: Heart, title: 'Healthcare', color: '#00D4FF', challenges: ['Patient data management', 'Clinical workflow efficiency', 'Regulatory compliance', 'Diagnostic accuracy'], solutions: ['Electronic health records', 'AI diagnostics platform', 'HIPAA-compliant systems', 'Medical imaging AI'], benefits: ['40% faster diagnosis', '100% compliance', 'Improved outcomes', 'Reduced admin burden'] },
  { icon: Droplets, title: 'Oil & Gas', color: '#00F5D4', challenges: ['Asset reliability', 'Safety & compliance', 'Operational efficiency', 'Environmental monitoring'], solutions: ['SCADA & control systems', 'Predictive maintenance', 'HSE management platform', 'Environmental sensors'], benefits: ['25% uptime improvement', 'Zero incidents', 'Cost optimization', 'Regulatory compliance'] },
  { icon: Landmark, title: 'Government', color: '#C9A84C', challenges: ['Citizen service delivery', 'Inter-agency integration', 'Data security', 'Process efficiency'], solutions: ['E-government platforms', 'Integrated data systems', 'Cybersecurity frameworks', 'Process automation'], benefits: ['80% faster services', 'Seamless integration', 'Enhanced security', 'Cost savings'] },
  { icon: Factory, title: 'Manufacturing', color: '#00D4FF', challenges: ['Production efficiency', 'Quality control', 'Supply chain visibility', 'Equipment downtime'], solutions: ['Industry 4.0 platforms', 'AI quality inspection', 'Supply chain analytics', 'Predictive maintenance'], benefits: ['35% efficiency gain', '99.9% quality rate', 'Full visibility', 'Minimal downtime'] },
  { icon: Truck, title: 'Logistics', color: '#00F5D4', challenges: ['Route optimization', 'Fleet management', 'Warehouse efficiency', 'Last-mile delivery'], solutions: ['AI route optimizer', 'Fleet tracking system', 'WMS platform', 'Delivery management'], benefits: ['35% cost reduction', 'Real-time tracking', 'Faster fulfillment', 'Customer satisfaction'] },
  { icon: Home, title: 'Real Estate', color: '#C9A84C', challenges: ['Property management', 'Tenant experience', 'Maintenance tracking', 'Financial reporting'], solutions: ['PropTech platform', 'Smart building systems', 'Maintenance management', 'Financial analytics'], benefits: ['Automated management', 'Happy tenants', 'Proactive maintenance', 'Accurate reporting'] },
  { icon: Building2, title: 'Smart Cities', color: '#00D4FF', challenges: ['Infrastructure management', 'Citizen services', 'Energy efficiency', 'Traffic management'], solutions: ['City command center', 'Digital citizen portal', 'Smart energy grid', 'Intelligent traffic'], benefits: ['Unified operations', 'Better services', '30% energy savings', 'Reduced congestion'] },
]

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Industries</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              Specialized Solutions for{' '}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              We understand that every industry has unique challenges and requirements. Our specialized teams deliver tailored technology solutions that address the specific needs of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <motion.div key={industry.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 card-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#FFEBEB]">
                    <industry.icon size={26} className="text-[#DC2626]" />
                  </div>
                  <h2 className="text-gray-900 font-black text-2xl">{industry.title}</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Challenges</div>
                    <ul className="space-y-2">
                      {industry.challenges.map((c) => (
                        <li key={c} className="text-gray-500 text-xs flex items-start gap-1.5">
                          <span className="text-red-400 mt-0.5">×</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Solutions</div>
                    <ul className="space-y-2">
                      {industry.solutions.map((s) => (
                        <li key={s} className="text-gray-500 text-xs flex items-start gap-1.5">
                          <span className="text-[#DC2626] mt-0.5">→</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Benefits</div>
                    <ul className="space-y-2">
                      {industry.benefits.map((b) => (
                        <li key={b} className="text-[#DC2626] text-xs flex items-start gap-1.5">
                          <span className="mt-0.5">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
