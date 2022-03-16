import { HTMLAttributes } from 'react'

type SearchResultsContainerProps = HTMLAttributes<HTMLElement>

const SearchResultsContainer = ({ ...props }: SearchResultsContainerProps) => {
  return (
    <div className="flex relative flex-col col-span-2 gap-16">
      <>{props.children}</>
    </div>
  )
}

export default SearchResultsContainer
