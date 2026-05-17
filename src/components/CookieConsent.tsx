import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookie-consent', 'declined'); setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            /* Responsive width: full on mobile with 12px margin each side */
            width: 'calc(100vw - 24px)',
            maxWidth: '520px',
            boxSizing: 'border-box',
          }}
        >
          {/* Card with 0.7 opacity background */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '16px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255,255,255,0.9)',
            overflow: 'hidden',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            {/* Red top accent */}
            <div style={{ height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444, #FCA5A5)' }} />

            <div style={{ padding: '16px' }}>
              {/* Header row: icon + title + close */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                {/* Cookie icon */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,235,235,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, border: '1px solid #FECACA',
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }} fill="none" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Title + close */}
                <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>
                    We use cookies 🍪
                  </h3>
                  <button
                    onClick={decline}
                    style={{
                      width: '26px', height: '26px', borderRadius: '50%',
                      background: 'rgba(243,244,246,0.8)', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#9CA3AF', flexShrink: 0, transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#FFEBEB'; e.currentTarget.style.color = '#DC2626' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(243,244,246,0.8)'; e.currentTarget.style.color = '#9CA3AF' }}
                    aria-label="Close"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '12px', color: '#4B5563', lineHeight: 1.65,
                margin: '0 0 14px', paddingLeft: '52px',
              }}>
                We use cookies to enhance your browsing experience, analyze site traffic,
                and personalize content. By clicking{' '}
                <strong style={{ color: '#374151' }}>"Accept All"</strong>,
                you consent to our use of cookies.
              </p>

              {/* Buttons row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                flexWrap: 'wrap', paddingLeft: '52px',
              }}>
                <button
                  onClick={accept}
                  style={{
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #DC2626, #b91c1c)',
                    color: '#fff', border: 'none', borderRadius: '7px',
                    fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                    transition: 'all 0.2s', whiteSpace: 'nowrap',
                    boxShadow: '0 3px 10px rgba(220,38,38,0.35)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 14px rgba(220,38,38,0.45)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(220,38,38,0.35)' }}
                >
                  Accept All
                </button>

                <button
                  onClick={decline}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(249,250,251,0.8)', color: '#6B7280',
                    border: '1px solid rgba(229,231,235,0.8)', borderRadius: '7px',
                    fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,244,246,0.9)'; e.currentTarget.style.color = '#374151' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(249,250,251,0.8)'; e.currentTarget.style.color = '#6B7280' }}
                >
                  Decline
                </button>

                <a
                  href="#"
                  style={{ fontSize: '11px', color: '#9CA3AF', textDecoration: 'underline', marginLeft: 'auto', whiteSpace: 'nowrap' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
