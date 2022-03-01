import { ProjectCard } from '@components/organisms'
import { Section } from '@components/templates/Section'
import Project from 'src/types/Project'

type PortfolioInterface = {
  projects: Project[]
}

function ProjectsList({ projects }: PortfolioInterface) {
  return (
    <Section.Container name="Projects" className="min-h-screen">
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

ProjectsList.displayName = 'ProjectsListComponent'
export default ProjectsList
