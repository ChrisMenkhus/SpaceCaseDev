import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import BlogList from 'src/features/Blog/BlogList'
import Post from 'src/types/Post'

const Insights: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout className="pt-20" title="Insights" description="Insights">
      <BlogList posts={posts} />
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
