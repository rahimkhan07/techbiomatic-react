import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Our Products', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'FAQ', href: '/contact#faq' },
  { label: 'Contact us', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      {/* ══ TOP INFO BAR — red ══════════════════════════════ */}
      <div style={{ background: '#DC2626' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '38px', gap: '8px' }}>

            {/* Left: contact info — responsive */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden', flex: 1, minWidth: 0 }}>

              {/* Email — always visible */}
              <a href="mailto:info@techbiomatic.ae"
                style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fff', fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <Mail size={12} />
                <span className="hidden sm:inline">info@techbiomatic.ae</span>
                <span className="sm:hidden">Email</span>
              </a>

              {/* Separator — hidden on mobile */}
              <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>|</span>

              {/* Address — hidden on mobile, shortened on tablet */}
              <span className="hidden md:flex" style={{ alignItems: 'center', gap: '5px', color: '#fff', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
                <MapPin size={12} style={{ flexShrink: 0 }} />
                <span className="hidden lg:inline">6th Floor, Meydan Grandstand, Nad Al Sheba, Dubai, UAE</span>
                <span className="lg:hidden">Meydan Grandstand, Dubai, UAE</span>
              </span>

              {/* Separator — hidden on mobile */}
              <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>|</span>

              {/* Phone — always visible */}
              <a href="tel:+971526955656"
                style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fff', fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, fill: 'none', stroke: 'currentColor', strokeWidth: 2, flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +971 52 695 5656
              </a>
            </div>

            {/* Right: social icons — always visible, shrink-0 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { label: 'YouTube', isYT: true },
                { label: 'Instagram', isIG: true },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', flexShrink: 0 }}>
                  {s.isYT ? (
                    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: 'currentColor' }}>
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#DC2626" />
                    </svg>
                  ) : s.isIG ? (
                    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: 'currentColor' }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#DC2626" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#DC2626" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: 'currentColor' }}>
                      <path d={s.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ MAIN NAV — white ════════════════════════════════ */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src="/logo.png" alt="Techbiomatic" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            </Link>

            {/* Desktop nav links — centered */}
            <nav className="hidden lg:flex" style={{ alignItems: 'stretch', gap: '0', flex: 1, justifyContent: 'center', height: '68px' }}>
              {navLinks.map((link) => (
                <div key={link.href} className="relative"
                  style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                >
                  <Link
                    to={link.href}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      padding: '0 18px', height: '68px', fontSize: '14px', fontWeight: 500,
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      color: location.pathname === link.href ? '#DC2626' : '#374151',
                      transition: 'color 0.2s',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#DC2626' }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== link.href) {
                        e.currentTarget.style.color = '#374151'
                      }
                    }}
                  >
                    {link.label}
                    {/* Active / hover underline — only as wide as the text */}
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '18px',
                      right: '18px',
                      height: '3px',
                      borderRadius: '3px 3px 0 0',
                      background: '#DC2626',
                      opacity: location.pathname === link.href ? 1 : 0,
                      transition: 'opacity 0.2s',
                    }} />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Order Now CTA */}
            <div className="hidden lg:flex" style={{ alignItems: 'center', flexShrink: 0 }}>
              <Link to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 22px', background: '#DC2626', color: '#fff',
                  borderRadius: '6px', fontSize: '14px', fontWeight: 600,
                  textDecoration: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#DC2626')}
              >
                <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 8 16 12 12 16" /><line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                Order Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
              style={{ padding: '8px', color: '#374151', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '6px' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ══ MOBILE MENU ═════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', maxHeight: 'calc(100vh - 106px)', overflowY: 'auto' }}
          >
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '12px 16px', fontSize: '14px', fontWeight: 500,
                    color: location.pathname === link.href ? '#DC2626' : '#374151',
                    background: location.pathname === link.href ? '#FFEBEB' : 'transparent',
                    borderRadius: '8px', textDecoration: 'none', display: 'block',
                    transition: 'all 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ paddingTop: '12px', borderTop: '1px solid #F3F4F6', marginTop: '8px' }}>
                <Link to="/contact"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '12px', background: '#DC2626', color: '#fff',
                    borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
