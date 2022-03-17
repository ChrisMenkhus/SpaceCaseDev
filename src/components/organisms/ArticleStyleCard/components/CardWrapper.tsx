import { HTMLAttributes } from 'react'

type CardWrapperProps = HTMLAttributes<HTMLElement> & {}

export function CardWrapper({ ...props }: CardWrapperProps) {
  return (
    <article className="relative before:absolute before:-top-8 before:sm:-left-8 before:-z-10 z-10 mt-8 before:w-40 max-w-screen-lg before:h-40 before:bg-primary before:rounded-md before:shadow-md ">
      <div className="flex overflow-hidden flex-col w-full max-w-screen-xl h-full text-black dark:text-white bg-white dark:bg-dark rounded shadow-lg md:flex-row">
        {props.children}
      </div>
    </article>
  )
}

CardWrapper.displayName = 'ArticleStyleCardComponent'
