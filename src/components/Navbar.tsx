import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'IT Solutions', href: '/services#it-solutions' },
      { label: 'Engineering Consultancy', href: '/services#engineering' },
      { label: 'AI Automation', href: '/services#ai-automation' },
      { label: 'Cloud Services', href: '/services#cloud' },
      { label: 'Cybersecurity', href: '/services#cybersecurity' },
      { label: 'Data Analytics', href: '/services#data-analytics' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>

      {/* ══ ROW 1 — Logo + contact info ══════════════════════ */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">

            {/* Logo + company name */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="Techbiomatic"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Contact info — right side (desktop only) */}
            <div className="hidden lg:flex flex-col items-end gap-1 text-xs text-gray-500">
              <a href="mailto:info@techbiomatic.ae"
                className="flex items-center gap-1.5 hover:text-[#DC2626] transition-colors">
                <Mail size={12} className="text-gray-400" />
                info@techbiomatic.ae
              </a>
              <a href="tel:+971526955656"
                className="flex items-center gap-1.5 hover:text-[#DC2626] transition-colors">
                <Phone size={12} className="text-gray-400" />
                +971 52 695 5656
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn"
                className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-sm bg-[#0077B5] text-white hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {/* ══ ROW 2 — Nav links + CTA ═══════════════════════════ */}
      <div className="border-b border-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Nav links — centered */}
            <nav className="flex items-stretch h-full flex-1 justify-center">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative flex items-stretch"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                      location.pathname === link.href
                        ? 'text-[#DC2626] border-[#DC2626]'
                        : 'text-gray-700 border-transparent hover:text-[#DC2626] hover:border-[#DC2626]'
                    }`}
                    style={{ padding: '0 18px' }}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ml-0.5 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-lg z-50"
                        style={{ borderRadius: '0 0 6px 6px' }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#DC2626] hover:bg-[#FFEBEB] transition-colors border-b border-gray-100 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA button */}
            <Link
              to="/contact"
              className="text-sm font-semibold text-white rounded-full transition-all hover:opacity-90 shrink-0"
              style={{ background: '#1a6fc4', padding: '9px 22px' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* ══ Mobile Menu ═══════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
          >
            {/* Mobile contact info */}
            <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100 flex flex-col gap-1.5">
              <a href="mailto:info@techbiomatic.ae" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#DC2626]">
                <Mail size={11} /> info@techbiomatic.ae
              </a>
              <a href="tel:+971526955656" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#DC2626]">
                <Phone size={11} /> +971 52 695 5656
              </a>
            </div>

            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                      location.pathname === link.href
                        ? 'text-[#DC2626] bg-[#FFEBEB]'
                        : 'text-gray-700 hover:text-[#DC2626] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 mt-0.5 mb-1 border-l-2 border-gray-100 pl-3 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-xs text-gray-500 hover:text-[#DC2626] rounded-md hover:bg-[#FFEBEB] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: '#1a6fc4' }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
