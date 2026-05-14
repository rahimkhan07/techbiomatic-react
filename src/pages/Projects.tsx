import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Tag } from 'lucide-react'
import CTASection from '../components/home/CTASection'

const categories = ['All', 'AI & Automation', 'Cloud', 'Infrastructure', 'Enterprise', 'Cybersecurity']

const projects = [
  { title: 'Smart City Command Center', category: 'Infrastructure', client: 'UAE Municipality', year: '2024', description: 'Integrated IoT platform managing city-wide infrastructure including traffic, utilities, and public safety for a major UAE municipality. The platform processes over 1 million data points per hour.', tags: ['IoT', 'AI', 'Dashboard', 'Real-time'], color: '#C9A84C', outcome: '40% improvement in operational efficiency' },
  { title: 'Healthcare AI Diagnostics', category: 'AI & Automation', client: 'Gulf Healthcare Network', year: '2024', description: 'Machine learning platform for medical image analysis and diagnostic support, deployed across 5 major hospitals. Reduces diagnostic time by 60% while improving accuracy.', tags: ['ML', 'Healthcare', 'Python', 'TensorFlow'], color: '#00D4FF', outcome: '60% faster diagnosis, 95% accuracy' },
  { title: 'Enterprise Cloud Migration', category: 'Cloud', client: 'Leading Financial Institution', year: '2023', description: 'Full-scale migration of 200+ applications to AWS for a leading UAE financial institution. Included security hardening, compliance validation, and performance optimization.', tags: ['AWS', 'DevOps', 'Security', 'Migration'], color: '#00F5D4', outcome: '45% infrastructure cost reduction' },
  { title: 'Oil & Gas SCADA System', category: 'Infrastructure', client: 'Offshore Operations Co.', year: '2023', description: 'Real-time monitoring and control system for offshore oil platform operations. Provides 24/7 visibility into critical systems with automated safety responses.', tags: ['SCADA', 'IoT', 'Safety', 'Industrial'], color: '#C9A84C', outcome: 'Zero safety incidents post-deployment' },
  { title: 'Government ERP Platform', category: 'Enterprise', client: 'UAE Federal Entity', year: '2023', description: 'Comprehensive ERP solution streamlining HR, finance, procurement, and operations for a federal government entity with 5,000+ employees.', tags: ['ERP', 'Integration', 'Analytics', 'SAP'], color: '#00D4FF', outcome: '80% reduction in processing time' },
  { title: 'Logistics AI Optimizer', category: 'AI & Automation', client: 'Gulf Logistics Corp', year: '2022', description: 'AI-powered route optimization and demand forecasting platform reducing delivery costs and improving on-time delivery rates across a fleet of 500+ vehicles.', tags: ['AI', 'Optimization', 'API', 'Analytics'], color: '#00F5D4', outcome: '35% reduction in operational costs' },
  { title: 'Banking Cybersecurity SOC', category: 'Cybersecurity', client: 'Regional Bank', year: '2022', description: 'Full Security Operations Center implementation with 24/7 threat monitoring, incident response, and compliance management for a regional bank.', tags: ['SOC', 'SIEM', 'Compliance', 'Security'], color: '#C9A84C', outcome: '100% regulatory compliance achieved' },
  { title: 'Smart Building Platform', category: 'Infrastructure', client: 'Real Estate Developer', year: '2022', description: 'IoT-enabled smart building management system for a 50-floor commercial tower, controlling HVAC, lighting, security, and energy management.', tags: ['IoT', 'BMS', 'Energy', 'Smart'], color: '#00D4FF', outcome: '30% energy consumption reduction' },
  { title: 'Manufacturing MES System', category: 'Enterprise', client: 'Industrial Manufacturer', year: '2021', description: 'Manufacturing Execution System integrating production planning, quality control, and supply chain management for a large industrial manufacturer.', tags: ['MES', 'Industry 4.0', 'Integration', 'QC'], color: '#00F5D4', outcome: '25% production efficiency increase' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Our Projects</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              Delivering <span className="gradient-text-gold">Impactful</span> Solutions
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              A portfolio of transformative technology and engineering projects delivered across the UAE and Middle East. Each project represents our commitment to excellence and measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#DC2626] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-[#DC2626] border border-gray-200 hover:border-[#DC2626]'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div key={project.title} layout
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}>
                  <div className="h-48 relative overflow-hidden flex items-center justify-center bg-[#FFEBEB]">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-[#DC2626] bg-white border border-red-100 shadow-sm">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-[#DC2626]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm"><ExternalLink size={16} /> View Details</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#DC2626] border border-red-100">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-gray-400 text-xs bg-white/80 px-2 py-0.5 rounded-full">
                      <Calendar size={10} /> {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 font-bold text-base mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="text-xs font-semibold px-3 py-1.5 rounded-lg inline-block bg-[#FFEBEB] text-[#DC2626]">
                      ✓ {project.outcome}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 max-w-lg w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
                <X size={20} />
              </button>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 bg-[#FFEBEB] text-[#DC2626] border border-red-100">
                {selectedProject.title.charAt(0)}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFEBEB] text-[#DC2626]">
                  {selectedProject.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1"><Calendar size={10} /> {selectedProject.year}</span>
              </div>
              <h2 className="text-gray-900 font-black text-2xl mb-2">{selectedProject.title}</h2>
              <div className="text-gray-400 text-sm mb-4">Client: {selectedProject.client}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-[#FFEBEB] text-[#DC2626]">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
              <div className="p-4 rounded-xl text-sm font-semibold bg-[#FFEBEB] text-[#DC2626] border border-red-100">
                ✓ Outcome: {selectedProject.outcome}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
