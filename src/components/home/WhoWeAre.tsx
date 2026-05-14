import { motion } from 'framer-motion'
import { Award, Globe, Users, Zap } from 'lucide-react'
import AnimatedCounter from '../AnimatedCounter'

const stats = [
  { end: 200, suffix: '+', label: 'Projects Completed' },
  { end: 50,  suffix: '+', label: 'Clients Served' },
  { end: 12,  suffix: '+', label: 'Industries Covered' },
  { end: 5,   suffix: '+', label: 'Years of Excellence' },
]

const highlights = [
  { icon: Award, title: 'ISO Certified',  desc: 'International quality standards' },
  { icon: Globe, title: 'UAE Based',      desc: 'Meydan, Dubai headquarters' },
  { icon: Users, title: 'Expert Team',    desc: '50+ certified professionals' },
  { icon: Zap,   title: 'Fast Delivery',  desc: 'Agile project execution' },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Who Are We</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
            About <span style={{ color: '#DC2626' }}>Techbiomatic</span>
          </h2>
          <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 20px' }} />
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Ibn Rushd Medical &amp; Scientific Equipment Co. is an ISO 9001 &amp; ISO 45001 certified
            distribution and marketing company. Founded in 1999, we provide innovative technology
            products and services across Healthcare, Analytical, Scientific, Laboratory, and
            Engineering sectors.
          </p>
        </motion.div>

        {/* ── Two columns ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '56px', alignItems: 'start' }}>

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
          >
            <p style={{ color: '#4B5563', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '20px' }}>
              Techbiomatic Middle East L.L.C-FZ is a premier technology and engineering company
              headquartered at Meydan Grandstand, Dubai. We deliver intelligent, scalable, and
              future-ready solutions that empower enterprises across the UAE and the broader
              Middle East region.
            </p>
            <p style={{ color: '#4B5563', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '32px' }}>
              Our mission is to bridge the gap between cutting-edge technology and real-world
              business challenges, delivering measurable outcomes through innovation, expertise,
              and an unwavering commitment to excellence.
            </p>

            {/* Mission / Vision */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: '#FFEBEB', border: '1px solid #FECACA', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Our Mission</div>
                <p style={{ color: '#4B5563', fontSize: '13px', lineHeight: 1.6 }}>
                  To deliver transformative technology solutions that drive sustainable growth for our clients.
                </p>
              </div>
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Our Vision</div>
                <p style={{ color: '#4B5563', fontSize: '13px', lineHeight: 1.6 }}>
                  To be the most trusted technology partner in the Middle East.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: 0.08 * i }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  padding: '24px 16px', textAlign: 'center',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderColor: '#FECACA' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <item.icon size={22} color="#DC2626" />
                </div>
                <div style={{ color: '#111827', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: '#9CA3AF', fontSize: '12px' }}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{
                padding: '32px 16px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid #F3F4F6' : 'none',
              }}>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
