import { BlogContent } from '../components/BlogContent'

import { Link } from '@components/atoms'
import { Section } from '@components/templates/Section'
import Image from 'next/image'
import Post from 'src/types/Post'

type BlogInterface = {
  post: Post
}

export function BlogArticle({ post }: BlogInterface) {
  return (
    <Section.Container name="Insights" className={styles.main}>
      <Section.Content>
        <header className={styles.header}>
          <div className={styles.titleContainer.main}>
            <div className={styles.titleContainer.image}>
              <Image
                src={post.image.url}
                layout="fill"
                alt="generic blog article image"
                objectPosition="center"
                objectFit="cover"
              />
            </div>
            <h1 className={styles.titleContainer.title}>{post.title}</h1>
          </div>
          <p className={styles.description}>{post.description}</p>
        </header>
        <article className={styles.blogContainer}>
          <BlogContent
            className={styles.blogContent}
            document={post.post.json as any}
          />
        </article>
      </Section.Content>
      <Section.Footer>
        <BugTrackerLink />
      </Section.Footer>
    </Section.Container>
  )
}

function BugTrackerLink() {
  return (
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
        issue
      </Link>
      on github
    </small>
  )
}

const styles = {
  main: 'min-h-screen',
  header: 'flex flex-wrap px-4 m-auto max-w-screen-lg text-left',
  titleContainer: {
    main: 'flex flex-col-reverse mt-4 w-full md:flex-row',
    title: 'w-full text-5xl sm:text-6xl md:text-7xl',
    image:
      'relative my-8 w-full max-w-lg h-64 bg-dark sm:mr-4 sm:w-full md:my-0 md:h-full',
  },
  description: 'py-4 m-auto max-w-screen-lg text-xl',
  blogContainer: 'flex flex-wrap w-full max-w-screen-lg',
  blogContent: 'px-4 mr-auto w-full max-w-screen-sm',
}

BlogArticle.displayName = 'ArticleListComponent'
