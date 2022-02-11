import ProjectCard from './components/ProjectCard'

import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { CollectionIcon } from '@heroicons/react/outline'
import * as data from 'public/data/home'
import Project from 'src/types/Project'

type ProjectsInterface = {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsInterface) {
  return (
    <Section.Container name="Projects">
      <Section.Header
        title={data.Portfolio.section.name}
        subtitle={data.Portfolio.section.altname || ''}
      />
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
            {data.Portfolio.button || ''}
          </Button>
        </div>
      </Section.Footer>
    </Section.Container>
  )
}
