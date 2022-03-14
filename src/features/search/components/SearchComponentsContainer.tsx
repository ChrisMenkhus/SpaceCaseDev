import { HTMLAttributes } from 'react'

type SearchComponentsContainerProps = HTMLAttributes<HTMLElement>

const SearchComponentsContainer = ({
  ...props
}: SearchComponentsContainerProps) => {
  return (
    <div className="flex relative flex-col gap-16">
      <>{props.children}</>
    </div>
  )
}

export default SearchComponentsContainer
