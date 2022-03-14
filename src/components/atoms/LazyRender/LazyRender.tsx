import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from 'src/stores/AppContext'

type LazyRenderProps = {
  children: JSX.Element | JSX.Element[] | null
  threshold?: number
  rootMargin?: string
  name?: string
}

export const LazyRender = ({
  children,
  threshold = 0,
  rootMargin = '200px',
}: LazyRenderProps) => {
  const context = useContext(AppContext)

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const blockLazy = Boolean(context?.store.blockLazyLoading)

  useEffect(() => {
    if (blockLazy) {
      setIsVisible(true)
      return
    }

    if (!ref.current) {
      return
    }

    const options = {
      rootMargin,
      threshold,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setIsVisible(true)
        }
      })
    }, options)

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, ref, blockLazy])

  return (
    <div ref={ref} className="min-h-[400px]">
      {isVisible && children}
    </div>
  )
}
