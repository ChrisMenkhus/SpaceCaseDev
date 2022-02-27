import Post from '../../types/Post'

import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps, NextPage } from 'next'
import BlogArticle from 'src/features/Blog/BlogArticle'

export async function getStaticPaths() {
  const slugsData = await queryContentful('slugs')
  const slugs: { slug: string }[] = slugsData.blogPostCollection.items

  const paths = slugs.map((element, index) => {
    return {
      params: { slug: element.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params && params.slug?.toString()
  const postData = await queryContentful('post', slug)
  const post: Post = postData.blogPostCollection.items[0]

  return {
    props: {
      post,
    },
  }
}

type PageProps = {
  post: Post
}

const Page: NextPage<PageProps> = ({ post }) => {
  return (
    <Layout className="pt-20" seo={pageSeo}>
      <BlogArticle post={post} />
    </Layout>
  )
}

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page