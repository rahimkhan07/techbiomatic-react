import { motion } from 'framer-motion'
import { FlaskConical, Microscope, HeartPulse, TestTube, Code2, CheckCircle2, Clock, Users, Package, Star, Lightbulb, Headphones, Globe } from 'lucide-react'

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
      'Laboratory consumables are integral to day-to-day operations, and we offer a wide range of high-quality consumables to support your laboratory\'s workflow. From pipettes, petri dishes, and glassware to reagents, filters, and disposable gloves, we provide the essential products required for routine tests, experiments, and research. Our consumables are designed for both efficiency and accuracy, ensuring that every task can be performed seamlessly without compromising on quality.',
  },
  {
    icon: Code2,
    number: '5',
    title: 'Scientific Software Solutions',
    description:
      'In today\'s rapidly evolving scientific landscape, the ability to efficiently analyze, manage, and interpret data is critical for driving discovery, innovation, and advancements across a wide range of disciplines. At TECHBIOMATIC, we specialize in offering cutting-edge scientific software solutions that support research and development across diverse fields, including biotechnology, chemistry, physics, environmental science, medicine, and engineering. Our software tools are designed to meet the growing demands of modern scientific work, helping you achieve more accurate results, optimize workflows, and accelerate innovation.',
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
      'Our team is composed of highly skilled engineers and accomplished research doctors, ensuring that you receive the most advanced, scientifically backed, and technically sound solutions.',
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
      'With a wide network of clients across various sectors worldwide, we have established ourselves as a trusted supplier in the scientific, medical, and research communities. No matter where you are, we\'re ready to deliver the products and support you need.',
  },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }

export default function WhoWeAre() {
  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — ABOUT US
      ══════════════════════════════════════════ */}
      <section id="who-we-are" style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '100px', fontSize: '11px',
                fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626',
                marginBottom: '16px',
              }}
            >
              Who Are We
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
              About <span style={{ color: '#DC2626' }}>TECHBIOMATIC</span>
            </h2>
            <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 24px' }} />
            <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.8, maxWidth: '780px', margin: '0 auto' }}>
              Welcome to <strong style={{ color: '#DC2626' }}>TECHBIOMATIC</strong>,{' '}
              <strong>with over 15 years of experience</strong> in the industry, we have established
              ourselves as a reliable partner and a leading supplier of laboratory equipment, scientific
              instruments, biomedical devices, laboratory consumables, and software solutions. We
              specialize in providing high-quality products and services designed to meet the needs of
              laboratories, research institutions, healthcare facilities, and academic institutions{' '}
              <strong>across the globe.</strong> Our extensive portfolio of cutting-edge solutions is
              backed by a commitment to excellence, innovation, and customer satisfaction.
            </p>
          </motion.div>

          {/* Product Offerings heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.45 }}
            style={{ textAlign: 'center', marginBottom: '36px' }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827' }}>
              Our Product Offerings
            </h3>
          </motion.div>

          {/* Product cards */}
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
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#FECACA' }}
              >
                {/* Number + icon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '10px', background: '#FFEBEB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <product.icon size={22} color="#DC2626" />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#DC2626' }}>{product.number}</span>
                </div>

                {/* Text */}
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                    {product.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.75 }}>
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}
          >
            <div style={{ background: '#FFEBEB', border: '1px solid #FECACA', borderRadius: '12px', padding: '28px 24px' }}>
              <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Our Mission
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.75 }}>
                At <strong style={{ color: '#DC2626' }}>TECHBIOMATIC</strong>, we are passionate about
                supporting scientific research, medical advancements, and healthcare improvements. Our
                mission is to provide laboratories, hospitals, and research institutions with the tools
                they need to push the boundaries of knowledge, improve patient care, and drive
                innovation in their respective fields.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '28px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#DC2626', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Our Vision
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.75 }}>
                Let <strong style={{ color: '#DC2626' }}>TECHBIOMATIC</strong> be your trusted supplier
                and partner in success. Together, we can achieve new milestones in scientific research,
                healthcare, and innovation. We are committed to providing the highest quality solutions
                and fostering collaborative partnerships that drive progress, discovery, and impactful
                advancements across industries.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section id="why-choose-us" style={{ background: '#F9FAFB', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '52px' }}
          >
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 14px', borderRadius: '100px', fontSize: '11px',
                fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                background: '#FFEBEB', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626',
                marginBottom: '16px',
              }}
            >
              Why Techbiomatic
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
              Why <span style={{ color: '#DC2626' }}>Choose Us?</span>
            </h2>
            <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 24px' }} />
          </motion.div>

          {/* Why-us grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  padding: '28px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#FECACA' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px', background: '#FFEBEB',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <item.icon size={20} color="#DC2626" />
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.75 }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
                  <CheckCircle2 size={14} color="#DC2626" />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 600 }}>Verified</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ textAlign: 'center', marginTop: '52px', padding: '32px 24px', background: '#DC2626', borderRadius: '16px' }}
          >
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.02em' }}>
              <strong>TECHBIOMATIC</strong> – Technology for Humans
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '8px', lineHeight: 1.6 }}>
              We are proud to be a reliable partner in your journey toward scientific discovery,
              medical excellence, and operational efficiency.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}
