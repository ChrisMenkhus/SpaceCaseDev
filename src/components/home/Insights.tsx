import { Button } from '@components/Elements/Button'
import { BookOpenIcon } from '@heroicons/react/outline'
import createClassName from '@utils/createClassName'
import truncateString from '@utils/truncateString'
import Image from 'next/image'
import { FC } from 'react'

const BlogCardsGroup: FC = ({ children }) => {
  return <div className="flex-row flex-wrap pb-8 flexleft">{children}</div>
}

function BlogArticleCard({
  title,
  text,
  date,
  className = '',
  variant = 'regular',
  imgSrc,
}: {
  title?: string
  text?: string
  date?: string
  className?: string
  variant?: 'regular' | 'large'
  imgSrc?: string
}) {
  return (
    <article
      className={createClassName([
        'mx-4 my-8 flex flex-col w-full min-h-[14rem] max-w-sm bg-white shadow-lg sm:flex-row md:my-4 rounded',
        variant === 'regular' ? 'sm:max-w-sm sm:flex-col' : null,
        variant === 'large' ? 'sm:max-w-screen-lg' : null,
        className,
      ])}
    >
      <div
        className={createClassName([
          'w-full h-56 bg-gray-300 sm:h-auto relative',
          variant === 'regular' ? 'sm:h-56' : null,
        ])}
      >
        <Image
          src={imgSrc || ''}
          alt="generic blog image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 w-full max-w-md h-full">
        <div className="w-32 h-1 gradientbg" />
        <h1 className="py-2 text-2xl font-bold">{title}</h1>
        <div className="flex justify-start items-center ">
          <div className="relative w-6 h-6">
            <Image
              src="/icon/profile_image.svg"
              alt="generic blog image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center pl-1 leading-none">
            <h2 className="h-full text-sm leading-none">Chris Menkhus</h2>
            <h3 className="h-full text-sm leading-none">{date}</h3>
          </div>
        </div>
        <p className="my-2">
          {truncateString(text as string, variant === 'large' ? 212 : 112)}
        </p>
        <div className="flex ">
          <Button variant="secondary" size="md" icon={BookOpenIcon}>
            Read More
          </Button>
        </div>
      </div>
    </article>
  )
}

export { BlogArticleCard, BlogCardsGroup }
