import { useEffect } from 'react'

function useTimeout(callback: () => void, delay?: number) {
  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const timeout = setTimeout(() => callback(), delay)

    return () => clearTimeout(timeout)
  }, [delay, callback])
}

export default useTimeout
