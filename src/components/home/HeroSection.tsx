import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fit=crop',
    headline: 'WE ENGINEER',
    subheadline: 'INTELLIGENT SOLUTIONS',
    description: 'Techbiomatic Middle East delivers cutting-edge technology and engineering solutions that transform enterprises across the UAE and beyond.',
    primaryBtn: { label: 'Explore Services', href: '/services' },
    secondaryBtn: { label: 'Contact Us', href: '/contact' },
  },
  {
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80&fit=crop',
    headline: 'AI & AUTOMATION',
    subheadline: 'POWERING YOUR FUTURE',
    description: 'Transform repetitive processes into smart workflows. Our AI solutions learn, adapt, and deliver measurable ROI from day one.',
    primaryBtn: { label: 'AI Solutions', href: '/services#ai-automation' },
    secondaryBtn: { label: 'See Projects', href: '/projects' },
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80&fit=crop',
    headline: 'CLOUD & SECURITY',
    subheadline: 'BUILT FOR ENTERPRISE',
    description: 'Migrate, modernize, and secure your infrastructure on AWS, Azure, and Google Cloud with enterprise-grade protection.',
    primaryBtn: { label: 'Cloud Services', href: '/services#cloud' },
    secondaryBtn: { label: 'Learn More', href: '/about' },
  },
  {
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80&fit=crop',
    headline: 'SMART INFRASTRUCTURE',
    subheadline: 'CONNECTING THE FUTURE',
    description: 'IoT-enabled smart building, city, and industrial infrastructure solutions that connect physical assets to digital intelligence.',
    primaryBtn: { label: 'Infrastructure', href: '/services#smart-infrastructure' },
    secondaryBtn: { label: 'Get a Quote', href: '/contact' },
  },
]

const marqueeItems = [
  '200+ Projects Delivered',
  '50+ Enterprise Clients',
  '12+ Industries Served',
  '5+ Years of Excellence',
  'ISO Certified',
  'UAE Licensed',
  '24/7 Support',
  'NDA Protected',
  'Dubai Headquartered',
  'AI & Cloud Experts',
]

const SLIDE_DURATION = 5000

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(slides.map(() => false))
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currentRef = useRef(0)

  useEffect(() => { currentRef.current = current }, [current])

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir); setCurrent(index)
  }, [])

  const next = useCallback(() => {
    const idx = (currentRef.current + 1) % slides.length
    setDirection(1); setCurrent(idx)
  }, [])

  const prev = useCallback(() => {
    const idx = (currentRef.current - 1 + slides.length) % slides.length
    setDirection(-1); setCurrent(idx)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, SLIDE_DURATION)
  }, [next])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  // Preload images
  useEffect(() => {
    slides.forEach((slide, i) => {
      const img = new Image()
      img.src = slide.image
      img.onload = () => setImagesLoaded((prev) => { const n = [...prev]; n[i] = true; return n })
    })
  }, [])

  const manualNext = () => { next(); resetTimer() }
  const manualPrev = () => { prev(); resetTimer() }
  const manualGoTo = (i: number) => { goTo(i, i > currentRef.current ? 1 : -1); resetTimer() }

  const slide = slides[current]

  const textVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <>
      {/* ── Slider ─────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: 'clamp(82px, 12vw, 132px)', minHeight: '580px' }}
      >
        {/* Background image — crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              backgroundImage: imagesLoaded[current] ? `url(${slide.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#e8ecf1',
            }}
          />
        </AnimatePresence>

        {/* Dark overlay so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.55) 100%)' }}
        />

        {/* Slide text */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-16"
          style={{ minHeight: '460px', paddingTop: '48px', paddingBottom: '72px' }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`slide-${current}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl mx-auto w-full"
            >
              <h1
                className="font-black text-white leading-[1.1] tracking-tight mb-2 drop-shadow-lg"
                style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
              >
                {slide.headline}
              </h1>
              <h2
                className="font-black leading-[1.1] tracking-tight mb-6 drop-shadow-lg"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 3.2rem)', color: '#FF6B6B' }}
              >
                {slide.subheadline}
              </h2>
              <p
                className="text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
              >
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to={slide.primaryBtn.href}
                  className="btn-primary"
                  style={{ minWidth: '170px', boxShadow: '0 4px 16px rgba(220,38,38,0.4)' }}
                >
                  {slide.primaryBtn.label}
                </Link>
                <Link
                  to={slide.secondaryBtn.href}
                  style={{
                    minWidth: '150px', padding: '12px 28px', borderRadius: '8px',
                    border: '2px solid rgba(255,255,255,0.7)', color: '#fff',
                    fontWeight: 600, fontSize: '14px', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s', backdropFilter: 'blur(4px)',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                >
                  {slide.secondaryBtn.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ← Prev */}
        <button
          onClick={manualPrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', backdropFilter: 'blur(6px)' }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* → Next */}
        <button
          onClick={manualNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', backdropFilter: 'blur(6px)' }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => manualGoTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                background: i === current ? '#DC2626' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'rgba(255,255,255,0.2)' }}>
          <motion.div
            key={`progress-${current}`}
            className="h-full"
            style={{ background: '#DC2626' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
          />
        </div>
      </div>

      {/* ── Marquee stats bar ──────────────────────────────── */}
      <div
        style={{
          background: '#DC2626',
          overflow: 'hidden',
          padding: '12px 0',
          position: 'relative',
        }}
      >
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #DC2626, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #DC2626, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {/* Duplicate for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                color: '#fff', fontSize: '13px', fontWeight: 600,
                padding: '0 28px', letterSpacing: '0.04em',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', display: 'inline-block', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}
