import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'

const services = [
  { label: 'IT Solutions', href: '/services#it-solutions' },
  { label: 'Engineering Consultancy', href: '/services#engineering' },
  { label: 'AI Automation', href: '/services#ai-automation' },
  { label: 'Cloud Services', href: '/services#cloud' },
  { label: 'Cybersecurity', href: '/services#cybersecurity' },
  { label: 'Data Analytics', href: '/services#data-analytics' },
  { label: 'Smart Infrastructure', href: '/services#smart-infrastructure' },
  { label: 'Enterprise Solutions', href: '/services#enterprise' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    LinkedIn: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    Twitter: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    Facebook: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    Instagram: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/></svg>,
    YouTube: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>,
  }
  return <>{icons[type]}</>
}

const socials = [
  { type: 'LinkedIn', href: '#', label: 'LinkedIn' },
  { type: 'Twitter', href: '#', label: 'Twitter' },
  { type: 'Facebook', href: '#', label: 'Facebook' },
  { type: 'Instagram', href: '#', label: 'Instagram' },
  { type: 'YouTube', href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Subtle top border accent */}
      <div className="h-1 bg-[#DC2626]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-12 sm:py-14 border-b border-white/10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-5">
              <img
                src="/logo.png"
                alt="Techbiomatic"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Engineering intelligent business solutions for the future. Premier technology and engineering company based in Dubai, UAE.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={13} className="text-[#DC2626] mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">6th Floor, Meydan Grandstand, Meydan Road, Nad Al Sheba, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={13} className="text-[#DC2626] shrink-0" />
                <a href="tel:+971526955656" className="text-xs hover:text-[#DC2626] transition-colors">+971 52 695 5656</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={13} className="text-[#DC2626] shrink-0" />
                <a href="mailto:info@techbiomatic.ae" className="text-xs hover:text-[#DC2626] transition-colors break-all">info@techbiomatic.ae</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock size={13} className="text-[#DC2626] shrink-0" />
                <span className="text-xs">Mon–Fri: 9:00 AM – 6:00 PM GST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#DC2626] transition-colors group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#DC2626] transition-colors group">
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">Newsletter</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">Stay updated with the latest insights in technology and engineering.</p>

            {subscribed ? (
              <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-[#FFEBEB] border border-red-200 rounded-lg p-4 text-center">
                <div className="text-[#DC2626] font-semibold text-sm">Thank you!</div>
                <div className="text-gray-500 text-xs mt-1">We'll keep you updated.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg text-white text-xs placeholder-gray-500 outline-none focus:border-[#DC2626] transition-colors"
                  style={{ padding: '10px 12px' }}
                  required
                />
                <button type="submit"
                  className="shrink-0 rounded-lg flex items-center justify-center transition-all hover:shadow-lg bg-[#DC2626] hover:bg-[#B91C1C]"
                  style={{ padding: '10px 12px' }}>
                  <Send size={14} className="text-white" />
                </button>
              </form>
            )}

            {/* Map */}
            <div className="mt-4 map-container overflow-hidden rounded-lg" style={{ height: 110 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.3047!3d25.1512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5b5b5b5b5%3A0x0!2sMeydan+Grandstand!5e0!3m2!1sen!2sae!4v1"
                width="100%" height="110"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techbiomatic Office Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col items-center gap-3 sm:gap-4">
          <div className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Techbiomatic Middle East L.L.C-FZ. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#DC2626] transition-all duration-300">
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
