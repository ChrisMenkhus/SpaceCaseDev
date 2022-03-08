import React, { MutableRefObject, createContext, useRef, useState } from 'react'

interface ContextInterface {
  store: {
    contactRef: MutableRefObject<HTMLDivElement | null>
    aboutRef: MutableRefObject<HTMLDivElement | null>
    blockLazyLoading: boolean
  }
  actions: {
    setBlockLazyLoading: (callback: () => void) => void
  }
}

export const Context = createContext<ContextInterface | null>(null)

export const ContextStore = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const contactRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  const [store, setStore] = useState({
    contactRef: contactRef,
    aboutRef: aboutRef,
    blockLazyLoading: false,
  })

  const [actions] = useState({
    setBlockLazyLoading: (callback: () => void) => {
      setStore({ ...store, blockLazyLoading: true })
      callback()
    },
  })

  return (
    <Context.Provider
      value={{
        store,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}
