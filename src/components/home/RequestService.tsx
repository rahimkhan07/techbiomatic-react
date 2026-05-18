import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const VP = { once: true, margin: '0px 0px -60px 0px' }

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#fff', border: '1.5px solid #E5E7EB',
  borderRadius: '8px', padding: '12px 14px', color: '#111827',
  fontSize: '14px', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '13px', fontWeight: 500,
  color: '#374151', marginBottom: '6px',
}

export default function RequestService() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#DC2626'
    e.target.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.1)'
  }
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#E5E7EB'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="request-service" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* ── Get in Touch banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #DC2626 0%, #b91c1c 100%)',
            borderRadius: '16px',
            padding: '40px 36px',
            textAlign: 'center',
            marginBottom: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle pattern overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.07,
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 14px', borderRadius: '100px', fontSize: '11px',
              fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)',
              color: '#fff', marginBottom: '16px',
            }}>
              Get in Touch
            </span>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800,
              color: '#fff', marginBottom: '16px', lineHeight: 1.2,
            }}>
              Discover the <span style={{ color: '#FFD6D6' }}>TECHBIOMATIC</span> Difference Today!
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.88)', fontSize: '15px',
              lineHeight: 1.8, maxWidth: '580px', margin: '0 auto',
            }}>
              Explore our full product range and learn how we can support your laboratory's success.
              For inquiries, product details, or a consultation, please contact us. We look forward
              to being your trusted partner in scientific and laboratory excellence.
            </p>
          </div>
        </motion.div>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5, delay: 0.05 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700, color: '#111827', marginBottom: '10px', lineHeight: 1.2 }}>
            Request for Our <span style={{ color: '#DC2626' }}>Service</span>
          </h3>
          <div style={{ width: '48px', height: '4px', background: '#DC2626', borderRadius: '2px', margin: '0 auto 14px' }} />
          <p style={{ color: '#6B7280', fontSize: '14px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Interested in our products and services? Fill out the form below and we will
            get back to you at the earliest.
          </p>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '40px 40px' }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                <CheckCircle size={60} color="#DC2626" style={{ margin: '0 auto 20px' }} />
              </motion.div>
              <h3 style={{ color: '#111827', fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>Request Submitted!</h3>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ fontSize: '14px' }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={labelStyle}>Full Name <span style={{ color: '#DC2626' }}>*</span></label>
                  <input type="text" placeholder="John Smith" style={inputStyle}
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={focusStyle} onBlur={blurStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Email Address <span style={{ color: '#DC2626' }}>*</span></label>
                  <input type="email" placeholder="john@company.com" style={inputStyle}
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={focusStyle} onBlur={blurStyle} required />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" placeholder="+971 52 000 0000" style={inputStyle}
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company Name</label>
                  <input type="text" placeholder="Your Company" style={inputStyle}
                    value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '28px' }}>
                <label style={labelStyle}>Message <span style={{ color: '#DC2626' }}>*</span></label>
                <textarea placeholder="Tell us about your project or requirements..." rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={focusStyle} onBlur={blurStyle} required />
              </div>

              {/* Submit */}
              <div style={{ textAlign: 'center' }}>
                <button type="submit" disabled={loading} className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 40px', opacity: loading ? 0.7 : 1 }}>
                  {loading
                    ? <><div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                    : <><Send size={16} /> Submit Request</>
                  }
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
