import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Monitor, Cpu, Cloud, Shield, BarChart3, Building2, Wifi, Cog } from 'lucide-react'

const services = [
  { icon: Monitor,   title: 'IT Solutions',            description: 'End-to-end IT infrastructure, software development, and managed services tailored for enterprise needs.',  href: '/services#it-solutions' },
  { icon: Cog,       title: 'Engineering Consultancy', description: 'Expert engineering consulting across civil, mechanical, and systems engineering disciplines.',              href: '/services#engineering' },
  { icon: Cpu,       title: 'AI Automation',           description: 'Intelligent automation solutions powered by machine learning and artificial intelligence.',                 href: '/services#ai-automation' },
  { icon: Cloud,     title: 'Cloud Services',          description: 'Scalable cloud infrastructure, migration, and optimization on AWS, Azure, and Google Cloud.',              href: '/services#cloud' },
  { icon: Building2, title: 'Enterprise Solutions',    description: 'Comprehensive ERP, CRM, and business process management solutions for large organizations.',               href: '/services#enterprise' },
  { icon: Shield,    title: 'Cybersecurity',           description: 'Advanced threat protection, compliance, and security operations center services.',                         href: '/services#cybersecurity' },
  { icon: Wifi,      title: 'Smart Infrastructure',    description: 'IoT-enabled smart building, city, and industrial infrastructure solutions.',                               href: '/services#smart-infrastructure' },
  { icon: BarChart3, title: 'Data Analytics',          description: 'Business intelligence, data warehousing, and advanced analytics for data-driven decisions.',              href: '/services#data-analytics' },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#F9FAFB', padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Our Services</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
            Comprehensive Technology <span style={{ color: '#DC2626' }}>Services</span>
          </h2>
          <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 20px' }} />
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            From AI automation to enterprise IT, we deliver end-to-end technology solutions
            that power the businesses of tomorrow.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VP} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                padding: '28px 20px', textAlign: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s, border-color 0.25s, transform 0.25s',
                cursor: 'pointer',
              }}
              whileHover={{ boxShadow: '0 6px 20px rgba(0,0,0,0.1)', borderColor: '#FECACA', y: -4 }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <service.icon size={24} color="#DC2626" />
              </div>
              <h3 style={{ color: '#111827', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>{service.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '12px', lineHeight: 1.6, marginBottom: '16px' }}>{service.description}</p>
              <Link
                to={service.href}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: '#DC2626', textDecoration: 'none' }}
              >
                Learn More <ArrowRight size={11} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <Link to="/services" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View All Services <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
