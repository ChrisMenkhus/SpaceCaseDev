import makeStyles from '@utils/makeStyles'
import { HTMLAttributes } from 'react'

type TagsListProps = HTMLAttributes<HTMLUListElement>

export const TagsList = ({ className = '', ...props }: TagsListProps) => {
  return (
    <ul
      className={makeStyles([
        'flex flex-row gap-2 items-center w-full max-w-fit justify-start',
        className,
      ])}
    >
      {props.children}
    </ul>
  )
}

TagsList.displayName = 'TagsListComponent'
