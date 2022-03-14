import Tag from '../types/Tag'

const SearchSideBar = ({
  searchTags,
  mutateSearchTags,
}: {
  searchTags: Tag[]
  mutateSearchTags: (
    actionType: 'create' | 'update' | 'delete',
    tag: Tag
  ) => void
}) => {
  return (
    <ul className="flex flex-row flex-wrap gap-4 justify-center pl-4 mr-auto mb-8 ml-0 w-full sm:flex-col sm:justify-start sm:max-w-xs">
      <li className="text-2xl font-semibold">Tags</li>
      {searchTags.map((element, i) => {
        if (!element.default) return
        return (
          <TagsListItem
            key={element.label + i}
            label={element.label}
            toggleTag={() => {
              mutateSearchTags('update', {
                ...element,
                checked: !searchTags[i].checked,
              })
            }}
            checked={element.checked}
          />
        )
      })}
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
        onClick={() => {
          toggleTag()
        }}
      />
      <label htmlFor={label} className="pl-2">
        {label}
      </label>
    </ul>
  )
}

export default SearchSideBar
