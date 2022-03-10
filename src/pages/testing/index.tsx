import Post from '!types/Post'
import { Header } from '@components/atoms/Header'
import { NewArticleCard } from '@components/organisms'
import { Section } from '@components/templates'
import Portfolio from '@features/portfolio/routes/Portfolio'
import { queryForPosts, queryForProjects } from '@utils/queryContentful'
import { NextPage } from 'next'
import Project from 'src/types/Project'

type PageProps = {
  posts: Post[]
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ posts, projects }) => {
  return (
    <>
      <Header {...pageSeo} />
      <Section.Container name="lol">
        <Section.Content>
          <div className="max-w-screen-md">
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
                  linkPaths={[
                    { path: '/blog/' + element.slug, label: 'Read More' },
                  ]}
                />
              )
            })}
          </div>
          <div className="max-w-screen-md">
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

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page
