import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

function overlaps(a: DOMRect, b: DOMRect) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
}

export function useIsClearOfChildren(
  target: RefObject<Element | null>,
  container: RefObject<Element | null>,
) {
  const [isClear, setIsClear] = useState(false)

  useEffect(() => {
    const update = () => {
      if (!target.current || !container.current) return
      const targetBox = target.current.getBoundingClientRect()
      setIsClear(
        [...container.current.children].every(
          (child) => !overlaps(targetBox, child.getBoundingClientRect()),
        ),
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [target, container])

  return isClear
}
