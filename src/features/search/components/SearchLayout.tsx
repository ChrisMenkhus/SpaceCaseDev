import { HTMLAttributes } from 'react'

type SearchLayoutProps = HTMLAttributes<HTMLElement>

export const SearchLayout = ({ ...props }: SearchLayoutProps) => {
  return (
    <div className={props.className}>
      <>{props.children}</>
    </div>
  )
}
