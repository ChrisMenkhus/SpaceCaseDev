import { XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { HTMLAttributes } from 'react'

const CloseIcon = ({ showCloseIcon }: { showCloseIcon?: boolean }) => {
  if (!showCloseIcon) return <></>
  else
    return (
      <div className="m-auto ml-1 w-4 h-4">
        <XIcon />
      </div>
    )
}

type TagProps = HTMLAttributes<HTMLLIElement> & {
  showCloseIcon?: boolean
}

const Tag = ({ ...props }: TagProps) => {
  return (
    <li className="flex flex-row items-center px-2 mr-2 mb-2 leading-snug text-white bg-secondary rounded">
      {props.children}
      <CloseIcon {...props} />
    </li>
  )
}

type TagsGroupProps = HTMLAttributes<HTMLUListElement> & {
  tags: string[]
}

export const TagsGroup = ({ className = '', tags }: TagsGroupProps) => {
  return (
    <ul
      className={makeStyles([
        'flex items-center w-full justify-start flex-wrap',
        className,
      ])}
    >
      {tags.map((element, i) => {
        return <Tag key={element + i}>{element}</Tag>
      })}
    </ul>
  )
}

TagsGroup.displayName = 'TagsGroupComponent'
