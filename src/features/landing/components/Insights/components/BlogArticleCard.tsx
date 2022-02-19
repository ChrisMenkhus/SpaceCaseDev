import { Button } from '@components/atoms/Button'
import { BookOpenIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import truncateString from '@utils/truncateString'
import Image from 'next/image'
import Router from 'next/router'

export default function BlogArticleCard({
  title,
  text,
  date,
  className = '',
  variant = 'regular',
  imgSrc,
  slug,
}: {
  title?: string
  text?: string
  date?: string
  className?: string
  variant?: 'regular' | 'large'
  imgSrc: string
  slug: string
}) {
  return (
    <article
      className={makeStyles([
        'mx-4 my-8 flex flex-col w-full min-h-[14rem] max-w-sm bg-white dark:bg-dark dark:text-white text-black shadow-lg sm:flex-row md:my-4 rounded overflow-hidden',
        variant === 'regular' && 'sm:max-w-sm sm:flex-col',
        variant === 'large' && 'sm:max-w-screen-lg',
        className,
      ])}
    >
      <div
        className={makeStyles([
          'w-full h-56 bg-gray-300 sm:h-auto relative',
          variant === 'regular' && 'sm:h-56',
        ])}
      >
        <Image
          src={imgSrc}
          alt="generic blog image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4 w-full max-w-md h-full">
        <div className="w-32 h-1 gradientbg" />
        <h1 className="py-2 text-2xl font-bold">
          {truncateString(title as string, variant === 'large' ? 100 : 70)}
        </h1>
        <div className="flex justify-start items-center ">
          <div className="relative w-6 h-6">
            <Image
              src="/icon/profile_image.svg"
              alt="profile image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center pl-1 leading-none">
            <h2 className="h-full text-sm leading-none">Chris Menkhus</h2>
            <h3 className="mr-auto ml-0 h-full text-sm leading-none">{date}</h3>
          </div>
        </div>
        <p className="my-2">
          {truncateString(text as string, variant === 'large' ? 212 : 112)}
        </p>
        <div className="flex ">
          <Button
            variant="secondary"
            size="md"
            icon={BookOpenIcon}
            onClick={(e) => {
              e.preventDefault()
              Router.push('/Insights/' + slug)
              // .then(() => window.scrollTo(0, 0))
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  )
}
