import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+971 52 695 5656'],
    href: 'tel:+971526955656',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@techbiomatic.com'],
    href: 'mailto:info@techbiomatic.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM', 'Sunday: Closed'],
  },
]

const services = [
  'Laboratory Equipment', 'Scientific Equipment', 'Biomedical Equipment',
  'Laboratory Consumables', 'Scientific Software', 'Other',
]

const VP = { once: true, margin: '0px 0px -60px 0px' }
const W: React.CSSProperties = { maxWidth: '960px', margin: '0 auto', padding: '0 24px' }
const divider = <div style={{ width: '56px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 24px' }} />

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px', fontSize: '14px',
  border: '1.5px solid #E5E7EB', borderRadius: '8px',
  color: '#111827', background: '#fff', outline: 'none',
  fontFamily: 'inherit', boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#DC2626'
    e.target.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.1)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#E5E7EB'
    e.target.style.boxShadow = 'none'
  }

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
              Contact Us
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: '16px' }}>
              Let's Start a <span style={{ color: '#DC2626' }}>Conversation</span>
            </h1>
            {divider}
            <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
              Ready to find the right laboratory or biomedical equipment? Our team of experts
              is here to help you select and procure the right solution for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ───────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '60px 24px' }}>
        <div style={W}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '0' }}>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={VP} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
                  padding: '28px 20px', textAlign: 'center',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  width: 'clamp(180px, 28vw, 220px)',
                  flexShrink: 0,
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#FECACA' }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '10px',
                  background: '#FFEBEB', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 14px',
                }}>
                  <item.icon size={22} color="#DC2626" />
                </div>
                <h3 style={{ color: '#111827', fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>
                  {item.title}
                </h3>
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
        </div>
      </section>

      {/* ── MAIN CONTENT: INFO + FORM ─────────────────────── */}
      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div style={W}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Left — contact details */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={VP} transition={{ duration: 0.55 }}
            >
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                Contact <span style={{ color: '#DC2626' }}>Information</span>
              </h2>
              <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '16px' }} />
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.8, marginBottom: '28px' }}>
                We're headquartered in the heart of Dubai at Meydan Grandstand. Reach out
                through any of the channels below and our team will get back to you promptly.
              </p>

              {/* Contact list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                {contactInfo.map((item) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFEBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.icon size={18} color="#DC2626" />
                    </div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>{item.title}</div>
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
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/971526955656" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 18px', borderRadius: '12px',
                  background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)',
                  textDecoration: 'none', marginBottom: '24px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(37,211,102,0.14)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(37,211,102,0.08)')}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ color: '#111827', fontWeight: 600, fontSize: '13px' }}>Chat on WhatsApp</div>
                  <div style={{ color: '#9CA3AF', fontSize: '12px' }}>Typically replies within minutes</div>
                </div>
              </a>

              {/* Map */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB', height: '220px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.3047!3d25.1512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5b5b5b5b5%3A0x0!2sMeydan+Grandstand%2C+Dubai!5e0!3m2!1sen!2sae!4v1"
                  width="100%" height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techbiomatic Office Location"
                />
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={VP} transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                      <CheckCircle size={60} color="#DC2626" style={{ margin: '0 auto 20px', display: 'block' }} />
                    </motion.div>
                    <h3 style={{ color: '#111827', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>Message Sent!</h3>
                    <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)}
                      style={{ padding: '11px 24px', border: '1.5px solid #E5E7EB', borderRadius: '8px', background: '#fff', color: '#374151', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                      Send Us a Message
                    </h2>
                    <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: '24px', lineHeight: 1.6 }}>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                            Full Name <span style={{ color: '#DC2626' }}>*</span>
                          </label>
                          <input type="text" placeholder="John Smith" style={inputStyle}
                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={onFocus} onBlur={onBlur} required />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                            Email Address <span style={{ color: '#DC2626' }}>*</span>
                          </label>
                          <input type="email" placeholder="john@company.com" style={inputStyle}
                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={onFocus} onBlur={onBlur} required />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Phone Number</label>
                          <input type="tel" placeholder="+971 52 000 0000" style={inputStyle}
                            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Company / Institution</label>
                          <input type="text" placeholder="Your Organization" style={inputStyle}
                            value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            onFocus={onFocus} onBlur={onBlur} />
                        </div>
                      </div>

                      {/* <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Service of Interest</label>
                        <select style={{ ...inputStyle, cursor: 'pointer' }}
                          value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          onFocus={onFocus} onBlur={onBlur}>
                          <option value="" disabled>Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div> */}

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                          Message <span style={{ color: '#DC2626' }}>*</span>
                        </label>
                        <textarea placeholder="Tell us about your requirements..." rows={5}
                          style={{ ...inputStyle, resize: 'none' }}
                          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={onFocus} onBlur={onBlur} required />
                      </div>

                      <div style={{ textAlign: 'center', paddingTop: '4px' }}>
                        <button type="submit" disabled={loading}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '13px 40px', background: '#DC2626', color: '#fff',
                            border: 'none', borderRadius: '8px', fontSize: '14px',
                            fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.7 : 1, transition: 'background 0.2s',
                          }}
                          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#b91c1c' }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = '#DC2626' }}
                        >
                          {loading
                            ? <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                            : <><Send size={16} /> Send Message</>
                          }
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
