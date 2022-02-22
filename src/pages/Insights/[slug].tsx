import Post from '../../types/Post'
import BlogContent from './components/BlogContent'

import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const BlogArticle: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout title="Insights" description="Insights" className="px-8">
      <div className="flex flex-wrap m-auto mt-20 max-w-screen-md text-left">
        <div className="flex flex-col-reverse my-4 w-full md:flex-row">
          <div className="relative my-8 w-screen h-64 bg-dark sm:mr-4 sm:w-full md:my-0 md:max-w-xs md:h-full">
            <Image
              src={post.image.url}
              layout="fill"
              alt="no shadow flat anime image of Chris"
              objectPosition="center"
              objectFit="cover"
            />
          </div>
          <h1 className="w-full text-6xl md:text-7xl">{post.title}</h1>
        </div>
        <p className="my-2 text-xl ">{post.description}</p>
      </div>
      <div className="flex flex-wrap mb-36 max-w-screen-sm">
        <BlogContent document={post.post.json as any} />
      </div>
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

export default BlogArticle
