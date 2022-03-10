import { Link } from '@components/atoms'
import { ProjectCard } from '@components/organisms'
import { Section } from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
import Project from 'src/types/Project'

type ProjectsInterface = React.HTMLAttributes<HTMLElement> & {
  projects: Project[]
}

export const ProjectsSection = ({ projects, ...props }: ProjectsInterface) => {
  return (
    <Section.Container name="Projects">
      <Section.Header title="Projects" subtitle="Projects & Case Studies" />
      <Section.Content>
        {projects.map((project, i) => (
          <ProjectCard key={project.title + i} {...project} />
        ))}
      </Section.Content>
      <Section.Footer>
        <div className="flex w-full max-w-screen-lg">
          <Link
            size="xl"
            Icon={CollectionIcon}
            className="mx-auto sm:mr-8"
            href="/portfolio"
          >
            More Projects
          </Link>
        </div>
      </Section.Footer>
      <section />
    </Section.Container>
  )
}

ProjectsSection.displayName = 'ProjectsSection'
