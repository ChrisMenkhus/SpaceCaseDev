import Post from '!types/Post'
import { Header } from '@components/atoms/Header'
import { NewArticleCard } from '@components/organisms'
import { TagsGroup } from '@components/organisms/TagsGroup'
import { Section } from '@components/templates'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { queryForPosts, queryForProjects } from '@utils/queryContentful'
import { NextPage } from 'next'
import { HTMLAttributes } from 'react'
import Project from 'src/types/Project'

type PageProps = {
  posts: Post[]
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ posts, projects }) => {
  return (
    <>
      <Header {...pageSeo} />
      <Section.Container name="testing playground" className="mt-20 ">
        <SearchBar
          placeholder="Search"
          tags={['react', 'javascript', 'nodejs']}
        />
        <Section.Content>
          <ProjectList projects={projects} />
        </Section.Content>
      </Section.Container>
    </>
  )
}

export async function getStaticProps() {
  const postsData = await queryForPosts()
  const posts: Post[] = postsData.blogPostCollection.items

  const projectsData = await queryForProjects()
  const projects: Project[] = projectsData.projectCollection.items

  return {
    props: {
      posts,
      projects,
    },
  }
}

type SearchBarProps = HTMLAttributes<HTMLInputElement> & {
  tags?: string[]
}

const SearchBar = ({ tags, ...props }: SearchBarProps) => {
  return (
    <div
      className={makeStyles([
        'my-32 w-full max-w-screen-lg',
        props.className || '',
      ])}
    >
      <div className="flex relative gap-4 justify-center items-center py-1 mx-auto bg-white rounded-sm border-2 border-gray">
        <div className="mr-auto ml-4">
          <div className="w-6 h-6 text-dark fill-current">
            <SearchIcon />
          </div>
        </div>
        <TagsGroup
          tags={tags || ['none']}
          showCloseIcon
          className="gap-1 max-w-fit"
        />
        <input
          className="w-full h-12 text-lg focus:outline-none"
          type="search"
          name="search"
          placeholder={props.placeholder}
        />
        <button type="submit" className="mr-4 ml-auto">
          <div className="w-6 h-6 text-primary fill-current">
            <XIcon />
          </div>
        </button>
      </div>
    </div>
  )
}

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="flex relative flex-col gap-16">
      <h1>Projects</h1>
      {projects.map((element, i) => {
        return (
          <NewArticleCard
            cardType="Project"
            title={element.title}
            description={element.description}
            key={element.title + i}
            imgSrc={element.desktopImage.url}
            slug={element.slug}
            linkPaths={[
              { path: element.websiteUrl, label: 'Website' },
              { path: element.githubUrl, label: 'GitHub' },
            ]}
          />
        )
      })}
    </div>
  )
}

const PostList = (posts: Post[]) => {
  return (
    <div className="flex relative flex-col">
      <h1>Blog</h1>
      {posts.map((element, i) => {
        return (
          <NewArticleCard
            cardType="Guide"
            title={element.title}
            description={element.description}
            key={element.title + i}
            author="Chris Menkhus"
            date={element.date}
            imgSrc={element.image.url}
            slug={element.slug}
            linkPaths={[{ path: '/blog/' + element.slug, label: 'Read More' }]}
          />
        )
      })}
    </div>
  )
}

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page
