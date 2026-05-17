import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

// Place your product images in /public/products/
// product1.jpg = Pipette (single)
// product2.jpg = Microscope with monitor
// product3.jpg = Pipette set with tips
// product4.jpg = Hematology analyzer
// product5.jpg = Lab equipment setup
const services = [
  {
    id: 'laboratory-equipment',
    image: '/products/product4.jpg',
    fallback: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop',
    title: 'Hematology Analyzer',
    description: 'Our advanced Hematology Analyzer is a fully automated 5-part differential blood cell counter designed for clinical laboratories and hospitals. Featuring a large touchscreen display with real-time graphical analysis, it delivers fast, accurate, and reliable complete blood count (CBC) results to support clinical decision-making.',
    benefits: [
      '5-part differential WBC analysis',
      'Large touchscreen with real-time histograms & scattergrams',
      'High throughput — up to 60 samples/hour',
      'Automatic sample loading & barcode scanning',
      'Compact design with built-in thermal printer',
    ],
  },
  {
    id: 'scientific-equipment',
    image: '/products/product3.jpg',
    fallback: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop',
    title: 'Micropipette Set with Tips & Rack',
    description: 'Our precision Micropipette Set is an essential tool for any laboratory, offering accurate and reproducible liquid handling across a wide volume range. The set includes multiple single-channel micropipettes mounted on a convenient stand, paired with a complete tip box system featuring color-coded racks for easy organization and contamination-free workflow.',
    benefits: [
      'Volume range: 0.1 µL – 1000 µL (multiple sizes)',
      'Ergonomic design for reduced hand fatigue',
      'Autoclavable & chemical-resistant materials',
      'Color-coded tip racks for easy identification',
      'High accuracy & reproducibility (±0.5%)',
    ],
  },
  {
    id: 'lab-consumables',
    image: '/products/product2.jpg',
    fallback: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop',
    title: 'Laboratory Consumables',
    description: 'Laboratory consumables are integral to day-to-day operations. We offer a wide range of high-quality consumables to support your laboratory\'s workflow.',
    benefits: ['Pipettes & petri dishes', 'Glassware & reagents', 'Filters & disposable gloves', 'Pipette tips & racks', 'Routine test essentials'],
  },
  {
    id: 'biomedical-equipment',
    image: '/products/product1.jpg',
    fallback: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop',
    title: 'Biomedical Equipment',
    description: 'In the ever-evolving field of healthcare and diagnostics, we provide advanced biomedical equipment including diagnostic devices and patient monitoring systems.',
    benefits: ['Diagnostic devices', 'Patient monitoring systems', 'Medical imaging tools', 'Hematology analyzers', 'Laboratory testing instruments'],
  },
  {
    id: 'scientific-software',
    image: '/products/product5.jpg',
    fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop',
    title: 'Scientific Software Solutions',
    description: 'At TECHBIOMATIC, we specialize in offering cutting-edge scientific software solutions that support research and development across diverse fields.',
    benefits: ['Data analysis & management', 'Simulation & modelling tools', 'Laboratory information systems', 'Research workflow automation', 'Reporting & visualization'],
  },
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

const VP = { once: true, margin: '0px 0px -60px 0px' }
const W = { maxWidth: '960px', margin: '0 auto', padding: '0 24px' }
const divider = <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 24px' }} />

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '160px 24px 80px', textAlign: 'center' }}>
        <div style={W}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)',
              color: '#DC2626', marginBottom: '20px',
            }}>Our Services</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: '20px' }}>
              End-to-End Technology <span style={{ color: '#DC2626' }}>Solutions</span>
            </h1>
            {divider}
            <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto' }}>
              From AI automation to enterprise IT infrastructure, we deliver comprehensive technology
              and engineering services that transform businesses across the UAE and Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={W}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
            {services.map((service, i) => (
              <motion.div
                key={service.id} id={service.id}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.55 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '48px', alignItems: 'center',
                }}
              >
                {/* Text — alternates order */}
                <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                    {service.title}
                  </h2>
                  <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '16px' }} />
                  <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                        <CheckCircle2 size={16} color="#DC2626" style={{ flexShrink: 0 }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '11px 24px', background: '#DC2626', color: '#fff',
                    borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                    textDecoration: 'none', transition: 'background 0.2s',
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#b91c1c')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#DC2626')}
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* Product image */}
                <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                  <div style={{
                    borderRadius: '16px', overflow: 'hidden',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minHeight: '280px',
                    padding: '16px',
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={(e) => { e.currentTarget.src = service.fallback }}
                      style={{
                        width: '100%', height: '280px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={W}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626', marginBottom: '16px' }}>
              Our Process
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
              How We <span style={{ color: '#DC2626' }}>Deliver</span>
            </h2>
            {divider}
            <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              A proven methodology that ensures every project is delivered on time, on budget, and to the highest quality standards.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px' }}>
            {processSteps.map((step, i) => (
              <motion.div key={step.step}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '8px' }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '16px',
                  background: '#DC2626', color: '#fff', fontWeight: 800, fontSize: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(220,38,38,0.3)',
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={W}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626', marginBottom: '16px' }}>
              Technology Stack
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
              Powered by Industry-Leading <span style={{ color: '#DC2626' }}>Technologies</span>
            </h2>
            {divider}
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {technologies.map((tech, i) => (
              <motion.div key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP} transition={{ duration: 0.3, delay: i * 0.03 }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px',
                  padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)', cursor: 'default',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                whileHover={{ borderColor: '#FECACA', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{tech.name}</span>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '100px', background: '#FFEBEB', color: '#DC2626', fontWeight: 600 }}>
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626', marginBottom: '16px' }}>
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
              Frequently Asked <span style={{ color: '#DC2626' }}>Questions</span>
            </h2>
            {divider}
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: i * 0.06 }}
                style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827', paddingRight: '16px' }}>{faq.q}</span>
                  <ChevronDown size={18} color="#DC2626" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#6B7280', lineHeight: 1.75, borderTop: '1px solid #F3F4F6', paddingTop: '14px' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section style={{ background: '#DC2626', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.75, marginBottom: '32px' }}>
            Partner with Techbiomatic to unlock the full potential of technology. Our experts are ready to design your digital transformation journey.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', background: '#fff', color: '#DC2626',
              borderRadius: '8px', fontSize: '14px', fontWeight: 700,
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get Started Today
            </Link>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 32px', background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.5)', color: '#fff',
              borderRadius: '8px', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', transition: 'background 0.2s',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
