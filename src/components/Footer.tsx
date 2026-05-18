import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Products', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'FAQ', href: '/contact' },
  { label: 'Contact Us', href: '/contact' },
]

const usefulLinks = [
  { label: 'Help Support', href: '/contact', highlight: true },
  { label: 'Our Team', href: '/about' },
  { label: 'Our Certificates', href: '/about' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'currentColor' }}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'currentColor' }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'currentColor' }}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: 'Scroll to top',
    href: '#top',
    isTop: true,
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E5E7EB' }}>

      {/* ── Main grid ─────────────────────────────────────── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>

          {/* ── Col 1: Brand ── */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img src="/logo.png" alt="Techbiomatic" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.75, marginBottom: '24px', maxWidth: '260px' }}>
              Your trusted partner for cutting-edge lab equipment, biomedical devices, and innovative
              solutions worldwide.
            </p>

            {/* Email subscribe */}
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{ background: '#FFEBEB', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#DC2626', fontWeight: 600 }}
              >
                ✓ Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0', maxWidth: '280px' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1, padding: '11px 14px', fontSize: '13px',
                    border: '1px solid #D1D5DB', borderRight: 'none',
                    borderRadius: '8px 0 0 8px', outline: 'none',
                    color: '#111827', background: '#F9FAFB',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '11px 14px', background: '#374151', color: '#fff',
                    border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#DC2626')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#374151')}
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
              Quick Links
            </h3>
            <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '20px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{ color: '#4B5563', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Useful Links ── */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
              Useful Links
            </h3>
            <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '20px' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{
                      color: link.highlight ? '#DC2626' : '#4B5563',
                      fontSize: '14px', textDecoration: 'none',
                      fontWeight: link.highlight ? 600 : 400,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link.highlight ? '#DC2626' : '#4B5563')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
              Contact
            </h3>
            <div style={{ width: '40px', height: '3px', background: '#DC2626', borderRadius: '2px', marginBottom: '20px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Email */}
              <a href="mailto:info@techbiomatic.ae"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#4B5563', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
              >
                <Mail size={15} color="#DC2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                info@techbiomatic.com
              </a>

              {/* Phone */}
              <a href="tel:+971526955656"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#4B5563', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4B5563')}
              >
                <Phone size={15} color="#DC2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                +971 52 695 5656
              </a>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#4B5563', fontSize: '14px' }}>
                <MapPin size={15} color="#DC2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.6 }}>
                  6th Floor, Meydan Grandstand,<br />
                  Meydan Road, Nad Al Sheba,<br />
                  Dubai, United Arab Emirates
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid #E5E7EB' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '16px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>

          {/* Copyright */}
          <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>
            Copyright © {new Date().getFullYear()}{' '}
            <strong style={{ color: '#111827' }}>Techbiomatic</strong>{' '}
            {/* <span style={{ textDecoration: 'line-through', color: '#9CA3AF' }}>Technology for Humans</span>{' '} */}
            | All Rights Reserved.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                onClick={s.isTop ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } : undefined}
                style={{
                  width: '34px', height: '34px', borderRadius: '6px',
                  background: s.isTop ? '#1a6fc4' : '#DC2626',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', transition: 'opacity 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  )
}
