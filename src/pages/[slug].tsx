import Post from '../types/Post'

import { Navbar } from '@components/organisms/Navbar'
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, MARKS, Node } from '@contentful/rich-text-types'
import queryContentful from '@utils/queryContentful'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

const Blog: NextPage<{ post: Post }> = ({ post }) => {
  console.log('new page loaded')

  const options: Options = {
    renderMark: {
      [MARKS.CODE]: (text) => (
        <pre className="py-2 px-4 my-2 text-white whitespace-pre-wrap bg-dark">
          {text}
        </pre>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="my-4 text-3xl">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h1 className="my-2 text-3xl text-primary">{children}</h1>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-2">{children}</p>
      ),
    },
  }

  const document: Document = post.post.json as any

  const BlogPost = () => (
    <div className="w-full">
      {' '}
      {documentToReactComponents(document, options)}{' '}
    </div>
  )

  return (
    <div className="grid place-items-center">
      <Navbar />
      <div className="flex flex-wrap mt-16 max-w-screen-lg text-left">
        <h1 className="my-2 text-7xl ">{post.title}</h1>
        <p className="my-2 text-xl ">{post.description}</p>
        <h2>hello world</h2>
        <BlogPost />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params && params.slug

  console.log('PARAMS: ', params)
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
  console.log('SLUGS: ', slugs)

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
