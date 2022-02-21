import BlogArticleCard from './components/BlogArticleCard'

import Button from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import Router from 'next/router'
import { forwardRef } from 'react'
import Post from 'src/types/Post'

type InsightsInterface = {
  posts: Post[]
}

const Insights = forwardRef<HTMLDivElement, InsightsInterface>(
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
            <Button
              size="lg"
              variant="primary"
              icon={CollectionIcon}
              className="mx-auto sm:mr-8"
              onClick={(e) => {
                e.preventDefault()
                Router.push('/Insights')
              }}
            >
              More Articles
            </Button>
          </div>
        </Section.Footer>
      </Section.Container>
    )
  }
)

Insights.displayName = 'InsightsSection'

export default Insights
