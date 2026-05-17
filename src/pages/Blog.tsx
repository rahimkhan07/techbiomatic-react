import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

const categories = ['All', 'Laboratory', 'Biomedical', 'Scientific', 'Research', 'Healthcare']

const posts = [
  {
    title: 'Advances in Hematology Analyzers: What Labs Need to Know in 2025',
    category: 'Biomedical',
    date: 'May 2, 2025',
    readTime: '8 min read',
    excerpt: 'Modern hematology analyzers now offer 5-part differential CBC with real-time scattergrams and histograms. We explore the latest advancements helping clinical labs achieve faster, more accurate blood analysis.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop',
  },
  {
    title: 'Choosing the Right Micropipette: A Complete Buyer\'s Guide',
    category: 'Laboratory',
    date: 'Apr 28, 2025',
    readTime: '6 min read',
    excerpt: 'From single-channel to multichannel, mechanical to electronic — selecting the right micropipette is critical for reproducible results. Here\'s everything you need to consider.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop',
  },
  {
    title: 'Best Practices for Laboratory Equipment Maintenance & Calibration',
    category: 'Laboratory',
    date: 'Apr 20, 2025',
    readTime: '7 min read',
    excerpt: 'Proper maintenance and regular calibration of laboratory instruments are essential for data integrity and regulatory compliance. We outline a practical maintenance schedule for common lab equipment.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80&fit=crop',
  },
  {
    title: 'The Role of Scientific Software in Modern Research Workflows',
    category: 'Scientific',
    date: 'Apr 15, 2025',
    readTime: '5 min read',
    excerpt: 'Scientific software is transforming how researchers collect, analyze, and visualize data. We explore the top platforms driving efficiency in biotechnology, chemistry, and environmental science labs.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop',
  },
  {
    title: 'Understanding ISO Standards for Laboratory Equipment Suppliers',
    category: 'Research',
    date: 'Apr 8, 2025',
    readTime: '9 min read',
    excerpt: 'ISO 9001 and ISO 45001 certification ensures quality management and occupational health standards. Learn what these certifications mean for your laboratory procurement decisions.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80&fit=crop',
  },
  {
    title: 'Biomedical Diagnostics: Trends Shaping Healthcare Laboratories',
    category: 'Healthcare',
    date: 'Apr 1, 2025',
    readTime: '6 min read',
    excerpt: 'Point-of-care diagnostics, AI-assisted imaging, and automated analyzers are revolutionizing clinical laboratories. We examine the key trends driving the next generation of healthcare diagnostics.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop',
  },
  {
    title: 'How to Set Up a High-Performance Research Laboratory',
    category: 'Research',
    date: 'Mar 25, 2025',
    readTime: '8 min read',
    excerpt: 'Setting up a research lab requires careful planning of equipment, consumables, safety protocols, and software. Our comprehensive guide walks you through every step of the process.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&fit=crop',
  },
  {
    title: 'Laboratory Consumables: Quality vs. Cost — Finding the Balance',
    category: 'Laboratory',
    date: 'Mar 18, 2025',
    readTime: '7 min read',
    excerpt: 'Cutting costs on consumables can compromise experimental results. We help you identify where quality matters most and where cost-effective alternatives are perfectly acceptable.',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80&fit=crop',
  },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }
const W = { maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '160px 24px 72px', textAlign: 'center' }}>
        <div style={W}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)',
              color: '#DC2626', marginBottom: '20px',
            }}>
              Blog & Insights
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: '16px' }}>
              Laboratory <span style={{ color: '#DC2626' }}>Insights</span> & Trends
            </h1>
            <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 20px' }} />
            <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto' }}>
              Expert perspectives on laboratory equipment, biomedical devices, scientific research,
              and healthcare innovations from the TECHBIOMATIC team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SEARCH + FILTERS ─────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '40px 24px 0' }}>
        <div style={W}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>

            {/* Search bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <Search size={16} color="#9CA3AF" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '12px 14px 12px 40px',
                  border: '1.5px solid #E5E7EB', borderRadius: '8px',
                  fontSize: '14px', color: '#111827', background: '#fff',
                  outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#DC2626')}
                onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
              />
            </div>

            {/* Category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '7px 18px', borderRadius: '100px', fontSize: '13px',
                    fontWeight: 500, cursor: 'pointer',
                    background: activeCategory === cat ? '#DC2626' : '#fff',
                    color: activeCategory === cat ? '#fff' : '#6B7280',
                    border: activeCategory === cat ? 'none' : '1px solid #E5E7EB',
                    transition: 'all 0.2s',
                  } as React.CSSProperties}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG CONTENT ─────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '40px 24px 80px' }}>
        <div style={W}>

          {/* Featured post */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VP} transition={{ duration: 0.55 }}
              style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px',
                overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                marginBottom: '40px', cursor: 'pointer',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', minHeight: '260px', overflow: 'hidden' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '260px' }}
                />
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: '#DC2626', color: '#fff',
                  padding: '4px 12px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em',
                }}>
                  FEATURED
                </div>
              </div>

              {/* Text */}
              <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: '100px',
                  fontSize: '11px', fontWeight: 600, background: '#FFEBEB',
                  color: '#DC2626', marginBottom: '14px', width: 'fit-content',
                }}>
                  {featured.category}
                </span>
                <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#111827', lineHeight: 1.3, marginBottom: '12px' }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.75, marginBottom: '20px' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#9CA3AF', fontSize: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Posts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {rest.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s',
                  display: 'flex', flexDirection: 'column',
                }}
                whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.1)', y: -4 }}
              >
                {/* Post image */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(220,38,38,0.9)', color: '#fff',
                    padding: '3px 10px', borderRadius: '100px',
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em',
                  }}>
                    {post.category}
                  </div>
                </div>

                {/* Post content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '14px', fontWeight: 700, color: '#111827',
                    lineHeight: 1.5, marginBottom: '10px',
                    display: '-webkit-box', WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    color: '#6B7280', fontSize: '13px', lineHeight: 1.65,
                    marginBottom: '16px', flex: 1,
                    display: '-webkit-box', WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9CA3AF', fontSize: '11px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={10} /> {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight size={15} color="#DC2626" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: '#9CA3AF', fontSize: '15px' }}>
              No articles found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section style={{ background: '#DC2626', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
            Need Laboratory Equipment?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.75, marginBottom: '28px' }}>
            Explore our full range of laboratory, scientific, and biomedical equipment.
            Contact us for a consultation or product inquiry.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '13px 32px', background: '#fff', color: '#DC2626',
            borderRadius: '8px', fontSize: '14px', fontWeight: 700,
            textDecoration: 'none',
          }}>
            Contact Us <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  )
}
