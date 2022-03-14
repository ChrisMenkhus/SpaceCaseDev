import Tag from '../types/Tag'

import React, { createContext, useState } from 'react'

interface ContextInterface {
  store: {
    searchInput: string
    searchTags: Tag[]
  }
  actions: {
    setSearchInput: (value: string) => void
    setSearchTags: (value: Tag[]) => void
  }
}

export const SearchContext = createContext<ContextInterface | null>(null)

export const SearchContextStore = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const defaultSearchTags: Tag[] = [
    { label: 'React', checked: true, default: true },
    { label: 'NextJs', checked: false, default: true },
    { label: 'Javascript', checked: false, default: true },
    { label: 'NodeJs', checked: false, default: true },
    { label: 'Styled Components', checked: false, default: true },
    { label: 'Typescript', checked: false, default: true },
  ]

  const [store, setStore] = useState({
    searchInput: '',
    searchTags: defaultSearchTags,
  })

  const [actions] = useState({
    setSearchInput: (value: string) => {
      setStore({ ...store, searchInput: value })
    },
    setSearchTags: (value: Tag[]) => {
      setStore({ ...store, searchTags: value })
    },
  })

  return (
    <SearchContext.Provider
      value={{
        store,
        actions,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
