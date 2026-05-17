import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

// ── Slides ─────────────────────────────────────────────────
// Place your images in /public/slides/ folder:
//   /public/slides/slide1.jpg
//   /public/slides/slide2.jpg
// Until then, Unsplash fallbacks are used.
const slides = [
  {
    image: '/slides/slide1.jpg',
    fallback: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=85&fit=crop',
    tag: 'WELCOME TO TECHBIOMATIC',
    headline1: 'Empowering Laboratories',
    headline2: 'Advancing Research',
    description:
      'Your trusted partner in laboratory innovation, TECHBIOMATIC delivers top-tier equipment and solutions to advance research, healthcare, and academia.',
    primaryBtn: { label: 'Explore Products', href: '/services' },
    secondaryBtn: { label: 'Contact Us', href: '/contact' },
  },
  {
    image: '/slides/slide2.jpg',
    fallback: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1600&q=85&fit=crop',
    tag: 'CUTTING-EDGE SOLUTIONS',
    headline1: 'Precision Instruments',
    headline2: 'for Modern Science',
    description:
      'From biomedical devices to scientific software, we provide comprehensive solutions that meet the highest international standards for laboratories worldwide.',
    primaryBtn: { label: 'Our Products', href: '/services' },
    secondaryBtn: { label: 'About Us', href: '/about' },
  },
]

const marqueeItems = [
  '15+ Years of Experience',
  'Laboratory Equipment',
  'Scientific Instruments',
  'Biomedical Devices',
  'Lab Consumables',
  'Software Solutions',
  'Global Reach',
  'ISO Certified',
  'Customer-Focused Service',
  'Innovation & Expertise',
]

const SLIDE_DURATION = 6000

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [imgSrc, setImgSrc] = useState<string[]>(slides.map((s) => s.fallback))
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currentRef = useRef(0)

  useEffect(() => { currentRef.current = current }, [current])

  // Try loading local images, fall back to Unsplash
  useEffect(() => {
    slides.forEach((slide, i) => {
      const img = new Image()
      img.src = slide.image
      img.onload = () => setImgSrc((prev) => { const n = [...prev]; n[i] = slide.image; return n })
    })
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, SLIDE_DURATION)
  }, [next])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const manualNext = () => { next(); resetTimer() }
  const manualPrev = () => { prev(); resetTimer() }
  const manualGoTo = (i: number) => {
    setDirection(i > currentRef.current ? 1 : -1)
    setCurrent(i)
    resetTimer()
  }

  const slide = slides[current]

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: dir > 0 ? 1.04 : 0.97 }),
    center: { opacity: 1, scale: 1 },
    exit:  (dir: number) => ({ opacity: 0, scale: dir > 0 ? 0.97 : 1.04 }),
  }

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit:  { opacity: 0, y: -20 },
  }

  // Navbar height: 38px top bar + 68px main nav + 1px border = 107px
  const navH = 107

  return (
    <>
      {/* ── HERO SLIDER ──────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden', marginTop: `${navH}px`, minHeight: '520px' }}>

        {/* Background image — crossfade */}
        <AnimatePresence custom={direction} mode="sync">
          <motion.div
            key={`bg-${current}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${imgSrc[current]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1a2a3a',
            }}
          />
        </AnimatePresence>

        {/* Dark gradient overlay — stronger on left for text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
        }} />

        {/* Slide content — LEFT aligned */}
        <div style={{
          position: 'relative', zIndex: 10,
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          minHeight: '520px', display: 'flex', alignItems: 'center',
        }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`text-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ maxWidth: '580px', padding: '80px 0' }}
            >
              {/* Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(220,38,38,0.85)', color: '#fff',
                padding: '5px 14px', borderRadius: '4px',
                fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '20px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', display: 'inline-block' }} />
                {slide.tag}
              </div>

              {/* Headline */}
              <h1 style={{
                color: '#fff', fontWeight: 800, lineHeight: 1.1,
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                marginBottom: '8px', textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}>
                {slide.headline1}
              </h1>
              <h1 style={{
                color: '#fff', fontWeight: 700, lineHeight: 1.1,
                fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                marginBottom: '24px', textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}>
                {slide.headline2}
              </h1>

              {/* Description */}
              <p style={{
                color: 'rgba(255,255,255,0.88)', fontSize: '15px',
                lineHeight: 1.8, marginBottom: '32px', maxWidth: '480px',
              }}>
                {slide.description}
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link to={slide.primaryBtn.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 28px', background: '#DC2626', color: '#fff',
                    borderRadius: '6px', fontSize: '14px', fontWeight: 700,
                    textDecoration: 'none', transition: 'background 0.2s',
                    boxShadow: '0 4px 16px rgba(220,38,38,0.4)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#b91c1c')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#DC2626')}
                >
                  {slide.primaryBtn.label} <ArrowRight size={15} />
                </Link>
                <Link to={slide.secondaryBtn.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 28px',
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(6px)',
                    border: '2px solid rgba(255,255,255,0.6)',
                    color: '#fff', borderRadius: '6px', fontSize: '14px', fontWeight: 600,
                    textDecoration: 'none', transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                >
                  {slide.secondaryBtn.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ← Prev arrow */}
        <button onClick={manualPrev} aria-label="Previous"
          style={{
            position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 20, width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.4)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(220,38,38,0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <ChevronLeft size={22} />
        </button>

        {/* → Next arrow */}
        <button onClick={manualNext} aria-label="Next"
          style={{
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 20, width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.4)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(220,38,38,0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot indicators — bottom center */}
        <div style={{
          position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => manualGoTo(i)} aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? '28px' : '10px', height: '10px',
                borderRadius: '5px', border: 'none', cursor: 'pointer',
                background: i === current ? '#DC2626' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.2)' }}>
          <motion.div
            key={`prog-${current}`}
            style={{ height: '100%', background: '#DC2626', transformOrigin: 'left' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
          />
        </div>
      </div>

      {/* ── MARQUEE BAR ──────────────────────────────────── */}
      <div style={{ background: '#DC2626', overflow: 'hidden', padding: '10px 0', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to right, #DC2626, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to left, #DC2626, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              color: '#fff', fontSize: '13px', fontWeight: 600,
              padding: '0 24px', letterSpacing: '0.04em',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', display: 'inline-block', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}
