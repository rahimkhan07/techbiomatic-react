import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['6th Floor, Meydan Grandstand,', 'Meydan Road, Nad Al Sheba,', 'Dubai, United Arab Emirates'],
    href: undefined,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@techbiomatic.ae'],
    href: 'mailto:info@techbiomatic.ae',
  },
  {
    icon: Phone,
    title: 'Call',
    lines: ['+971 52 695 5656'],
    href: 'tel:+971526955656',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM'],
    href: undefined,
  },
]

const VP = { once: true, margin: '0px 0px -60px 0px' }

export default function HomeContact() {
  return (
    <section id="contact" style={{ background: '#F9FAFB', padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>Reach Us</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#111827', marginBottom: '12px', lineHeight: 1.2 }}>
            Contact <span style={{ color: '#DC2626' }}>Us</span>
          </h2>
          <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 20px' }} />
          <p style={{ color: '#6B7280', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Thank you for your interest in Techbiomatic. Get in touch with us or visit us.
          </p>
        </motion.div>

        {/* ── Contact cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VP} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                padding: '28px 20px', textAlign: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderColor: '#FECACA' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <item.icon size={22} color="#DC2626" />
              </div>
              <h3 style={{ color: '#111827', fontWeight: 600, fontSize: '14px', marginBottom: '8px' }}>{item.title}</h3>
              {item.lines.map((line) => (
                <div key={line} style={{ color: '#6B7280', fontSize: '13px', lineHeight: 1.6 }}>
                  {item.href
                    ? <a href={item.href} style={{ color: '#6B7280', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                      >{line}</a>
                    : line
                  }
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', height: '320px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.3047!3d25.1512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5b5b5b5b5%3A0x0!2sMeydan+Grandstand%2C+Dubai!5e0!3m2!1sen!2sae!4v1"
            width="100%" height="320"
            style={{ border: 0, display: 'block' }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Techbiomatic Office Location"
          />
        </motion.div>

      </div>
    </section>
  )
}
