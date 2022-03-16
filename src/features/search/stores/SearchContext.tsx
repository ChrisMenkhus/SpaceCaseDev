import Tag from '../types/Tag'

import React, { createContext, useEffect, useState } from 'react'

interface ContextInterface {
  store: {
    searchInput: string
    searchTags: Tag[]
  }
  actions: {
    setSearchInput: (value: string) => void
    setSearchTags: (value: Tag[]) => void
    createTag: (value: Tag) => void
    updateTag: (value: Tag) => void
    deleteTag: (value: Tag) => void
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

  const [store, setStore] = useState<{
    searchInput: string
    searchTags: Tag[]
  }>({
    searchInput: '',
    searchTags: defaultSearchTags,
  })

  useEffect(() => {
    console.log('\n' + 'STORE' + '\n' + '  ')
    console.log(store.searchTags.filter((element: Tag) => element.checked))
  }, [store])

  // const getMatchingTagsFromStore = (tag: Tag) => {
  //   return (
  //     [...(store.searchTags || [])].filter((element: Tag) => {
  //       if (element.label === tag.label) {
  //         return tag
  //       }
  //     }) || []
  //   )
  // }

  const [actions] = useState({
    setSearchInput: (value: string) => {
      setStore({ ...store, searchInput: value })
    },
    setSearchTags: (value: Tag[]) => {
      setStore({ ...store, searchTags: value })
    },
    createTag: (tag: Tag) => {
      // if (getMatchingTagsFromStore(tag).length < 1) {
      //   setStore({
      //     ...store,
      //     searchTags: [...store.searchTags],
      //   })
      // }
    },
    updateTag: (tag: Tag) => {
      console.log('updating tag: ', tag)

      const updatedTags = [...store.searchTags].map((element: Tag) => {
        if (element.label === tag.label) {
          return tag
        }
        return element
      })

      console.log('updated tags: ', updatedTags)

      setStore({
        ...store,
        searchTags: updatedTags,
      })
    },
    deleteTag: (tag: Tag) => {
      setStore({
        ...store,
        searchTags: [...store.searchTags].filter((element: Tag) => {
          if (element.label !== tag.label) {
            return element
          }
        }),
      })
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
