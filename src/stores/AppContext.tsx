import React, { MutableRefObject, createContext, useRef, useState } from 'react'

interface ContextInterface {
  store: {
    showMobileNavMenu: boolean
    blockLazyLoading: boolean
    aboutRef: MutableRefObject<HTMLDivElement | null>
  }
  actions: {
    setShowMobileNavMenu: (state: boolean) => void
    scrollToAboutRef: () => void
  }
}

export const AppContext = createContext<ContextInterface | null>(null)

export const AppContextStore = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const aboutRef = useRef<HTMLDivElement | null>(null)

  const [store, setStore] = useState({
    aboutRef: aboutRef,
    showMobileNavMenu: false,
    blockLazyLoading: false,
  })

  const [actions] = useState({
    setShowMobileNavMenu: (state: boolean) => {
      setStore({
        ...store,
        showMobileNavMenu: state,
      })
    },
    scrollToAboutRef: () => {
      store.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    },
  })

  return (
    <AppContext.Provider
      value={{
        store,
        actions,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
