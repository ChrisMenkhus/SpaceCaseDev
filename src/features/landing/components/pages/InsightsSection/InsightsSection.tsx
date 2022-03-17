import { LazyRender, Link } from '@components/atoms'
import { BlogArticleCard } from '@components/organisms'
import { ArticleStyleCard } from '@components/organisms/ArticleStyleCard'
import { Section } from '@components/templates'
import { add, update } from '@features/search/searchTagsSlice'
import { isDefaultTag } from '@features/search/utils/isDefaultTag'
import { CollectionIcon } from '@heroicons/react/outline'
import { forwardRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'
import Post from 'src/types/Post'

type InsightsInterface = {
  posts: Post[]
}

export const InsightsSection = forwardRef<HTMLDivElement, InsightsInterface>(
  ({ posts }, ref?) => {
    const dispatch = useDispatch()
    const tags = useSelector((state: RootState) => state.searchTags.value)

    return (
      <Section.Container name="Insights">
        <Section.Header title="Insights" subtitle="Blog Articles" />
        <Section.Content className="gap-16 mt-8 mb-16">
          {posts.map((element, i) => {
            const path = '/blog/' + element.slug
            return (
              <ArticleStyleCard
                title={element.title}
                description={element.description}
                slug={element.slug}
                imgSrc={element.image.url}
                key={element.title + i}
                date={element.date}
                author={'Chris Menkhus'}
                linkPaths={[{ path: path, label: 'Read More' }]}
                cardType="Guide"
                tags={element.tags}
                tagsCallback={(label: string) => {
                  if (isDefaultTag(tags, label)) {
                    dispatch(
                      update({ label: label, checked: true, default: true })
                    )
                  } else {
                    dispatch(
                      add({ label: label, checked: true, default: true })
                    )
                  }
                }}
              />
            )
          })}
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
