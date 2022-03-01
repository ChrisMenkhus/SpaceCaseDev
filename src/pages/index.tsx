import Post from '!types/Post'
import Project from '!types/Project'
import { Layout } from '@components/templates/Layout/Layout'
import { Landing } from '@features/landing/routes'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'

export async function getStaticProps() {
  const postsData = await queryContentful('posts')
  const posts: Post[] = postsData.blogPostCollection.items

  const projectsData = await queryContentful('projects')
  const projects: Project[] = projectsData.projectCollection.items

  return {
    props: {
      posts,
      projects,
    },
  }
}

type PageProps = {
  posts: Post[]
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ posts, projects }) => (
  <Layout seo={pageSeo} showNavOnScroll>
    <Landing posts={posts} projects={projects} />
  </Layout>
)

const pageSeo = {
  title: 'Chris Menkhus About & Contact',
  description:
    'Chris Menkhus Front End or Full Stack website web developer and designer. Intro Page outlining skills like React Nextjs Nodejs HTML CSS GraphQL SQL styled-components tailwindcss tailwind semantic seo and other tools and frameworks.',
}

Page.displayName = 'HomePage'
export default Page
