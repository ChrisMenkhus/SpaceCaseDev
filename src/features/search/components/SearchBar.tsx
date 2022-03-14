import Tag from '../types/Tag'

import { TagsList } from '@components/organisms/Tags/TagsList'
import { TagsListItem } from '@components/organisms/Tags/TagsListItem'
import { SearchTagsGroup } from '@components/organisms/__old/SearchTagsGroup'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { HTMLAttributes, useEffect, useState } from 'react'

type SearchBarProps = HTMLAttributes<HTMLInputElement> & {
  inputValue: string
  setInputValue: (value: string) => void
  searchTags: Tag[]
  mutateSearchTags: (
    actionType: 'create' | 'update' | 'delete',
    tag: Tag
  ) => void
}

export const SearchBar = ({
  inputValue,
  setInputValue,
  searchTags,
  mutateSearchTags,
  ...props
}: SearchBarProps) => {
  const handleInput = (value: string) => setInputValue(value)
  const clearInput = () => setInputValue('')

  const SearchTags = searchTags.map((element, i) => {
    if (element.checked)
      return (
        <TagsListItem
          key={element.label}
          Icon={XIcon}
          callback={() => {
            console.log('calling back')
            mutateSearchTags('update', {
              ...element,
              checked: false,
            })
          }}
        >
          {element.label}
        </TagsListItem>
      )
  })

  return (
    <div
      className={makeStyles([
        'mb-8 w-full max-w-screen-lg flex-shrink-0',
        props.className || '',
      ])}
    >
      <div className="flex relative gap-4 justify-center items-center py-1 mx-auto bg-white dark:bg-dark rounded-sm border-2 border-gray dark:border-primary">
        <div className="mr-auto ml-4">
          <LeftIcon />
        </div>
        <TagsList>{SearchTags}</TagsList>
        <input
          className="w-full h-12 text-lg bg-white dark:bg-dark focus:outline-none"
          type="search"
          name="search"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => {
            handleInput(e.target.value)
          }}
        />
        <button
          type="submit"
          className="mr-4 ml-auto"
          onClick={() => clearInput()}
        >
          <RightIcon />
        </button>
      </div>
    </div>
  )
}

export const LeftIcon = () => {
  return (
    <div className="w-6 h-6 text-dark dark:text-white">
      <SearchIcon />
    </div>
  )
}

export const RightIcon = () => {
  return (
    <div className="w-6 h-6 text-primary">
      <XIcon />
    </div>
  )
}
