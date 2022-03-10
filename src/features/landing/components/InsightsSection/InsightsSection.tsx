import { LazyRender, Link } from '@components/atoms'
import { BlogArticleCard } from '@components/organisms'
import { Section } from '@components/templates'
import { CollectionIcon } from '@heroicons/react/outline'
import { forwardRef, useCallback, useState } from 'react'
import Post from 'src/types/Post'

type InsightsInterface = {
  posts: Post[]
}

export const InsightsSection = forwardRef<HTMLDivElement, InsightsInterface>(
  ({ posts }, ref?) => {
    return (
      <Section.Container name="Insights">
        <Section.Header title="Insights" subtitle="Blog Articles" />
        <Section.Content>
          <div className="flex flex-row flex-wrap justify-center items-center pb-8 w-full sm:justify-start">
            {posts.map((element, i) => {
              return (
                <BlogArticleCard
                  key={element.slug + i}
                  title={element.title}
                  text={element.description}
                  date={element.date}
                  slug={element.slug}
                  imgSrc={element.image.url}
                  variant={i === 0 ? 'large' : 'regular'}
                />
              )
            })}
          </div>
        </Section.Content>
        <Section.Footer>
          <div className="flex w-full max-w-screen-lg">
            <Link
              size="xl"
              Icon={CollectionIcon}
              className="mx-auto sm:mr-8"
              href="/blog"
            >
              More Articles
            </Link>
          </div>
        </Section.Footer>
      </Section.Container>
    )
  }
)

InsightsSection.displayName = 'InsightsSection'
