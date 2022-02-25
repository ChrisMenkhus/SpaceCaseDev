import Post from '../../types/Post'

import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

const BlogArticle: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout title="Insights" description="Insights" className="px-8 pt-20">
      <BlogArticle post={post} />
    </Layout>
  )
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

BlogArticle.displayName = 'BlogArticlePage'
