import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import Blog from 'src/features/blog/Blog'
import Post from 'src/types/Post'

const Insights: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout className="mt-20" title="Insights" description="Insights">
      <Blog posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const postsData = await queryContentful(queryForBlogPosts)
  const posts: Post[] = postsData.blogPostCollection.items

  return {
    props: {
      posts,
    },
  }
}

const queryForBlogPosts = ` query {
  blogPostCollection{
    items {
      title
      description
      date
      slug
      post {
        json
      }
      image {
        url
      }
    }
  }
}`

export default Insights
