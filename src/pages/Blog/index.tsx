import { Layout } from '@components/templates'
import { BlogsList } from '@features/blog/routes'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import Post from 'src/types/Post'

export async function getStaticProps() {
  const postsData = await queryContentful('posts')
  const posts: Post[] = postsData.blogPostCollection.items

  return {
    props: {
      posts,
    },
  }
}

type PageProps = { posts: Post[] }

const Page: NextPage<PageProps> = ({ posts }) => {
  return (
    <Layout seo={pageSeo}>
      <BlogsList posts={posts} />
    </Layout>
  )
}

const pageSeo = {
  title: 'Insights',
  description: 'Collection of articles and guides about web development',
}

Page.displayName = 'InsightsPage'
export default Page
