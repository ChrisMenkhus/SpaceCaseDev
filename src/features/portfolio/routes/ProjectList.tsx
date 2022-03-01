import { ProjectCard } from '@components/organisms'
import { Section } from '@components/templates'
import Project from 'src/types/Project'

type PortfolioInterface = {
  projects: Project[]
}

function ProjectList({ projects }: PortfolioInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap m-auto w-full">
          {projects.map((element, i) => {
            return (
              <ProjectCard
                title={element.title}
                text={element.description}
                slug={element.slug}
                mobileImage={element.mobileImage.url}
                desktopImage={element.desktopImage.url}
                key={element.title + i}
                colors={element.colors}
                website={element.websiteUrl}
                github={element.githubUrl}
              />
            )
          })}
        </div>
      </Section.Content>
    </Section.Container>
  )
}

ProjectList.displayName = 'ProjectListComponent'
export default ProjectList
