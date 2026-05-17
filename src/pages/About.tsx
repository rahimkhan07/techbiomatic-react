import { motion } from 'framer-motion'
import { FlaskConical, Microscope, HeartPulse, TestTube, Code2, Clock, Users, Package, Star, Lightbulb, Headphones, Globe, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    icon: FlaskConical,
    number: '1',
    title: 'Laboratory Equipment',
    description:
      'We provide a comprehensive range of laboratory equipment that supports a variety of scientific disciplines, including chemistry, biology, physics, and environmental science. From precision analytical instruments like spectrophotometers, centrifuges, and microscopes, to essential lab tools such as incubators, autoclaves, and balances, we ensure that our customers have access to reliable, durable, and high-performance instruments for their research and testing needs.',
  },
  {
    icon: Microscope,
    number: '2',
    title: 'Scientific Equipment',
    description:
      'Our selection of scientific equipment is designed to support cutting-edge research and experimentation across various industries. We offer a wide range of specialized instruments, including environmental testing equipment, optical instruments, laboratory reactors, thermal cyclers, and more. Whether for academic research, industrial applications, or government labs, our scientific equipment is built to deliver accurate results and withstand rigorous usage.',
  },
  {
    icon: HeartPulse,
    number: '3',
    title: 'Biomedical Equipment',
    description:
      'In the ever-evolving field of healthcare and diagnostics, we understand the critical need for advanced biomedical equipment. Our offerings include diagnostic devices, patient monitoring systems, medical imaging tools, laboratory testing instruments, and more. We work with trusted manufacturers to provide healthcare professionals and medical researchers with the most reliable and innovative technologies to improve patient care, enhance clinical decision-making, and drive medical research forward.',
  },
  {
    icon: TestTube,
    number: '4',
    title: 'Laboratory Consumables',
    description:
      "Laboratory consumables are integral to day-to-day operations, and we offer a wide range of high-quality consumables to support your laboratory's workflow. From pipettes, petri dishes, and glassware to reagents, filters, and disposable gloves, we provide the essential products required for routine tests, experiments, and research. Our consumables are designed for both efficiency and accuracy, ensuring that every task can be performed seamlessly without compromising on quality.",
  },
  {
    icon: Code2,
    number: '5',
    title: 'Scientific Software Solutions',
    description:
      "In today's rapidly evolving scientific landscape, the ability to efficiently analyze, manage, and interpret data is critical for driving discovery, innovation, and advancements across a wide range of disciplines. At TECHBIOMATIC, we specialize in offering cutting-edge scientific software solutions that support research and development across diverse fields, including biotechnology, chemistry, physics, environmental science, medicine, and engineering. Our software tools are designed to meet the growing demands of modern scientific work, helping you achieve more accurate results, optimize workflows, and accelerate innovation.",
  },
]

const whyUs = [
  {
    icon: Clock,
    title: 'Proven Industry Experience',
    description:
      'With 15 years of experience, we understand the complexities of laboratory operations and have built a solid foundation of trust and reliability among our clients.',
  },
  {
    icon: Users,
    title: 'Qualified Engineers and Research Doctors',
    description:
      'Our team is composed of highly skilled engineers and accomplished research doctors, ensuring that you receive the most advanced, scientifically backed, and technically sound solutions. With years of experience in their respective fields, they bring both expertise and innovation to every project.',
  },
  {
    icon: Package,
    title: 'Wide Range of Products',
    description:
      'We offer a one-stop solution for laboratories, healthcare facilities, and scientific research institutions with our diverse range of products, from advanced equipment to consumables and software.',
  },
  {
    icon: Star,
    title: 'Commitment to Quality',
    description:
      'Quality is at the core of everything we do. We work with the most reputable manufacturers in the industry to ensure our customers receive only the highest-quality products that meet international standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Expertise',
    description:
      'Our team is always on the cutting edge of technological advancements in laboratory and biomedical fields. By staying ahead of industry trends, we ensure that our clients have access to the latest innovations that drive scientific discovery and clinical excellence.',
  },
  {
    icon: Headphones,
    title: 'Customer-Focused Service',
    description:
      'We prioritize understanding the unique needs of our clients. Our dedicated customer support team works closely with you to ensure you receive the right solutions, backed by expert advice and timely service.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      "With a wide network of clients across various sectors worldwide, we have established ourselves as a trusted supplier in the scientific, medical, and research communities. No matter where you are, we're ready to deliver the products and support you need.",
  },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }

const tag = (label: string) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '6px 14px', borderRadius: '100px', fontSize: '11px',
    fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const,
    background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626',
    marginBottom: '16px',
  }}>{label}</span>
)

const divider = (
  <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 24px' }} />
)

export default function About() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '160px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {tag('About Us')}
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: '20px' }}>
              Welcome to <span style={{ color: '#DC2626' }}>TECHBIOMATIC</span>
            </h1>
            {divider}
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '760px', margin: '0 auto 32px' }}>
              With <strong>over 15 years of experience</strong> in the industry, we have established
              ourselves as a reliable partner and a leading supplier of laboratory equipment, scientific
              instruments, biomedical devices, laboratory consumables, and software solutions. We
              specialize in providing high-quality products and services designed to meet the needs of
              laboratories, research institutions, healthcare facilities, and academic institutions{' '}
              <strong>across the globe.</strong> Our extensive portfolio of cutting-edge solutions is
              backed by a commitment to excellence, innovation, and customer satisfaction.
            </p>
          </motion.div>

          {/* Info bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              background: '#fff', border: '1px solid #E5E7EB',
              borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}
          >
            {[
              { label: 'Experience', value: '15+ Years' },
              { label: 'Specialization', value: 'Lab & Biomedical' },
              { label: 'Reach', value: 'Global' },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: '20px 16px', textAlign: 'center',
                borderRight: i < 2 ? '1px solid #F3F4F6' : 'none',
              }}>
                <div style={{ color: '#DC2626', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ color: '#111827', fontWeight: 700, fontSize: '16px' }}>{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PRODUCT OFFERINGS ════════════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            {tag('What We Offer')}
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
              Our Product <span style={{ color: '#DC2626' }}>Offerings</span>
            </h2>
            {divider}
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  padding: '24px 28px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#FECACA' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <product.icon size={22} color="#DC2626" />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#DC2626' }}>{product.number}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{product.title}</h4>
                  <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.8 }}>{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            {tag('Why Techbiomatic')}
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
              Why <span style={{ color: '#DC2626' }}>Choose Us?</span>
            </h2>
            {divider}
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  padding: '28px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#FECACA' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={20} color="#DC2626" />
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{item.title}</h4>
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.75 }}>{item.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
                  <CheckCircle2 size={14} color="#DC2626" />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 600 }}>Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ═════════════════════════════════ */}
      <section style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            {tag('Our Purpose')}
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
              Mission & <span style={{ color: '#DC2626' }}>Vision</span>
            </h2>
            {divider}
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={VP} transition={{ duration: 0.5 }}
              style={{ background: '#FFEBEB', border: '1px solid #FECACA', borderRadius: '14px', padding: '32px 28px' }}
            >
              <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Our Mission</div>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8 }}>
                At <strong style={{ color: '#DC2626' }}>TECHBIOMATIC</strong>, we are passionate about
                supporting scientific research, medical advancements, and healthcare improvements. Our
                mission is to provide laboratories, hospitals, and research institutions with the tools
                they need to push the boundaries of knowledge, improve patient care, and drive
                innovation in their respective fields.
              </p>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8, marginTop: '12px' }}>
                We are proud to be a reliable partner in your journey toward scientific discovery,
                medical excellence, and operational efficiency. By delivering high-quality equipment,
                consumables, and software, we aim to empower our clients to achieve their goals and
                make a lasting impact in their industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={VP} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '14px', padding: '32px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Our Vision</div>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8 }}>
                Let <strong style={{ color: '#DC2626' }}>TECHBIOMATIC</strong> be your trusted supplier
                and partner in success. Together, we can achieve new milestones in scientific research,
                healthcare, and innovation. We are committed to providing the highest quality solutions
                and fostering collaborative partnerships that drive progress, discovery, and impactful
                advancements across industries.
              </p>
            </motion.div>
          </div>

          {/* Tagline banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              background: '#DC2626', borderRadius: '14px', padding: '32px 28px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
              TECHBIOMATIC – <span style={{ color: '#FFD6D6' }}>Technology for Humans</span>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Discover the TECHBIOMATIC difference today! Explore our full product range and learn
              how we can support your laboratory's success. For inquiries, product details, or a
              consultation, please contact us.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                marginTop: '20px', padding: '12px 28px', borderRadius: '8px',
                background: '#fff', color: '#DC2626', fontWeight: 700, fontSize: '14px',
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
