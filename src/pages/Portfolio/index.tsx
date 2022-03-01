import { Layout } from '@components/templates/Layout/Layout'
import ProjectsList from '@features/portfolio/routes/ProjectsList'
import queryContentful from '@utils/queryContentful'
import { NextPage } from 'next'
import Project from 'src/types/Project'

type PageProps = {
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ projects }) => {
  return (
    <Layout seo={pageSeo}>
      <ProjectsList projects={projects} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsData = await queryContentful('projects')
  const projects: Project[] = projectsData.projectCollection.items

  return {
    props: {
      projects,
    },
  }
}

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page
