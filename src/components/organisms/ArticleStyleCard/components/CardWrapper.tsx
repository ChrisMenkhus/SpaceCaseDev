import { HTMLAttributes } from 'react'

type CardWrapperProps = HTMLAttributes<HTMLElement> & {}

export function CardWrapper({ ...props }: CardWrapperProps) {
  return (
    <article className="relative mt-8 max-w-screen-lg ">
      <div className="flex overflow-hidden flex-col w-full max-w-screen-xl h-full text-black dark:text-white bg-white dark:bg-dark rounded shadow-lg md:flex-row">
        {props.children}
      </div>
    </article>
  )
}

CardWrapper.displayName = 'ArticleStyleCardComponent'
