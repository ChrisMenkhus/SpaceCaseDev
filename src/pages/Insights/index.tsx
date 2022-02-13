import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
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
      {posts.map((element, i) => {
        return <div key={element.slug + i}>{element.title}</div>
      })}
    </Layout>
  )
}

export default Insights
