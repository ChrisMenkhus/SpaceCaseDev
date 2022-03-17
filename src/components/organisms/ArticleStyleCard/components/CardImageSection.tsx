import { HTMLAttributes } from 'react'

type CardImageSectionProps = HTMLAttributes<HTMLElement>

export function CardImageSection({ ...props }: CardImageSectionProps) {
  return (
    <section className="flex justify-start items-start p-8 w-full md:pr-4 md:w-1/2">
      <div className="flex p-2 py-8 w-full h-fit bg-light transition-all">
        <picture className="overflow-hidden relative m-auto w-full max-w-xs h-56 bg-[#222] border-2 border-light shadow-xl">
          {props.children}
        </picture>
      </div>
    </section>
  )
}

CardImageSection.displayName = 'ArticleStyleCardComponent'
