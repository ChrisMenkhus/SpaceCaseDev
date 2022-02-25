import BlogContent from './components/BlogContent'

import BlogArticleCard from '@components/organisms/BlogArticleCard'
import Section from '@components/templates/Section'
import Image from 'next/image'
import Post from 'src/types/Post'

type BlogInterface = {
  post: Post
}

function BlogArticle({ post }: BlogInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-wrap m-auto mt-20 max-w-screen-md text-left">
          <div className="flex flex-col-reverse my-4 w-full md:flex-row">
            <div className="relative my-8 w-screen h-64 bg-dark sm:mr-4 sm:w-full md:my-0 md:max-w-xs md:h-full">
              <Image
                src={post.image.url}
                layout="fill"
                alt="no shadow flat anime image of Chris"
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <h1 className="px-2 w-full text-5xl sm:text-6xl md:text-7xl">
              {post.title}
            </h1>
          </div>
          <p className="px-2 my-2 text-xl">{post.description}</p>
        </div>
        <div className="flex flex-wrap px-2 mb-36 w-full max-w-screen-sm">
          <BlogContent document={post.post.json as any} />
        </div>
      </Section.Content>
    </Section.Container>
  )
}

BlogArticle.displayName = 'ArticleListComponent'

export default BlogArticle
