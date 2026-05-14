import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ tag, title, highlight, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55 }}
      className={`mb-10 sm:mb-14 ${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <div className={`mb-3 sm:mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <span className="tag">{tag}</span>
        </div>
      )}
      <h2
        className="font-bold leading-tight mb-3 text-gray-900"
        style={{ fontSize: 'clamp(1.65rem, 5.5vw, 2.9rem)' }}
      >
        {highlight ? (
          <>{title}<span className="gradient-text-gold">{highlight}</span></>
        ) : title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl leading-relaxed text-gray-500 ${centered ? 'mx-auto' : ''}`}
          style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
