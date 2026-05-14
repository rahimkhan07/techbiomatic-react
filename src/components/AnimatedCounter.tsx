import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2.5,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const steps = 60
    const stepDuration = (duration * 1000) / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))

      if (current >= steps) {
        setCount(end)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="counter-number gradient-text">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-500 text-sm mt-2 font-medium">{label}</div>
    </div>
  )
}
