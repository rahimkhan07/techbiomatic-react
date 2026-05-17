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
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          style={{
            position: 'fixed',
            /* Use left+right instead of left:50% + translateX to avoid overflow */
            left: '12px',
            right: '12px',
            bottom: '16px',
            zIndex: 9999,
            /* Center on larger screens */
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.85)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
            overflow: 'hidden',
          }}>
            {/* Red top bar */}
            <div style={{ height: '4px', background: 'linear-gradient(90deg,#DC2626,#EF4444,#FCA5A5)' }} />

            <div style={{ padding: '16px 16px 16px 16px' }}>

              {/* Row 1: icon + title + close */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                  background: 'rgba(255,235,235,0.9)', border: '1px solid #FECACA',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                    stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" strokeWidth="2.5" />
                  </svg>
                </div>

                <span style={{ flex: 1, fontSize: '14px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                  We use cookies
                </span>

                <button onClick={decline} aria-label="Close"
                  style={{
                    width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(243,244,246,0.8)', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9CA3AF', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#FFEBEB'; e.currentTarget.style.color = '#DC2626' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(243,244,246,0.8)'; e.currentTarget.style.color = '#9CA3AF' }}
                >
                  <X size={13} />
                </button>
              </div>

              {/* Row 2: description */}
              <p style={{
                fontSize: '12px', color: '#4B5563', lineHeight: 1.65,
                margin: '0 0 14px 0',
              }}>
                We use cookies to enhance your browsing experience, analyze site traffic,
                and personalize content. By clicking{' '}
                <strong style={{ color: '#374151' }}>"Accept All"</strong>,
                you consent to our use of cookies.
              </p>

              {/* Row 3: buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <button onClick={accept}
                  style={{
                    padding: '9px 22px', borderRadius: '8px', border: 'none',
                    background: 'linear-gradient(135deg,#DC2626,#b91c1c)',
                    color: '#fff', fontSize: '13px', fontWeight: 700,
                    cursor: 'pointer', whiteSpace: 'nowrap',
                    boxShadow: '0 3px 10px rgba(220,38,38,0.35)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 14px rgba(220,38,38,0.45)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(220,38,38,0.35)' }}
                >
                  Accept All
                </button>

                <button onClick={decline}
                  style={{
                    padding: '9px 16px', borderRadius: '8px',
                    background: 'rgba(249,250,251,0.8)',
                    border: '1px solid rgba(229,231,235,0.8)',
                    color: '#6B7280', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,244,246,0.9)'; e.currentTarget.style.color = '#374151' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(249,250,251,0.8)'; e.currentTarget.style.color = '#6B7280' }}
                >
                  Decline
                </button>

                <a href="#" style={{
                  fontSize: '11px', color: '#9CA3AF', textDecoration: 'underline',
                  marginLeft: 'auto', whiteSpace: 'nowrap', transition: 'color 0.2s',
                }}
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
