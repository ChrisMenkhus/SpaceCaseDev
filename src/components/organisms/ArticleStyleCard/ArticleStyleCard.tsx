import { TagsList } from '../Tags/TagsList'
import { TagsListItem } from '../Tags/TagsListItem'
import { CardArticleCredits } from './components/CardArticleCredits'
import { CardImageSection } from './components/CardImageSection'
import { CardInfoSection } from './components/CardInfoSection'
import { CardLinks } from './components/CardLinks'
import { CardWrapper } from './components/CardWrapper'

import { Link } from '@components/atoms'
import { BookOpenIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

type ArticleStyleCardProps = HTMLAttributes<HTMLElement> & {
  cardType: 'Guide' | 'Project'
  title: string
  description: string
  date?: string
  author?: string
  imgSrc: string
  linkPaths?: { path: string; label: string }[]
  slug: string
  tags: string[]
  tagsCallback: (label: string) => void
  colors?: string[]
}

export function ArticleStyleCard({
  cardType,
  title,
  description,
  date,
  author,
  imgSrc,
  linkPaths,
  slug,
  tags,
  tagsCallback,
  colors,
}: ArticleStyleCardProps) {
  const primaryColor = '#0276FF'
  const mainColor = colors ? colors[1] : primaryColor
  return (
    <div className="relative">
      <div
        className="absolute -top-1 w-40 h-40 bg-primary rounded-xl shadow-md sm:-left-8 sm:rounded-md"
        style={{
          backgroundImage: `linear-gradient(to right, ${mainColor}, ${
            colors ? colors[0] : primaryColor
          })`,
        }}
      />
      <CardWrapper className="max-w-screen-lg">
        <CardImageSection>
          <Image
            src={imgSrc}
            alt="generic blog image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </CardImageSection>
        <CardInfoSection>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start w-full">
              <div
                className="w-32 h-1 bg-gradient-to-r from-secondary to-primary"
                style={{
                  backgroundImage: `linear-gradient(to right, ${mainColor}, ${
                    colors ? colors[0] : '#8002FF'
                  })`,
                }}
              />
              <span className="-mt-2 mr-0 ml-auto leading-none">
                {cardType}
              </span>
            </li>
            <li className="flex items-center w-full">
              <h1 className="text-2xl font-medium leading-none">{title}</h1>
            </li>
            <li>
              <TagsList className="flex-wrap">
                {tags.map((element, i) => {
                  return (
                    <TagsListItem
                      callback={() => tagsCallback(element)}
                      key={element + i}
                      color={mainColor}
                    >
                      {element}
                    </TagsListItem>
                  )
                })}
              </TagsList>
            </li>
            <li className="flex items-center w-full leading-snug">
              <p className="-mt-2">{description}</p>
            </li>
            <li className="flex items-center w-full text-sm leading-none">
              <CardArticleCredits date={date} author={author} />
              <CardLinks linkPaths={linkPaths} />
            </li>
          </ul>
        </CardInfoSection>
      </CardWrapper>
    </div>
  )
}

ArticleStyleCard.displayName = 'ArticleStyleCardComponent'
