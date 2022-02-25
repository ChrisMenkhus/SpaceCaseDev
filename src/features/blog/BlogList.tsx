import BlogArticleCard from '@components/organisms/BlogArticleCard'
import Section from '@components/templates/Section'
import Post from 'src/types/Post'

type BlogInterface = {
  posts: Post[]
}

function BlogList({ posts }: BlogInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap m-auto w-full">
          {posts.map((element, i) => {
            return (
              <BlogArticleCard
                title={element.title}
                text={element.description}
                slug={element.slug}
                imgSrc={element.image.url}
                key={element.title + i}
                variant="large"
              />
            )
          })}
        </div>
      </Section.Content>
    </Section.Container>
  )
}

BlogList.displayName = 'ArticleListComponent'

export default BlogList
