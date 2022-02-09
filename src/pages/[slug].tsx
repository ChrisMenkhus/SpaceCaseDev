import Post from '../types/Post'

import { Navbar } from '@components/Elements/Navbar'
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
        <pre className="my-2 px-4 py-2 bg-dark text-white whitespace-pre-wrap">
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
      <div className="mt-16 max-w-screen-lg text-left  flex flex-wrap">
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
  const { data } = await queryContentful(
    `
    query {
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
  )

  const post: Post = data.blogPostCollection.items[0]
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const { data } = await queryContentful(
    `
      query {
        blogPostCollection {
          items {
            slug
          }
        }
      }
    `
  )

  const slugs = data.blogPostCollection.items

  const paths = slugs.map(({ slug }: { slug: string }) => {
    return {
      params: { slug: slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

Blog.displayName = 'BlogPage'
export default Blog
