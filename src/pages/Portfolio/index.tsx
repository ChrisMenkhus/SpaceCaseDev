import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import { NextPage } from 'next'
import ProjectList from 'src/features/portfolio/ProjectList'
import Project from 'src/types/Project'

const Portfolio: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Layout
      className="pt-20"
      title="Portfolio"
      description="Collection of projects."
    >
      <ProjectList projects={projects} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsData = await queryContentful(queryForProjects)
  const projects: Project[] = projectsData.projectCollection.items

  return {
    props: {
      projects,
    },
  }
}

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

export default Portfolio
