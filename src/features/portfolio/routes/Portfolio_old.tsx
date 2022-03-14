import { ProjectCard } from '@components/organisms'
import { Section } from '@components/templates/Section'
import Project from 'src/types/Project'

// static props provided by './pages/portfolio/index.ts'

type PortfolioInterface = {
  projects: Project[]
}

function Portfolio({ projects }: PortfolioInterface) {
  return (
    <Section.Container name="Projects" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap m-auto w-full">
          {projects.map((project, i) => {
            return <ProjectCard {...project} key={project.slug} />
          })}
        </div>
      </Section.Content>
    </Section.Container>
  )
}

Portfolio.displayName = 'PortfolioRoute'
export default Portfolio
