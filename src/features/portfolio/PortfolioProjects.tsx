import ProjectCard from '../landing/components/Projects/components/ProjectCard'

import Section from '@components/templates/Section'
import Project from 'src/types/Project'

type PortfolioInterface = {
  projects: Project[]
}

export default function PortfolioProjects({ projects }: PortfolioInterface) {
  return (
    <Section.Container name="Insights" className="min-h-screen">
      <Section.Content>
        <div className="flex flex-row flex-wrap m-auto w-full">
          {projects.map((element, i) => {
            return (
              <>
                <ProjectCard
                  title={element.title}
                  text={element.description}
                  slug={element.slug}
                  mobileImage={element.mobileImage.url}
                  desktopImage={element.desktopImage.url}
                  key={element.title + i}
                  colors={element.colors}
                />
                <a href={element.githubUrl}>website</a>
              </>
            )
          })}
        </div>
      </Section.Content>
    </Section.Container>
  )
}
