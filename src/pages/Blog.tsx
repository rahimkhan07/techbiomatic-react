import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import CTASection from '../components/home/CTASection'

const categories = ['All', 'AI & ML', 'Cloud', 'Cybersecurity', 'Digital Transformation', 'Engineering']

const posts = [
  { title: 'The Future of AI in UAE Enterprise: 2025 Outlook', category: 'AI & ML', date: 'May 2, 2025', readTime: '8 min read', excerpt: 'As AI adoption accelerates across the UAE, enterprises are discovering new ways to leverage machine learning for competitive advantage. We explore the key trends shaping AI deployment in 2025.', featured: true, color: '#C9A84C' },
  { title: 'Cloud Migration Best Practices for Middle East Enterprises', category: 'Cloud', date: 'Apr 28, 2025', readTime: '6 min read', excerpt: 'Migrating to the cloud in the Middle East comes with unique considerations around data sovereignty, compliance, and connectivity. Here\'s our proven framework.', featured: false, color: '#00D4FF' },
  { title: 'Cybersecurity in the Age of AI: New Threats, New Defenses', category: 'Cybersecurity', date: 'Apr 20, 2025', readTime: '7 min read', excerpt: 'AI is transforming both the threat landscape and defensive capabilities. We examine how organizations can leverage AI-powered security while defending against AI-enabled attacks.', featured: false, color: '#00F5D4' },
  { title: "Dubai's Smart City Vision: Technology at the Core", category: 'Digital Transformation', date: 'Apr 15, 2025', readTime: '5 min read', excerpt: "Dubai's ambitious smart city initiatives are reshaping urban life. We explore the technology infrastructure powering this transformation and what it means for businesses.", featured: false, color: '#C9A84C' },
  { title: 'Building Resilient IoT Infrastructure for Industrial Applications', category: 'Engineering', date: 'Apr 8, 2025', readTime: '9 min read', excerpt: 'Industrial IoT deployments require a different approach to reliability and security. We share lessons learned from deploying IoT systems in oil & gas and manufacturing environments.', featured: false, color: '#00D4FF' },
  { title: 'Data Analytics Maturity: Where Does Your Organization Stand?', category: 'Digital Transformation', date: 'Apr 1, 2025', readTime: '6 min read', excerpt: 'Most organizations are sitting on a goldmine of untapped data. We present a practical framework for assessing and advancing your data analytics maturity.', featured: false, color: '#00F5D4' },
  { title: 'Generative AI for Enterprise: Practical Applications in 2025', category: 'AI & ML', date: 'Mar 25, 2025', readTime: '8 min read', excerpt: 'Beyond the hype, generative AI is delivering real business value. We explore practical enterprise use cases that are generating measurable ROI today.', featured: false, color: '#C9A84C' },
  { title: 'Zero Trust Security Architecture for UAE Organizations', category: 'Cybersecurity', date: 'Mar 18, 2025', readTime: '7 min read', excerpt: 'Zero Trust is no longer optional for organizations handling sensitive data. We provide a practical roadmap for implementing Zero Trust in the UAE regulatory context.', featured: false, color: '#00D4FF' },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative page-hero bg-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[120px]" />
        <div className="relative container-pad text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag mb-6 inline-flex">Blog & Insights</span>
            <h1 className="font-black text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
              Technology <span className="gradient-text-gold">Insights</span> & Trends
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Expert perspectives on AI, cloud, cybersecurity, and digital transformation from the Techbiomatic team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative section-padding bg-[#F9FAFB]">
        <div className="relative container-pad">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="input-field pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#DC2626] text-white'
                      : 'bg-white text-gray-600 hover:text-[#DC2626] border border-gray-200 hover:border-[#DC2626]'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {featured && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 card-hover cursor-pointer group relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 h-48 rounded-xl flex items-center justify-center text-2xl font-black shrink-0 bg-[#FFEBEB] text-[#DC2626] border border-red-100">
                  FEATURED
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFEBEB] text-[#DC2626]">
                      {featured.category}
                    </span>
                    <span className="text-gray-400 text-xs">Featured</span>
                  </div>
                  <h2 className="text-gray-900 font-black text-2xl mb-3 group-hover:text-[#DC2626] transition-colors">{featured.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -80px 0px' }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden card-hover cursor-pointer">
                <div className="h-40 flex items-center justify-center text-lg font-black bg-[#FFEBEB] text-[#DC2626]">
                  {post.category}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFEBEB] text-[#DC2626]">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-[#DC2626] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    </div>
                    <ArrowRight size={14} className="text-[#DC2626] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">No articles found matching your search.</div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
