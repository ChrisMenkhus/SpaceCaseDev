import { BlogArticleCard } from '@components/organisms'
import { Section } from '@components/templates/Section'
import Post from 'src/types/Post'

type BlogsListInterface = {
  posts: Post[]
}

export function BlogsList({ posts }: BlogsListInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap justify-center m-auto w-full">
          {posts.map((element, i) => {
            return (
              <BlogArticleCard
                title={element.title}
                text={element.description}
                slug={element.slug}
                imgSrc={element.image.url}
                key={element.title + i}
                variant="large"
                date={element.date}
              />
            )
          })}
        </div>
      </Section.Content>
    </Section.Container>
  )
}

BlogsList.displayName = 'ArticleListComponent'
