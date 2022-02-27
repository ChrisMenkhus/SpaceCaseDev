import Layout from '@components/templates/Layout'
import queryContentful from '@utils/queryContentful'
import { NextPage } from 'next'
import ProjectList from 'src/features/Portfolio/ProjectList'
import Project from 'src/types/Project'

type PageProps = {
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ projects }) => {
  return (
    <Layout className="pt-20" seo={pageSeo}>
      <ProjectList projects={projects} />
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
