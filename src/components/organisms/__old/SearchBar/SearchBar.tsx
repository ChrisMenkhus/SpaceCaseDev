import { SearchTagsGroup } from '../SearchTagsGroup'

import Tag from '!types/Tag'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { HTMLAttributes, useEffect, useState } from 'react'

type SearchBarProps = HTMLAttributes<HTMLInputElement> & {
  tags?: Tag[] | []
  updateTags: (updatedTags: Tag[]) => void
  inputValue: string
  setInputValue: (value: string) => void
}

export const SearchBar = ({
  tags,
  updateTags,
  inputValue,
  setInputValue,
  ...props
}: SearchBarProps) => {
  return (
    <div
      className={makeStyles([
        'mb-8 w-full max-w-screen-lg',
        props.className || '',
      ])}
    >
      <div className="flex relative gap-4 justify-center items-center py-1 mx-auto bg-white dark:bg-dark rounded-sm border-2 border-gray dark:border-primary">
        <div className="mr-auto ml-4">
          <div className="w-6 h-6 text-dark dark:text-white">
            <SearchIcon />
          </div>
        </div>
        <SearchTagsGroup
          tags={tags || []}
          updateTags={updateTags}
          className="flex-nowrap gap-1"
        />
        <input
          className="w-full h-12 text-lg bg-white dark:bg-dark focus:outline-none"
          type="search"
          name="search"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button
          type="submit"
          className="mr-4 ml-auto"
          onClick={() => setInputValue('')}
        >
          <div className="w-6 h-6 text-primary">
            <XIcon />
          </div>
        </button>
      </div>
    </div>
  )
}
