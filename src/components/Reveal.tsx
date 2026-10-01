import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

const rule = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 0.7, ease } },
}

const content = {
  hidden: { opacity: 0, y: 20 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15, ease } },
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      <motion.div className="rule" style={{ originX: 0 }} variants={rule} />
      <motion.div variants={content}>{children}</motion.div>
    </motion.div>
  )
}
