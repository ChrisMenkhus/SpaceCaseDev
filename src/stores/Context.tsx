import React, { MutableRefObject, createContext, useRef } from 'react'

interface ContextInterface {
  contactRef: MutableRefObject<HTMLDivElement | null>
}

export const Context = createContext<ContextInterface | null>(null)

type ContextStoreProps = React.HTMLAttributes<HTMLDivElement>

export const ContextStore = ({ ...props }: ContextStoreProps) => {
  const contactRef = useRef<HTMLDivElement | null>(null)

  return (
    <Context.Provider
      value={{
        contactRef,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
