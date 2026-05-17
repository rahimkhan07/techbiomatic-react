import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown, ArrowRight, FlaskConical, Microscope, TestTube, HeartPulse, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'laboratory-equipment',
    icon: FlaskConical,
    image: '/products/product4.jpg',
    fallback: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=85&fit=crop',
    badge: 'Biomedical',
    title: 'Hematology Analyzer',
    description: 'Our advanced Hematology Analyzer is a fully automated 5-part differential blood cell counter designed for clinical laboratories and hospitals. Featuring a large touchscreen display with real-time graphical analysis, it delivers fast, accurate, and reliable complete blood count (CBC) results.',
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
    icon: TestTube,
    image: '/products/product3.jpg',
    fallback: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=85&fit=crop',
    badge: 'Laboratory',
    title: 'Micropipette Set with Tips & Rack',
    description: 'Our precision Micropipette Set is an essential tool for any laboratory, offering accurate and reproducible liquid handling across a wide volume range. Includes multiple single-channel micropipettes on a stand, paired with color-coded tip racks for contamination-free workflow.',
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
    icon: Microscope,
    image: '/products/product2.jpg',
    fallback: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=85&fit=crop',
    badge: 'Scientific',
    title: 'Laboratory Consumables',
    description: 'Laboratory consumables are integral to day-to-day operations. We offer a wide range of high-quality consumables to support your laboratory\'s workflow with efficiency and accuracy.',
    benefits: [
      'Pipettes & petri dishes',
      'Glassware & reagents',
      'Filters & disposable gloves',
      'Pipette tips & racks',
      'Routine test essentials',
    ],
  },
  {
    id: 'biomedical-equipment',
    icon: HeartPulse,
    image: '/products/product1.jpg',
    fallback: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=85&fit=crop',
    badge: 'Healthcare',
    title: 'Biomedical Equipment',
    description: 'In the ever-evolving field of healthcare and diagnostics, we provide advanced biomedical equipment including diagnostic devices and patient monitoring systems from trusted manufacturers.',
    benefits: [
      'Diagnostic devices',
      'Patient monitoring systems',
      'Medical imaging tools',
      'Hematology analyzers',
      'Laboratory testing instruments',
    ],
  },
  {
    id: 'scientific-software',
    icon: Code2,
    image: '/products/product5.jpg',
    fallback: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=85&fit=crop',
    badge: 'Software',
    title: 'Scientific Software Solutions',
    description: 'At TECHBIOMATIC, we specialize in offering cutting-edge scientific software solutions that support research and development across diverse fields including biotechnology, chemistry, and engineering.',
    benefits: [
      'Data analysis & management',
      'Simulation & modelling tools',
      'Laboratory information systems',
      'Research workflow automation',
      'Reporting & visualization',
    ],
  },
]

const faqs = [
  { q: 'What types of laboratory equipment do you supply?', a: 'We supply a comprehensive range including hematology analyzers, micropipettes, microscopes, centrifuges, spectrophotometers, incubators, autoclaves, and laboratory consumables. We cater to clinical, research, academic, and industrial laboratories.' },
  { q: 'Do you offer after-sales support and maintenance?', a: 'Yes, we provide comprehensive after-sales support including installation, calibration, training, and ongoing maintenance services. Our certified team ensures your equipment operates at peak performance.' },
  { q: 'Can you supply equipment for specific research requirements?', a: 'Absolutely. We work closely with clients to understand their specific research needs and source the most appropriate equipment. We have access to a wide network of reputable manufacturers worldwide.' },
  { q: 'Are your products ISO certified?', a: 'Yes, TECHBIOMATIC is ISO 9001 and ISO 45001 certified. All products we supply meet international quality standards and come with full manufacturer warranties and certifications.' },
  { q: 'Do you offer bulk or institutional pricing?', a: 'Yes, we offer competitive pricing for bulk orders and institutional procurement. Contact us with your requirements and we will provide a customized quotation tailored to your budget and needs.' },
  { q: 'What is your delivery timeline?', a: 'Delivery timelines vary by product and location. Standard items are typically delivered within 2–4 weeks. Custom or specialized equipment may take longer. We provide accurate timelines at the time of order confirmation.' },
]

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We discuss your laboratory requirements, budget, and specific needs to understand the best solution.' },
  { step: '02', title: 'Recommendation', desc: 'Our experts recommend the most suitable equipment and consumables from our extensive product range.' },
  { step: '03', title: 'Quotation', desc: 'We provide a detailed, transparent quotation with competitive pricing and delivery timelines.' },
  { step: '04', title: 'Delivery', desc: 'Careful packaging and timely delivery to your facility with full documentation and certifications.' },
  { step: '05', title: 'Support', desc: 'Installation, training, calibration, and ongoing after-sales support to ensure optimal performance.' },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }
const W: React.CSSProperties = { maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(160deg, #fff 0%, #FFF5F5 50%, #fff 100%)',
        padding: '160px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle dot pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'radial-gradient(#DC262620 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, ...W }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.3)',
              color: '#DC2626', marginBottom: '24px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626', display: 'inline-block' }} />
              Our Products
            </span>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)', fontWeight: 900,
              color: '#111827', lineHeight: 1.1, marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}>
              Premium Laboratory &{' '}
              <span style={{ color: '#DC2626' }}>Scientific Equipment</span>
            </h1>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444)', borderRadius: '2px', margin: '0 auto 24px' }} />
            <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}>
              TECHBIOMATIC supplies high-quality laboratory equipment, biomedical devices,
              scientific instruments, and consumables to research institutions, hospitals,
              and academic facilities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={W}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {services.map((service, i) => (
              <motion.div
                key={service.id} id={service.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '52px', alignItems: 'center',
                }}
              >
                {/* ── Text side ── */}
                <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                  {/* Badge */}
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '4px 12px', borderRadius: '100px', fontSize: '11px',
                    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: '#FFEBEB', color: '#DC2626', marginBottom: '16px',
                  }}>
                    <service.icon size={12} />
                    {service.badge}
                  </span>

                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800,
                    color: '#111827', marginBottom: '8px', lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}>
                    {service.title}
                  </h2>
                  <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '18px' }} />

                  <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: 1.85, marginBottom: '24px' }}>
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.benefits.map((benefit) => (
                      <li key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <CheckCircle2 size={13} color="#DC2626" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '12px 28px', background: '#DC2626', color: '#fff',
                      borderRadius: '8px', fontSize: '14px', fontWeight: 700,
                      textDecoration: 'none', transition: 'all 0.2s',
                      boxShadow: '0 4px 14px rgba(220,38,38,0.3)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#b91c1c'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>

                {/* ── Image side ── */}
                <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                  <div style={{
                    borderRadius: '20px', overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                    background: '#fff', position: 'relative',
                    border: '1px solid #F3F4F6',
                  }}>
                    {/* Top accent bar */}
                    <div style={{ height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444, #FCA5A5)' }} />
                    <div style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', background: '#FAFAFA' }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(e) => { e.currentTarget.src = service.fallback }}
                        style={{
                          maxWidth: '100%', maxHeight: '280px',
                          objectFit: 'contain', display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    </div>
                    {/* Badge overlay */}
                    <div style={{
                      position: 'absolute', bottom: '16px', right: '16px',
                      background: 'rgba(220,38,38,0.9)', color: '#fff',
                      padding: '4px 12px', borderRadius: '100px',
                      fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em',
                      backdropFilter: 'blur(4px)',
                    }}>
                      {service.badge}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Background accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444, #FCA5A5, #EF4444, #DC2626)' }} />

        <div style={W}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{
              display: 'inline-flex', padding: '6px 18px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.3)', color: '#DC2626', marginBottom: '18px',
            }}>
              How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#111827', marginBottom: '12px', letterSpacing: '-0.01em' }}>
              Our <span style={{ color: '#DC2626' }}>Process</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444)', borderRadius: '2px', margin: '0 auto 20px' }} />
            <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
              From consultation to after-sales support — a seamless experience designed around your needs.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px', position: 'relative' }}>
            {processSteps.map((step, i) => (
              <motion.div key={step.step}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: i * 0.1 }}
                style={{
                  textAlign: 'center', padding: '32px 16px',
                  background: '#fff', borderRadius: '16px',
                  border: '1px solid #F3F4F6',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  position: 'relative',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                whileHover={{ boxShadow: '0 8px 32px rgba(220,38,38,0.12)', y: -4 }}
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '44px', right: '-4px',
                    width: '8px', height: '2px',
                    background: 'linear-gradient(90deg, #DC2626, #FECACA)',
                    display: 'none',
                  }} className="hidden lg:block" />
                )}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DC2626, #EF4444)',
                  color: '#fff', fontWeight: 900, fontSize: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                  boxShadow: '0 6px 20px rgba(220,38,38,0.35)',
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '88px 24px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{
              display: 'inline-flex', padding: '6px 18px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.3)', color: '#DC2626', marginBottom: '18px',
            }}>
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#111827', marginBottom: '12px', letterSpacing: '-0.01em' }}>
              Frequently Asked <span style={{ color: '#DC2626' }}>Questions</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444)', borderRadius: '2px', margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ delay: i * 0.06 }}
                style={{
                  background: '#fff', borderRadius: '12px', overflow: 'hidden',
                  border: openFaq === i ? '1px solid #FECACA' : '1px solid #E5E7EB',
                  boxShadow: openFaq === i ? '0 4px 20px rgba(220,38,38,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: openFaq === i ? '#DC2626' : '#111827', paddingRight: '16px', lineHeight: 1.5 }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: openFaq === i ? '#DC2626' : '#F3F4F6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    <ChevronDown size={16} color={openFaq === i ? '#fff' : '#6B7280'}
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 22px 20px', fontSize: '14px', color: '#6B7280',
                        lineHeight: 1.8, borderTop: '1px solid #FEE2E2', paddingTop: '16px',
                      }}>
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
      <section style={{ background: 'linear-gradient(135deg, #DC2626 0%, #b91c1c 100%)', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: '-60px', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.5 }}>
            <span style={{
              display: 'inline-flex', padding: '5px 16px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)',
              color: '#fff', marginBottom: '20px',
            }}>
              Get In Touch
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
              Need Laboratory Equipment?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.75, marginBottom: '36px' }}>
              Contact us for a consultation, product inquiry, or custom quotation.
              We're ready to support your laboratory's success.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 36px', background: '#fff', color: '#DC2626',
                  borderRadius: '8px', fontSize: '15px', fontWeight: 800,
                  textDecoration: 'none', transition: 'all 0.2s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 36px', background: 'rgba(255,255,255,0.12)',
                  border: '2px solid rgba(255,255,255,0.5)', color: '#fff',
                  borderRadius: '8px', fontSize: '15px', fontWeight: 700,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
