import Tag from '!types/Tag'
import { XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import setTagChecked from '@utils/setTagChecked'
import truncateString from '@utils/truncateString'
import { HTMLAttributes } from 'react'

const CloseIcon = () => {
  return (
    <div className="m-auto ml-1 w-4 h-4">
      <XIcon />
    </div>
  )
}

type TagProps = HTMLAttributes<HTMLLIElement> & {
  showCloseIcon?: boolean
  removeTag?: () => void
  addTag?: () => void
} 

const Tag = ({ ...props }: TagProps) => {
  return (
    <li className="flex flex-row flex-nowrap items-center py-1 px-2 leading-snug text-white bg-primary rounded">
      {props.addTag ?
        <button onClick={() => props.addTag && props.addTag()}>
          {props.children}
        </button> : props.children}
      {props.removeTag && (
        <button onClick={() => props.removeTag && props.removeTag()}>
          <CloseIcon />
        </button>
      )}
    </li>
  )
}

type SearchTagsGroupProps = HTMLAttributes<HTMLUListElement> & {
  tags: Tag[]
  updateTags?: (updatedTags: Tag[] | []) => void
}

export const SearchTagsGroup = ({
  className = '',
  tags,
  updateTags,
}: SearchTagsGroupProps) => {
  return (
    <ul
      className={makeStyles([
        'flex items-center w-full max-w-fit justify-start flex-wrap',
        className,
      ])}
    >
      {tags.map((element, i) => {
        if (element.checked) {
          return (
            <Tag
              key={element.label}
              removeTag={() => {
                if (updateTags) {
                  updateTags(setTagChecked(tags, element, false))

                }
              }
              }
            >
              {truncateString(element.label, 7, true)}
            </Tag>
          )
        } else return
      })}
    </ul>
  )
}

SearchTagsGroup.displayName = 'TagsGroupComponent'
