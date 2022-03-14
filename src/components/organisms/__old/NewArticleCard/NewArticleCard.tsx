import { TagsGroup } from '../TagsGroup'

import Tag from '!types/Tag'
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
  tags: string[]
  search?: {
    searchTags: Tag[]
    updateSearchTags: (updatedTags: Tag[] | []) => void
  }
}

export function NewArticleCard({
  cardType,
  title,
  description,
  date,
  author,
  imgSrc,
  linkPaths,
  slug,
  tags,
  search,
}: NewArticleCardProps) {
  const showCredits = date ? true : author ? true : false

  return (
    <article className="relative before:absolute before:-top-8 before:sm:-left-8 before:-z-10 z-10 mt-8 before:w-40 max-w-screen-lg before:h-40 before:bg-primary before:rounded-md before:shadow-md ">
      <div className="flex overflow-hidden flex-col w-full max-w-screen-xl h-full text-black dark:text-white bg-white dark:bg-dark rounded shadow-lg md:flex-row">
        <section className="flex justify-start items-start p-8 w-full md:pr-4 md:w-1/2">
          <div className="flex p-8 w-full h-fit bg-light">
            <picture className="relative m-auto w-full max-w-xs h-56 bg-[#222]">
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
        <section className="p-8 pl-4 w-full max-w-md h-full md:w-1/2 md:max-w-none">
          <ul className="flex flex-col gap-4">
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
                className="gap-2"
                stackTags={tags}
                searchTags={search?.searchTags}
                updateTags={search?.updateSearchTags}
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
    </article>
  )
}

NewArticleCard.displayName = 'NewArticleCardComponent'
