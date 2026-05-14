import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

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
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="cookie-consent"
        >
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FFEBEB] flex items-center justify-center shrink-0">
                <Cookie size={18} className="text-[#DC2626]" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold text-sm mb-1">We use cookies</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={accept} className="px-4 py-2 bg-[#DC2626] text-white text-xs font-bold rounded-md hover:bg-[#B91C1C] transition-all">
                    Accept All
                  </button>
                  <button onClick={decline} className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium rounded-md hover:bg-gray-200 transition-all">
                    Decline
                  </button>
                </div>
              </div>
              <button onClick={decline} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
