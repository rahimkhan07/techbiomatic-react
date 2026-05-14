import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const VP = { once: true, margin: '0px 0px -80px 0px' }

export default function CTASection() {
  return (
    <section className="relative bg-[#DC2626]" style={{ padding: 'clamp(56px, 10vw, 96px) 0' }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px] bg-white/10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px] bg-white/10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VP} transition={{ duration: 0.55 }}>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-5 border border-white/30">
            Ready to Transform?
          </span>

          <h2 className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 7vw, 3.8rem)' }}>
            Let's Build the Future Together
          </h2>

          <p className="text-white/80 leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.05rem)' }}>
            Partner with Techbiomatic Middle East to unlock the full potential of technology for your business. Our experts are ready to design your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10 px-2 sm:px-0">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#DC2626] font-bold rounded-lg transition-all hover:bg-gray-50 hover:shadow-lg"
              style={{ padding: '13px 28px', fontSize: '14px' }}>
              Start Your Project <ArrowRight size={17} />
            </Link>
            <a href="https://wa.me/971526955656" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all border border-white/40 text-white hover:bg-white/10"
              style={{ padding: '13px 28px', fontSize: '14px' }}
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-white/20">
            {['ISO Certified', 'UAE Licensed', '24/7 Support', 'NDA Protected'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
