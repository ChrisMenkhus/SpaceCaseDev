import { useEffect, useRef } from 'react'

function useTimeout(callback: () => void, delay?: number) {
  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const timeout = setTimeout(() => callback(), delay)

    console.log('timer started')

    return () => clearTimeout(timeout)
  }, [delay, callback])
}

export default useTimeout
