import Post from '../../types/Post'

import { Header } from '@components/atoms'
import { BlogArticle } from '@features/blog/routes'
import { queryForPost, queryForSlugs } from '@utils/queryContentful'
import truncateString from '@utils/truncateString'
import type { GetStaticProps, NextPage } from 'next'

export async function getStaticPaths() {
  const slugsData = await queryForSlugs()
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
  const postData = await queryForPost(slug)
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
    <>
      <Header
        title={truncateString(post.title, 20)}
        description={post.description}
      />
      <BlogArticle post={post} />
    </>
  )
}

Page.displayName = 'BlogArticlePage'

export default Page
