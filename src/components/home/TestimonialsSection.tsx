import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const testimonials = [
  { name: 'Ahmed Al Rashidi', role: 'CTO, Emirates Infrastructure Group', rating: 5, text: "Techbiomatic delivered our smart city platform on time and exceeded all performance benchmarks. Their team's expertise in IoT and AI is truly world-class." },
  { name: 'Sarah Johnson', role: 'VP Technology, Gulf Healthcare', rating: 5, text: 'The AI diagnostics platform they built has transformed our clinical workflows. Patient outcomes have improved significantly since deployment.' },
  { name: 'Mohammed Al Farsi', role: 'Director IT, Federal Government Entity', rating: 5, text: 'Their ERP implementation was seamless. The team understood our unique government requirements and delivered a solution that truly works for us.' },
  { name: 'Priya Sharma', role: 'Head of Digital, Logistics Corp', rating: 5, text: "The AI route optimizer reduced our operational costs by 35%. Techbiomatic's data science team is exceptional — they delivered beyond expectations." },
  { name: 'Khalid Al Mansoori', role: 'CEO, Real Estate Developer', rating: 5, text: 'From concept to deployment, Techbiomatic was a true partner. Their PropTech platform has modernized our entire property management operation.' },
]

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    const speed = 0.45
    let animId: number
    let paused = false

    const animate = () => {
      if (!paused) {
        pos -= speed
        const half = track.scrollWidth / 2
        if (Math.abs(pos) >= half) pos = 0
        track.style.transform = `translateX(${pos}px)`
      }
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const pause = () => { paused = true }
    const resume = () => { paused = false }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)
    track.addEventListener('touchstart', pause, { passive: true })
    track.addEventListener('touchend', resume)

    return () => {
      cancelAnimationFrame(animId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
      track.removeEventListener('touchstart', pause)
      track.removeEventListener('touchend', resume)
    }
  }, [])

  const all = [...testimonials, ...testimonials]

  return (
    <section className="relative section-padding bg-white">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader tag="Client Testimonials" title="What Our Clients " highlight="Say"
          description="Trusted by leading enterprises across the UAE and Middle East. Here's what they have to say about working with us." />
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max" style={{ gap: 'clamp(12px, 3vw, 20px)', paddingLeft: '16px' }}>
          {all.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-white border border-gray-200 rounded-xl shrink-0 shadow-sm"
              style={{ width: 'clamp(260px, 72vw, 320px)', padding: 'clamp(16px, 4vw, 24px)' }}
            >
              <Quote size={20} className="text-[#DC2626]/30 mb-3" />
              <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={11} className="text-[#DC2626] fill-[#DC2626]" />
                ))}
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FFEBEB] flex items-center justify-center text-[#DC2626] font-bold text-sm shrink-0 border border-red-100">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)' }}>{t.name}</div>
                  <div className="text-gray-400" style={{ fontSize: 'clamp(10px, 2vw, 11px)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
