import Post from '!types/Post'
import Project from '!types/Project'
import { Header } from '@components/atoms'
import { Landing } from '@features/landing/routes'
import { queryForPosts, queryForProjects } from '@utils/queryContentful'
import type { NextPage } from 'next'

export async function getStaticProps() {
  const postsData = await queryForPosts(3)
  const posts: Post[] = postsData.blogPostCollection.items

  const projectsData = await queryForProjects(3)
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
  <>
    <Header {...pageSeo} />
    <Landing posts={posts} projects={projects} />
  </>
)

const pageSeo = {
  title: 'Chris Menkhus About & Contact',
  description:
    'Chris Menkhus Front End or Full Stack website web developer and designer. Intro Page outlining skills like React Nextjs Nodejs HTML CSS GraphQL SQL styled-components tailwindcss tailwind semantic seo and other tools and frameworks located in Colorado Springs.',
}

Page.displayName = 'HomePage'
export default Page
