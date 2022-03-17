import { HTMLAttributes } from 'react'

type SearchLayoutProps = HTMLAttributes<HTMLElement>

export const Search = ({ ...props }: SearchLayoutProps) => {
  return (
    <div className={props.className}>
      <>{props.children}</>
    </div>
  )
}
