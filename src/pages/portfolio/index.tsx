import { Header } from '@components/atoms/Header'
import Portfolio from '@features/portfolio/routes/Portfolio'
import { queryForProjects } from '@utils/queryContentful'
import { NextPage } from 'next'
import Project from 'src/types/Project'

type PageProps = {
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ projects }) => {
  return (
    <>
      <Header {...pageSeo} />
      <Portfolio projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  const projectsData = await queryForProjects()
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
