import Button from '@components/atoms/Button'
import Link from '@components/atoms/Link'
import BlogArticleCard from '@components/organisms/BlogArticleCard'
import Section from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import Router from 'next/router'
import { forwardRef } from 'react'
import Post from 'src/types/Post'

type InsightsInterface = {
  posts: Post[]
}

const InsightsSection = forwardRef<HTMLDivElement, InsightsInterface>(
  ({ posts }, ref?) => {
    return (
      <Section.Container name="Insights">
        <Section.Header title="Insights" subtitle="Blog Articles" />
        <Section.Content>
          <div className="flex-row flex-wrap pb-8 flexleft">
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
              icon={CollectionIcon}
              className="mx-auto sm:mr-8"
              href="/Insights"
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

export default InsightsSection