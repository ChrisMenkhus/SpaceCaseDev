import makeStyles from '@utils/makeStyles'
import { useEffect, useRef, useState } from 'react'

type LazyRenderProps = {
  children: JSX.Element | JSX.Element[] | null
  threshold?: number
  rootMargin?: string
  blockLazy?: boolean
}

export function LazyRender({
  children,
  threshold,
  rootMargin,
  blockLazy,
}: LazyRenderProps) {
  // const ref = useMemo(() => createRef<HTMLDivElement>(), [])
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (blockLazy) {
      setIsVisible(true)
      return
    }

    if (!ref.current || blockLazy) {
      return
    }

    const options = {
      rootMargin: rootMargin,
      threshold: threshold,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
    <div ref={ref} className={makeStyles([!isVisible && 'my-16 min-h-[30vh]'])}>
      {isVisible && children}
    </div>
  )
}
