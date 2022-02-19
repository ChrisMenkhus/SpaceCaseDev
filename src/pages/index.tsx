import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import type { NextPage } from 'next'
import Landing from 'src/features/landing/Landing'
import Post from 'src/types/Post'
import Project from 'src/types/Project'

const queryForBlogPosts = ` query {
  blogPostCollection{
    items {
      title
      description
      date
      slug
      post {
        json
      }
      image {
        url 
      }
    }
  }
}`

const queryForProjects = ` query {
	projectCollection {
    items {
      title
      description
      slug
      desktopImage {
        url
      }
      mobileImage {
        url
      }
      websiteUrl
      githubUrl
      colors
    }
  }
}`

export async function getStaticProps() {
  const postsData = await queryContentful(queryForBlogPosts)
  const posts: Post[] = postsData.blogPostCollection.items

  const projectsData = await queryContentful(queryForProjects)
  const projects: Project[] = projectsData.projectCollection.items

  return {
    props: {
      posts,
      projects,
    },
  }
}

const Home: NextPage<{ posts: Post[]; projects: Project[] }> = ({
  posts,
  projects,
}) => {
  return (
    <Layout
      showNavOnScroll
      title="Chris Menkhus Developer Front End & Full Stack About Contact Page"
      description="Chris Menkhus Front End or Full Stack website web developer and designer. Intro Page outlining skills like React Nextjs Nodejs HTML CSS GraphQL SQL styled-components tailwindcss tailwind semantic seo and other tools and frameworks."
    >
      <Landing posts={posts} projects={projects} />
    </Layout>
  )
}

export default Home
