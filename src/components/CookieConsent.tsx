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
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: 'calc(100% - 32px)',
            maxWidth: '560px',
          }}
        >
          {/* Card */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
            border: '1px solid #F3F4F6',
            overflow: 'hidden',
          }}>
            {/* Red top accent */}
            <div style={{ height: '4px', background: 'linear-gradient(90deg, #DC2626, #EF4444, #FCA5A5)' }} />

            <div style={{ padding: '20px 20px 20px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>

                {/* Cookie icon */}
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FFEBEB, #FEE2E2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, border: '1px solid #FECACA',
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: 22, height: 22 }} fill="none" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: 0 }}>
                      We use cookies 🍪
                    </h3>
                    <button
                      onClick={decline}
                      style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: '#F3F4F6', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#9CA3AF', transition: 'background 0.2s, color 0.2s',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#FFEBEB'; e.currentTarget.style.color = '#DC2626' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#9CA3AF' }}
                      aria-label="Close"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.65, margin: '0 0 16px' }}>
                    We use cookies to enhance your browsing experience, analyze site traffic,
                    and personalize content. By clicking{' '}
                    <strong style={{ color: '#374151' }}>"Accept All"</strong>,
                    you consent to our use of cookies.
                  </p>

                  {/* Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={accept}
                      style={{
                        padding: '9px 22px',
                        background: 'linear-gradient(135deg, #DC2626, #b91c1c)',
                        color: '#fff', border: 'none', borderRadius: '8px',
                        fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: '0 3px 10px rgba(220,38,38,0.3)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(220,38,38,0.4)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(220,38,38,0.3)' }}
                    >
                      Accept All
                    </button>

                    <button
                      onClick={decline}
                      style={{
                        padding: '9px 20px',
                        background: '#F9FAFB', color: '#6B7280',
                        border: '1px solid #E5E7EB', borderRadius: '8px',
                        fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#374151' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#F9FAFB'; e.currentTarget.style.color = '#6B7280' }}
                    >
                      Decline
                    </button>

                    <a href="#" style={{ fontSize: '12px', color: '#9CA3AF', textDecoration: 'underline', marginLeft: 'auto' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#DC2626')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
