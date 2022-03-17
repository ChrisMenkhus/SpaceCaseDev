import { HTMLAttributes } from 'react'

type CardArticleCreditsProps = HTMLAttributes<HTMLElement> & {
  date?: string
  author?: string
}

export const CardArticleCredits = ({
  date,
  author,
}: CardArticleCreditsProps) => {
  const showCredits: boolean = Boolean(date && author)
  if (showCredits) {
    return (
      <small className="flex flex-col justify-center items-center mr-auto ml-0">
        <span className="h-full">{author}</span>
        <span className="mr-auto ml-0 h-full">{date}</span>
      </small>
    )
  } else return <></>
}

CardArticleCredits.displayName = 'CardCreditsListItem'
