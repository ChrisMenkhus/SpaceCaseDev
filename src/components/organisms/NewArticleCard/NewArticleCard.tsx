import { TagsGroup } from '../TagsGroup'

import { Link } from '@components/atoms'
import { BookOpenIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

type NewArticleCardProps = HTMLAttributes<HTMLElement> & {
  cardType: 'Guide' | 'Project'
  title: string
  description: string
  date?: string
  author?: string
  imgSrc: string
  linkPaths?: { path: string; label: string }[]
  slug: string
}

export function NewArticleCard({
  cardType,
  title,
  description,
  date,
  author,
  imgSrc,
  slug,
  linkPaths,
}: NewArticleCardProps) {
  const showCredits = date ? true : author ? true : false

  return (
    // zindexing
    <article className="relative z-10 my-12 last:mb-8 max-w-screen-lg md:my-8">
      <div className="flex overflow-hidden z-50 flex-col my-8 w-full max-w-screen-xl h-full text-black dark:text-white bg-white dark:bg-dark rounded border-4 border-primary shadow-lg md:flex-row">
        <section className="flex z-10 justify-start items-start p-8 pr-4 w-1/2">
          <div className="flex p-8 w-full h-fit bg-light">
            <picture className="relative w-full h-56 bg-[#222]">
              <Image
                src={imgSrc}
                alt="generic blog image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </picture>
          </div>
        </section>
        <section className="z-10 p-8 pl-4 w-full max-w-md h-full md:w-1/2 md:max-w-none">
          <ul className="flex flex-col gap-2">
            <li className="flex items-start w-full">
              <div className="w-32 h-1 bg-gradient-to-r from-black to-secondary" />
              <span className="-mt-2 mr-0 ml-auto leading-none">
                {cardType}
              </span>
            </li>
            <li className="flex items-center w-full">
              <h1 className="text-2xl font-medium leading-none">{title}</h1>
            </li>
            <li>
              <TagsGroup
                tags={[
                  'React',
                  'Javascript',
                  'Typescript',
                  'ExpressJs',
                  'Figma',
                ]}
              />
            </li>
            <li className="flex items-center w-full leading-snug">
              <p className="-mt-2">{description}</p>
            </li>
            <li className="flex items-center w-full text-sm leading-none">
              {showCredits && (
                <small className="flex flex-col justify-center items-center mr-auto ml-0">
                  <span className="h-full">{author}</span>
                  <span className="mr-auto ml-0 h-full">{date}</span>
                </small>
              )}
              <div className="flex flex-row gap-4">
                {linkPaths &&
                  linkPaths.map((element, i) => {
                    return (
                      <Link
                        size="sm"
                        Icon={BookOpenIcon}
                        className=""
                        key={element.label + i}
                        href={element.path}
                      >
                        {element.label}
                      </Link>
                    )
                  })}
              </div>
            </li>
            <li className="flex items-center w-full"></li>
          </ul>
        </section>
      </div>
      <div className="absolute -top-8 z-10 w-screen h-40 bg-primary rounded-xl shadow-md sm:-top-8 sm:-left-8 sm:w-40 sm:rounded-md" />
    </article>
  )
}

const styles = {
  main: '',
  imageBox: '',
  textBox: {
    main: '',
    line: 'w-32 h-1 gradientbg',
    title: '',
    credits: {
      main: 'flex justify-start items-center pt-2',
      logo: 'relative w-6 h-6',
      textBox: {
        main: '',
        name: '',
        date: '',
      },
      link: '',
    },
    description: 'pb-2',
  },
}

NewArticleCard.displayName = 'NewArticleCardComponent'
