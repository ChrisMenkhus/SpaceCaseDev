import Post from '../../types/Post'

import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps } from 'next'
import React from 'react'
import BlogArticle from 'src/features/Blog/BlogArticle'

function BlogArticlePage({ post }: { post: Post }) {
  return (
    <Layout title="Insights" description="Insights" className="pt-20">
      <BlogArticle post={post} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const queryForSlugs = ` query {
      blogPostCollection{
        items {
          slug
        }
      }
    }`

  const slugsData = await queryContentful(queryForSlugs)
  const slugs: { slug: string }[] = slugsData.blogPostCollection.items

  const paths = slugs.map((element, index) => {
    console.log('SLUG: ', element.slug)
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
  const slug = params && params.slug

  const queryForPost = ` query {
      blogPostCollection(where: {
        slug: "${slug}"
      },
      limit: 1
      ) {
        items {
          title
          description
          slug
          post {
            json
          }
          date
          image {
            url
          }
        }
      }
    }

    `

  const postData = await queryContentful(queryForPost)
  const post: Post = postData.blogPostCollection.items[0]

  return {
    props: {
      post,
    },
  }
}

BlogArticlePage.displayName = 'BlogArticlePage'

export default BlogArticlePage
