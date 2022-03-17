import { Link } from '@components/atoms'
import { ProjectCard } from '@components/organisms'
import { ArticleStyleCard } from '@components/organisms/ArticleStyleCard'
import { Section } from '@components/templates/Section'
import { add, update } from '@features/search/searchTagsSlice'
import { isDefaultTag } from '@features/search/utils/isDefaultTag'
import { CollectionIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'
import Project from 'src/types/Project'

type ProjectsInterface = React.HTMLAttributes<HTMLElement> & {
  projects: Project[]
}

export const ProjectsSection = ({ projects, ...props }: ProjectsInterface) => {
  const dispatch = useDispatch()
  const tags = useSelector((state: RootState) => state.searchTags.value)

  return (
    <Section.Container name="Projects">
      <Section.Header title="Projects" subtitle="Projects & Case Studies" />
      <Section.Content className="gap-16 mt-8 mb-16">
        {projects.map((project, i) => (
          <ArticleStyleCard
            cardType="Project"
            title={project.title}
            description={project.description}
            key={project.title + i}
            imgSrc={project.desktopImage.url}
            slug={project.slug}
            linkPaths={[
              { path: project.websiteUrl, label: 'Website' },
              { path: project.githubUrl, label: 'GitHub' },
            ]}
            tags={project.stackTags}
            tagsCallback={(label: string) => {
              if (isDefaultTag(tags, label)) {
                dispatch(update({ label: label, checked: true, default: true }))
              } else {
                dispatch(add({ label: label, checked: true, default: true }))
              }
            }}
          />
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
