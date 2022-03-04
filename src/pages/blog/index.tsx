import { Header } from '@components/atoms'
import { Blog } from '@features/blog/routes'
import { queryForPosts } from '@utils/queryContentful'
import type { NextPage } from 'next'
import Post from 'src/types/Post'

export async function getStaticProps() {
  const postsData = await queryForPosts()
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
    <>
      <Header {...pageSeo} />
      <Blog posts={posts} />
    </>
  )
}

const pageSeo = {
  title: 'Insights',
  description: 'Collection of articles and guides about web development',
}

Page.displayName = 'InsightsPage'
export default Page
