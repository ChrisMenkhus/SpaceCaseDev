import Post from '../../types/Post'

import Layout from '@components/templates/Layout'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

const Blog: NextPage<{ post: Post }> = ({ post }) => {
  console.log('new page loaded')

  const options: Options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <pre className="py-2 px-4 my-4 text-white whitespace-pre-wrap bg-dark">
          {text}
        </pre>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="mt-8 mb-4 text-4xl font-medium">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h1 className="my-4 text-5xl text-primary">{children}</h1>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4">{children}</p>
      ),
    },
  }

  const document: Document = post.post.json as any

  const BlogPost = () => (
    <div className="w-full">{documentToReactComponents(document, options)}</div>
  )

  return (
    <Layout title="Insights" description="Insights" className="px-8">
      <div className="flex flex-wrap m-auto mt-20 max-w-screen-md text-left">
        <div className="flex flex-col-reverse my-4 w-full md:flex-row">
          <div className="my-8 mr-4 w-full h-64 bg-dark md:my-0 md:max-w-xs md:h-full" />

          <h1 className="w-full text-7xl">{post.title}</h1>
        </div>
        <p className="my-2 text-xl ">{post.description}</p>
      </div>
      <div className="flex flex-wrap mb-36 max-w-screen-sm">
        <BlogPost />
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

Blog.displayName = 'BlogPage'
export default Blog
