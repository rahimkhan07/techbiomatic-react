import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Cog, Cpu, Cloud, Building2, Shield, Wifi, BarChart3, CheckCircle2, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/home/CTASection'

const services = [
  { id: 'it-solutions', icon: Monitor, title: 'IT Solutions', description: 'Comprehensive IT infrastructure design, implementation, and managed services. We build robust, scalable technology foundations that support your business growth.', benefits: ['Network infrastructure design & deployment', 'Software development & integration', 'IT managed services & support', 'Digital workplace transformation', 'IT strategy & consulting'] },
  { id: 'engineering', icon: Cog, title: 'Engineering Consultancy', description: 'Expert engineering consulting across civil, mechanical, electrical, and systems engineering. We provide technical expertise that bridges the gap between design and execution.', benefits: ['Systems engineering & architecture', 'Technical feasibility studies', 'Project management & oversight', 'Quality assurance & compliance', 'Engineering documentation'] },
  { id: 'ai-automation', icon: Cpu, title: 'AI & Automation', description: 'Intelligent automation solutions powered by machine learning, natural language processing, and computer vision. Transform repetitive processes into intelligent workflows.', benefits: ['Machine learning model development', 'Robotic process automation (RPA)', 'Natural language processing', 'Computer vision solutions', 'Predictive analytics'] },
  { id: 'cloud', icon: Cloud, title: 'Cloud Services', description: 'End-to-end cloud solutions on AWS, Azure, and Google Cloud. From migration strategy to ongoing optimization, we maximize your cloud investment.', benefits: ['Cloud migration & modernization', 'Multi-cloud architecture', 'Cloud security & compliance', 'Cost optimization', 'DevOps & CI/CD pipelines'] },
  { id: 'enterprise', icon: Building2, title: 'Enterprise Solutions', description: 'Comprehensive ERP, CRM, and business process management solutions. We implement and customize enterprise platforms that streamline operations at scale.', benefits: ['ERP implementation & customization', 'CRM & customer experience platforms', 'Business process automation', 'System integration & APIs', 'Enterprise mobility solutions'] },
  { id: 'cybersecurity', icon: Shield, title: 'Cybersecurity', description: 'Advanced threat protection, compliance management, and security operations. We protect your digital assets with enterprise-grade security frameworks.', benefits: ['Security operations center (SOC)', 'Penetration testing & vulnerability assessment', 'Compliance & risk management', 'Identity & access management', 'Incident response & recovery'] },
  { id: 'smart-infrastructure', icon: Wifi, title: 'Smart Infrastructure', description: 'IoT-enabled smart building, city, and industrial infrastructure solutions. We connect physical assets to digital intelligence for operational excellence.', benefits: ['IoT platform development', 'Smart building management', 'Industrial automation (IIoT)', 'SCADA & control systems', 'Predictive maintenance'] },
  { id: 'data-analytics', icon: BarChart3, title: 'Data Analytics', description: 'Business intelligence, data warehousing, and advanced analytics. We transform raw data into actionable insights that drive strategic decision-making.', benefits: ['Data warehouse & lake architecture', 'Business intelligence dashboards', 'Advanced analytics & reporting', 'Data governance & quality', 'Real-time analytics platforms'] },
]

const technologies = [
  { name: 'AWS', category: 'Cloud' }, { name: 'Azure', category: 'Cloud' }, { name: 'Google Cloud', category: 'Cloud' },
  { name: 'React', category: 'Frontend' }, { name: 'Next.js', category: 'Frontend' }, { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI/ML' }, { name: 'TensorFlow', category: 'AI/ML' }, { name: 'PyTorch', category: 'AI/ML' },
  { name: 'Kubernetes', category: 'DevOps' }, { name: 'Docker', category: 'DevOps' }, { name: 'Terraform', category: 'DevOps' },
  { name: 'SAP', category: 'Enterprise' }, { name: 'Salesforce', category: 'Enterprise' }, { name: 'Oracle', category: 'Enterprise' },
  { name: 'PostgreSQL', category: 'Database' }, { name: 'MongoDB', category: 'Database' }, { name: 'Redis', category: 'Database' },
  { name: 'Cisco', category: 'Network' }, { name: 'Palo Alto', category: 'Security' },
]


const faqs = [
  { q: 'What industries does Techbiomatic serve?', a: 'We serve a wide range of industries including construction, healthcare, oil & gas, government, manufacturing, logistics, real estate, and smart cities. Our solutions are tailored to the specific needs and regulations of each sector.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while large enterprise implementations can span 6-18 months. We provide detailed project plans with clear milestones during the discovery phase.' },
  { q: 'Do you offer post-deployment support?', a: 'Yes, we offer comprehensive post-deployment support including 24/7 monitoring, SLA-backed response times, regular maintenance, and continuous optimization. We offer flexible support packages to match your needs.' },
  { q: 'Can you integrate with our existing systems?', a: 'Absolutely. We specialize in system integration and have extensive experience connecting new solutions with legacy systems, third-party platforms, and enterprise applications through APIs and middleware.' },
  { q: 'Are your solutions compliant with UAE regulations?', a: 'Yes, all our solutions are designed with UAE regulatory compliance in mind, including TDRA guidelines, UAE data protection laws, and industry-specific regulations. We also support international standards like ISO 27001 and GDPR.' },
  { q: 'What is your pricing model?', a: 'We offer flexible pricing models including fixed-price projects, time & materials, and managed service retainers. We provide detailed proposals after the discovery phase to ensure complete transparency.' },
]

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We start with a deep-dive discovery session to understand your business, challenges, and goals.' },
  { step: '02', title: 'Strategy', desc: 'Our experts design a tailored technology strategy and solution architecture aligned with your objectives.' },
  { step: '03', title: 'Development', desc: 'Agile development with regular checkpoints, demos, and feedback loops to ensure alignment.' },
  { step: '04', title: 'Deployment', desc: 'Careful, staged deployment with thorough testing, training, and change management support.' },
  { step: '05', title: 'Support', desc: 'Ongoing monitoring, optimization, and support to ensure your solution continues to deliver value.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Our Services</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              End-to-End Technology{' '}
              <span className="gradient-text-gold">Solutions</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              From AI automation to enterprise IT infrastructure, we deliver comprehensive technology and engineering services that transform businesses across the UAE and Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div key={service.id} id={service.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#FFEBEB]">
                    <service.icon size={26} className="text-[#DC2626]" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#DC2626] shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm">Get a Quote</Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#FFEBEB] border border-red-100 rounded-2xl p-10 flex items-center justify-center min-h-[280px] relative overflow-hidden">
                    <div className="w-32 h-32 rounded-3xl flex items-center justify-center bg-white border border-red-100 shadow-sm">
                      <service.icon size={56} className="text-[#DC2626]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative section-padding bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative container-pad">
          <SectionHeader tag="Our Process" title="How We " highlight="Deliver" description="A proven methodology that ensures every project is delivered on time, on budget, and to the highest quality standards." />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ delay: i * 0.1 }}
                className="relative text-center">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#DC2626]/20 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-[#DC2626] flex items-center justify-center mx-auto mb-4 text-white font-black text-lg relative z-10">
                  {step.step}
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <SectionHeader tag="Technology Stack" title="Powered by Industry-Leading " highlight="Technologies"
            description="We work with the world's best technology platforms and frameworks to deliver robust, scalable solutions." />
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2 card-hover cursor-default">
                <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFEBEB] text-[#DC2626]">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative section-padding bg-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto container-pad">
          <SectionHeader tag="FAQ" title="Frequently Asked " highlight="Questions"
            description="Everything you need to know about working with Techbiomatic Middle East." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-gray-900 font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#DC2626] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
