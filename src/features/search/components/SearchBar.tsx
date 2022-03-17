import { clearInput, update } from '../searchInputSlice'
import { clearToggledTags, remove, toggle } from '../searchTagsSlice'

import { TagsList } from '@components/organisms/Tags/TagsList'
import { TagsListItem } from '@components/organisms/Tags/TagsListItem'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { HTMLAttributes } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'

type SearchBarProps = HTMLAttributes<HTMLInputElement>

export const SearchBar = ({ ...props }: SearchBarProps) => {
  const inputValue = useSelector((state: RootState) => state.searchInput.value)

  const tags = useSelector((state: RootState) => state.searchTags.value)
  const checkedTags = tags.filter(({ checked }) => checked === true)
  const dispatch = useDispatch()

  return (
    <div
      className={makeStyles([
        'mb-8 mx-4 lg:mx-auto lg:w-full max-w-screen-lg col-span-3 h-fit',
        props.className || '',
      ])}
    >
      <div className="flex relative gap-4 justify-center items-center py-1 mx-auto bg-white dark:bg-dark rounded-sm border-2 border-gray dark:border-primary">
        <div className="mr-auto ml-4">
          <div className="w-6 h-6 text-dark dark:text-white">
            <SearchIcon />
          </div>
        </div>
        <TagsList>
          {checkedTags.map((element, index) => {
            return (
              <TagsListItem
                key={element.label + index}
                Icon={XIcon}
                callback={() => {
                  dispatch(element.default ? toggle(element) : remove(element))
                }}
              >
                {element.label}
              </TagsListItem>
            )
          })}
        </TagsList>
        <input
          className="w-full h-12 text-lg bg-white dark:bg-dark focus:outline-none"
          type="search"
          name="search"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => {
            dispatch(update(e.target.value))
          }}
        />
        <button
          type="submit"
          className="mr-4 ml-auto"
          onClick={() => {
            dispatch(clearInput())
            dispatch(clearToggledTags())
          }}
        >
          <div className="w-6 h-6 text-primary">
            <XIcon />
          </div>
        </button>

        {/* CLEAR BUTTON TO CLEAR INPUT AND CALL CLEAR ON TAGS MAKE CLEAR TAG FUNCTION ON REDUX */}
      </div>
    </div>
  )
}
