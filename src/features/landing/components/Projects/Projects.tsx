import ProjectCard from './components/ProjectCard'

import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import Project from 'src/types/Project'

type ProjectsInterface = {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsInterface) {
  return (
    <Section.Container name="Projects">
      <Section.Header title="Projects" subtitle="subtitle" />
      <Section.Content>
        {projects.map((v, i) => (
          <ProjectCard key={v.title + i} title={v.title} />
        ))}
      </Section.Content>
      <Section.Footer>
        <div className="flex w-full max-w-screen-lg">
          <Button
            size="lg"
            variant="primary"
            icon={CollectionIcon}
            className="mx-auto sm:mr-8"
          >
            Portfolio
          </Button>
        </div>
      </Section.Footer>
    </Section.Container>
  )
}
