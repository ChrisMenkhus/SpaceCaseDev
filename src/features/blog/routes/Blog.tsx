import { BlogArticleCard } from '@components/organisms'
import { Section } from '@components/templates/Section'
import Post from 'src/types/Post'

// static props provided by './pages/portfolio/index.ts'

type BlogInterface = {
  posts: Post[]
}

export function Blog({ posts }: BlogInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap justify-center m-auto w-screen border-2">
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

Blog.displayName = 'ArticleListComponent'
