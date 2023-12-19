import { useRef, useEffect, useCallback } from 'react'

export default function useScrollFadeIn(
  direction: 'up' | 'down' | 'left' | 'right',
  duration: number,
  delay: number
): {
  ref: React.RefObject<any>
  style: React.CSSProperties
} {
  const element = useRef()
  const handleDirection = (name: string): string | undefined => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)'
      case 'down':
        return 'translate3d(0, -50%, 0)'
      case 'left':
        return 'translate3d(50%, 0, 0)'
      case 'right':
        return 'translate3d(-50%, 0, 0)'
      default:
        return undefined
    }
  }

  const onScroll = useCallback(
    ([entry]: any) => {
      const { current }: any = element
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all'
        current.style.transitionDuration = `${duration}s`
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
        current.style.transitionDelay = `${delay}s`
        current.style.opacity = 1
        current.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [delay, duration]
  )
  useEffect(() => {
    let observer: any

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.3 })
      observer.observe(element.current)
    }

    return () => observer && observer.disconnect()
  }, [onScroll])

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  }
}
