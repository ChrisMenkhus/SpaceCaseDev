/* eslint-disable react-hooks/exhaustive-deps */
import Post from '!types/Post'
import Tag from '!types/Tag'
import { Header } from '@components/atoms/Header'
import { NewArticleCard } from '@components/organisms'
import { SearchBar } from '@components/organisms/__old/SearchBar'
import { Section } from '@components/templates'
import addNewTag from '@utils/addNewTag'
import makeStyles from '@utils/makeStyles'
import { queryForPosts, queryForProjects } from '@utils/queryContentful'
import setTagChecked from '@utils/setTagChecked'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { HTMLAttributes, useEffect, useState } from 'react'
import Project from 'src/types/Project'

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

type PageProps = {
  posts: Post[]
  projects: Project[]
}

const Page: NextPage<PageProps> = ({ posts, projects }) => {
  const router = useRouter()
  console.log('QUERY: ', router.query)
  const queryParams: { tag?: string } = router.query

  const [searchInputValue, setSearchInputValue] = useState('')

  const [mySearchTags, setMySearchTags] = useState<Tag[]>([
    { label: 'React', checked: true, isDefaultTag: true },
    { label: 'NextJs', checked: false, isDefaultTag: true },
    { label: 'Javascript', checked: false, isDefaultTag: true },
    { label: 'NodeJs', checked: false, isDefaultTag: true },
    { label: 'Styled Components', checked: false, isDefaultTag: true },
    { label: 'Typescript', checked: false, isDefaultTag: true },
  ])

  const updateMySearchTags = (updatedTags: Tag[]) => {
    setMySearchTags(updatedTags)
  }

  useEffect(() => {
    if (router.query.tag) {
      const targetTag = [...mySearchTags].filter((tag: Tag) => {
        if (
          tag.label.toLowerCase() === router.query.tag?.toString().toLowerCase()
        ) {
          return tag
        }
      })

      if (targetTag.length > 0) {
        updateMySearchTags(setTagChecked(mySearchTags, targetTag[0], true))
        return
      } else {
        updateMySearchTags(
          addNewTag(mySearchTags, {
            label: queryParams.tag!,
            checked: true,
            isDefaultTag: false,
          })
        )
      }
    }
  }, [router.query])

  return (
    <>
      <Header {...pageSeo} />
      <Section.Container name="testing playground" className="mt-20 ">
        <Section.Content>
          <SearchBar
            placeholder="Search"
            tags={mySearchTags}
            updateTags={updateMySearchTags}
            inputValue={searchInputValue}
            setInputValue={setSearchInputValue}
          />
          <div className="flex flex-col sm:flex-row">
            <TagsList tags={mySearchTags} updateTags={updateMySearchTags} />

            <ProjectsList
              className=""
              projects={[...projects].filter((e) => {
                if (false) {
                  // return e
                } else {
                  // SEARCH BY TAGS
                  const found = e.stackTags.some((r) =>
                    [...mySearchTags]
                      .map((e) => e.checked && e.label)
                      .includes(r)
                  )
                  console.log(found)
                  console.log(e.stackTags)

                  return found && e
                }
              })}
              searchTags={mySearchTags}
              updateSearchTags={updateMySearchTags}
            />
          </div>
        </Section.Content>
      </Section.Container>
    </>
  )
}

const TagsList = ({
  tags,
  updateTags,
}: {
  tags: Tag[]
  updateTags: (updatedTags: Tag[]) => void
}) => {
  return (
    <ul className="flex flex-row flex-wrap gap-4 justify-center pl-4 mr-auto mb-8 ml-0 w-full sm:flex-col sm:justify-start sm:max-w-xs">
      <li className="text-2xl font-semibold">Tags</li>
      {tags.map((element, i) => {
        if (!element.isDefaultTag) return
        return (
          <TagsListItem
            key={element.label + i}
            label={element.label}
            toggleTag={() => {
              updateTags(setTagChecked(tags, element, !element.checked))
            }}
            checked={element.checked}
          />
        )
      })}
    </ul>
  )
}

const TagsListItem = ({
  label,
  toggleTag,
  checked = false,
}: {
  label: string
  toggleTag: () => void
  checked: boolean
}) => {
  return (
    <ul className="text-xl">
      <input
        type="checkbox"
        name={label}
        id={label}
        className="w-4 h-4 accent-primary"
        checked={checked}
        onClick={() => {
          toggleTag()
        }}
      />
      <label htmlFor={label} className="pl-2">
        {label}
      </label>
    </ul>
  )
}

const ProjectsList = ({
  projects,
  searchTags,
  updateSearchTags,
  ...props
}: HTMLAttributes<HTMLElement> & {
  projects: Project[]
  searchTags: Tag[]
  updateSearchTags: (updatedTags: Tag[] | []) => void
}) => {
  return (
    <div
      className={makeStyles([
        'flex relative flex-col gap-16',
        props.className || '',
      ])}
    >
      {projects &&
        projects.map((element, i) => {
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
              tags={element.stackTags}
              search={{
                searchTags: searchTags,
                updateSearchTags: updateSearchTags,
              }}
            />
          )
        })}
    </div>
  )
}

// const PostsList = (posts: Post[]) => {
//   return (
//     <div className="flex relative flex-col">
//       {posts.map((element, i) => {
//         return (
//           <NewArticleCard
//             cardType="Guide"
//             title={element.title}
//             description={element.description}
//             key={element.title + i}
//             author="Chris Menkhus"
//             date={element.date}
//             imgSrc={element.image.url}
//             slug={element.slug}
//             linkPaths={[{ path: '/blog/' + element.slug, label: 'Read More' }]}
//           />
//         )
//       })}
//     </div>
//   )
// }

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page
