import { HTMLAttributes } from 'react'

type CardInfoSectionProps = HTMLAttributes<HTMLElement>

export function CardInfoSection({ ...props }: CardInfoSectionProps) {
  return (
    <section className="p-8 pl-4 w-full max-w-md h-full md:w-1/2 md:max-w-none">
      {props.children}
    </section>
  )
}

CardInfoSection.displayName = 'ArticleStyleCardComponent'
