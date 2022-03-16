import { toggle } from '../searchTagsSlice'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'

const SearchSideBar = ({}: {}) => {
  const tags = useSelector((state: RootState) => state.searchTags.value)
  const defaultTags = tags.filter((element) => element.default === true)
  const dispatch = useDispatch()

  const Tags = () => {
    return (
      <>
        {[...defaultTags].map((element, i) => {
          return (
            <TagsListItem
              key={element.label + i}
              label={element.label}
              toggleTag={() => {
                dispatch(toggle(element))
              }}
              checked={element.checked}
            />
          )
        })}
      </>
    )
  }

  return (
    <ul className="flex flex-row flex-wrap col-span-1 gap-4 justify-center pl-4 mr-auto mb-8 ml-0 w-full sm:flex-col sm:justify-start sm:max-w-xs">
      <li className="text-2xl font-semibold">Tags</li>
      <Tags />
    </ul>
  )
}

const TagsListItem = ({
  label,
  toggleTag,
  checked = false,
}: {
  label: string
  toggleTag: () => void
  checked: boolean
}) => {
  return (
    <ul className="text-xl">
      <input
        type="checkbox"
        name={label}
        id={label}
        className="w-4 h-4 accent-primary"
        checked={checked}
        readOnly
        onClick={() => toggleTag()}
      />
      <label htmlFor={label} className="pl-2">
        {label}
      </label>
    </ul>
  )
}

export default SearchSideBar
