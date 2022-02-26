import BlogContent from './components/BlogContent'

import Link from '@components/atoms/Link'
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
        <div className="flex flex-wrap px-4 m-auto max-w-screen-lg text-left">
          <div className="flex flex-col-reverse mt-4 w-full md:flex-row">
            <div className="relative my-8 w-full max-w-lg h-64 bg-dark sm:mr-4 sm:w-full md:my-0 md:h-full">
              <Image
                src={post.image.url}
                layout="fill"
                alt="no shadow flat anime image of Chris"
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <h1 className="w-full text-5xl sm:text-6xl md:text-7xl">
              {post.title}
            </h1>
          </div>
          <p className="py-4 m-auto max-w-screen-lg text-xl">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap w-full max-w-screen-lg">
          <BlogContent
            className="px-4 mr-auto w-full max-w-screen-sm"
            document={post.post.json as any}
          />
        </div>
      </Section.Content>
      <Section.Footer>
        <small className="mt-16 mb-8">
          Found a bug? 🕷
          <Link className="inline p-0 m-0" href="/#contact">
            {'contact'}
          </Link>
          me or create an
          <Link
            className="inline p-0 m-0"
            href="https://github.com/ChrisMenkhus/SpaceCaseDev/issues/new"
          >
            {'issue'}
          </Link>
          on github
        </small>
      </Section.Footer>
    </Section.Container>
  )
}

BlogArticle.displayName = 'ArticleListComponent'

export default BlogArticle
