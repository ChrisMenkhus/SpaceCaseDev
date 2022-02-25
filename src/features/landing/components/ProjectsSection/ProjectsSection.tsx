import Link from '@components/atoms/Link'
import ProjectCard from '@components/organisms/ProjectCard'
import Section from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
import Project from 'src/types/Project'

type ProjectsInterface = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
  projects: Project[]
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsInterface>(
  ({ projects }, ref?) => {
    return (
      <Section.Container name="Projects">
        <Section.Header title="Projects" subtitle="Projects & Case Studies" />
        <Section.Content>
          {projects.map((element, i) => (
            <ProjectCard
              key={element.title + i}
              title={element.title}
              desktopImage={element.desktopImage.url}
              mobileImage={element.mobileImage.url}
              colors={element.colors}
              slug={element.slug}
              text={element.description}
              github={element.githubUrl}
              website={element.websiteUrl}
            />
          ))}
        </Section.Content>
        <Section.Footer>
          <div className="flex w-full max-w-screen-lg">
            <Link
              size="xl"
              icon={CollectionIcon}
              className="mx-auto mt-4 sm:mr-8"
              href="/Portfolio"
            >
              More Projects
            </Link>
          </div>
        </Section.Footer>
      </Section.Container>
    )
  }
)

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
