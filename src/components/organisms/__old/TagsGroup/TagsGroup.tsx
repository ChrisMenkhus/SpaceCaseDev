import Tag from '!types/Tag'
import { XIcon } from '@heroicons/react/outline'
import addNewTag from '@utils/addNewTag'
import makeStyles from '@utils/makeStyles'
import setTagChecked from '@utils/setTagChecked'
import truncateString from '@utils/truncateString'
import { useRouter } from 'next/router'
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

type TagsGroupProps = HTMLAttributes<HTMLUListElement> & {
  searchTags?: Tag[]
  stackTags: string[]
  updateTags?: (updatedTags: Tag[] | []) => void
}

export const TagsGroup = ({
  className = '',
  searchTags,
  stackTags,
  updateTags,
}: TagsGroupProps) => {
  const router = useRouter()



  return (
    <ul
      className={makeStyles([
        'flex items-center w-full max-w-fit justify-start flex-wrap',
        className,
      ])}
    >
      {stackTags.map((element, i) => {
          return (
            <Tag
              key={element}
              addTag={() => {
                if (router.pathname  === '/' || '') {
                  router.push('/testing/?tag=' + element)
                } else {
                  searchTags && updateTags && updateTags(addNewTag(searchTags, { label: element, checked: true, isDefaultTag: false }))
                }
              }
              }
            >
              {truncateString(element, 7, true)}
            </Tag>
          )
      })}

    </ul>
  )
}

TagsGroup.displayName = 'TagsGroupComponent'
