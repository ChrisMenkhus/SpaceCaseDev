import { MutableRefObject, useEffect, useState } from 'react'

export function useOnScreen(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // if (entry.isIntersecting) {
      setIntersecting(entry.isIntersecting)
      console.log('log')
      // }
    })
    if (ref.current) {
      console.log('observing')
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
