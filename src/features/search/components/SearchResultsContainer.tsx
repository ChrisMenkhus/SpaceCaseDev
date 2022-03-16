import { HTMLAttributes } from 'react'

type SearchResultsContainerProps = HTMLAttributes<HTMLElement>

const SearchResultsContainer = ({ ...props }: SearchResultsContainerProps) => {
  return (
    <div className="container flex relative flex-col col-span-2 gap-16 w-screen max-w-full">
      <>{props.children}</>
    </div>
  )
}

export default SearchResultsContainer
