import truncateString from '@utils/truncateString'
import { HTMLAttributes } from 'react'

type TagsListItemProps = HTMLAttributes<HTMLElement> & {
  callback?: () => void
  Icon?: React.ElementType
  children: string
}

export const TagsListItem = ({
  Icon,
  callback,
  children,
}: TagsListItemProps) => {
  const hasIcon = Boolean(Icon)
  const text = truncateString(children || '', 7, true)

  switch (hasIcon) {
    case true:
      return (
        <TagItemWrapper>
          {text}
          <button onClick={() => callback && callback()}>
            <div className="m-auto ml-1 w-4 h-4">{Icon ? <Icon /> : <></>}</div>
          </button>
        </TagItemWrapper>
      )
    case false:
      return (
        <TagItemWrapper>
          <button onClick={() => callback && callback()}>{text}</button>
        </TagItemWrapper>
      )
  }
}

const TagItemWrapper = ({ ...props }: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="flex flex-row flex-nowrap items-center py-1 px-2 leading-snug text-white whitespace-nowrap bg-primary rounded transition-transform hover:scale-105">
      {props.children}
    </li>
  )
}

TagsListItem.displayName = 'TagsListItemComponent'
