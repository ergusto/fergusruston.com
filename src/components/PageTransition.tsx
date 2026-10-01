import { useLocation } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'

export function PageTransition() {
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    // initial={false} keeps the prerendered page uncovered until a client-side navigation happens
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        aria-hidden
        className="page-wipe"
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />
    </AnimatePresence>
  )
}
