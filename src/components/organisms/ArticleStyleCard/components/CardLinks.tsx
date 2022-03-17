import { Link } from '@components/atoms'
import { BookOpenIcon } from '@heroicons/react/outline'
import { HTMLAttributes } from 'react'

type CardLinksProps = HTMLAttributes<HTMLElement> & {
  linkPaths?: {
    path: string
    label: string
  }[]
}

export const CardLinks = ({ linkPaths }: CardLinksProps) => {
  if (linkPaths) {
    return (
      <div className="flex flex-row gap-4">
        {linkPaths &&
          linkPaths.map((element, i) => {
            return (
              <Link
                size="sm"
                Icon={BookOpenIcon}
                className=""
                key={element.label + i}
                href={element.path}
              >
                {element.label}
              </Link>
            )
          })}
      </div>
    )
  } else return <></>
}

CardLinks.displayName = 'CardLinks'
