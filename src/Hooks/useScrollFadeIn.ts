import React, { useRef, useEffect, useCallback } from 'react'

type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'center'

export default function useScrollFadeIn<T extends HTMLElement>(
  direction: ScrollDirection,
  duration: number,
  delay: number
): {
  ref: React.RefObject<T>
  style: React.CSSProperties
} {
  const element = useRef<T>(null)
  const handleDirection = (name: ScrollDirection): string | undefined => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 30%, 0)'
      case 'down':
        return 'translate3d(0, -30%, 0)'
      case 'left':
        return 'translate3d(20%, 0, 0)'
      case 'right':
        return 'translate3d(-20%, 0, 0)'
      case 'center':
        return 'translate3d(0, 0, 0) scale(0.9)'
      default:
        return undefined
    }
  }

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = 'all'
        current.style.transitionDuration = `${duration}s`
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
        current.style.transitionDelay = `${delay}s`
        current.style.opacity = '1'
        current.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [delay, duration]
  )
  useEffect(() => {
    let observer: IntersectionObserver

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
