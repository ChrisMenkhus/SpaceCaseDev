import Layout from '@components/templates/Layout'
import Section from '@components/templates/Section'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import Blog from 'src/features/blog/Blog'
import Post from 'src/types/Post'

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

export async function getStaticProps() {
  const postsData = await queryContentful(queryForBlogPosts)
  const posts: Post[] = postsData.blogPostCollection.items

  return {
    props: {
      posts,
    },
  }
}

const Insights: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Insights" description="Insights">
      <Blog posts={posts} />
    </Layout>
  )
}

export default Insights
