import React, { RefObject, createContext, useRef, useState } from 'react'

interface ContextInterface {
  store: {
    showMobileNavMenu: boolean
    aboutRef: RefObject<HTMLDivElement>
  }
  actions: {
    setShowMobileNavMenu: (state: boolean) => void
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
    showMobileNavMenu: false,
    aboutRef: aboutRef,
  })

  const [actions] = useState({
    setShowMobileNavMenu: (state: boolean) => {
      setStore({
        ...store,
        showMobileNavMenu: state,
      })
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
