import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const categories = ['All', 'AI & Automation', 'Cloud', 'Infrastructure', 'Enterprise']

const projects = [
  { title: 'Smart City Command Center', category: 'Infrastructure', description: 'Integrated IoT platform managing city-wide infrastructure for a major UAE municipality.', tags: ['IoT', 'AI', 'Dashboard'] },
  { title: 'Healthcare AI Diagnostics', category: 'AI & Automation', description: 'Machine learning platform for medical image analysis deployed across 5 hospitals.', tags: ['ML', 'Healthcare', 'Python'] },
  { title: 'Enterprise Cloud Migration', category: 'Cloud', description: 'Full-scale migration of 200+ applications to AWS for a leading financial institution.', tags: ['AWS', 'DevOps', 'Security'] },
  { title: 'Oil & Gas SCADA System', category: 'Infrastructure', description: 'Real-time monitoring and control system for offshore oil platform operations.', tags: ['SCADA', 'IoT', 'Safety'] },
  { title: 'Government ERP Platform', category: 'Enterprise', description: 'Comprehensive ERP solution streamlining operations for a federal government entity.', tags: ['ERP', 'Integration', 'Analytics'] },
  { title: 'Logistics AI Optimizer', category: 'AI & Automation', description: 'AI-powered route optimization reducing delivery costs by 35% for a logistics giant.', tags: ['AI', 'Optimization', 'API'] },
]

const VP = { once: true, margin: '0px 0px -80px 0px' }

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="relative section-padding bg-[#F9FAFB]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Our Work" title="Featured " highlight="Projects"
          description="A selection of our most impactful technology and engineering projects delivered across the UAE and Middle East." />

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#DC2626] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#DC2626] hover:text-[#DC2626]'
              }`}
              style={{ padding: 'clamp(6px, 1.5vw, 8px) clamp(14px, 3vw, 20px)', fontSize: 'clamp(11px, 2.5vw, 13px)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div key={project.title} layout
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden card-hover">

                <div className="relative overflow-hidden flex items-center justify-center bg-[#FFEBEB]"
                  style={{ height: 'clamp(140px, 25vw, 192px)' }}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-white border border-red-100 shadow-sm">
                    <span className="font-black text-[#DC2626]" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#DC2626]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <ExternalLink size={15} /> View Project
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#DC2626] border border-red-100">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-gray-900 font-bold text-sm mb-1.5">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[#FFEBEB] text-[#DC2626] border border-red-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP}
          className="text-center mt-10">
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
