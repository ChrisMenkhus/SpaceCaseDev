import React, { createContext, useState } from 'react'

interface ContextInterface {
  store: {
    showMobileNavMenu: boolean
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
  const [store, setStore] = useState({
    showMobileNavMenu: false,
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
