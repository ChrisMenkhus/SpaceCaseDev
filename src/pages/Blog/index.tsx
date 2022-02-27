import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import BlogList from 'src/features/Blog/BlogList'
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
    <Layout className="pt-20" seo={pageSeo}>
      <BlogList posts={posts} />
    </Layout>
  )
}

const pageSeo = {
  title: 'Insights',
  description: 'Collection of articles and guides about web development',
}
Page.displayName = 'InsightsPage'
export default Page
