/* eslint-disable react-hooks/exhaustive-deps */
import { ArticleStyleCard } from '@components/organisms/ArticleStyleCard'
import { Section } from '@components/templates/Section'
import { Search } from '@features/search/components/Search'
import { SearchBar } from '@features/search/components/SearchBar'
import SearchResultsContainer from '@features/search/components/SearchResultsContainer'
import SearchSideBar from '@features/search/components/SearchSideBar'
import { add, remove, toggle, update } from '@features/search/searchTagsSlice'
import Tag from '@features/search/types/Tag'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'
import Project from 'src/types/Project'

// static props provider: './pages/portfolio/index.ts'
// context api provided: './pages/portfolio/index.ts'

type PortfolioInterface = {
  projects: Project[]
}

function Portfolio({ projects }: PortfolioInterface) {
  const searchInput = useSelector((state: RootState) => state.searchInput.value)
  const tags = useSelector((state: RootState) => state.searchTags.value)
  const defaultTags = tags.filter((element) => element.default === true)
  const checkedTags = tags.filter((element) => element.checked === true)
  const checkedTagsLabels = checkedTags.map(({ label }) => label)

  const dispatch = useDispatch()
  const isDefaultTag = (label: string) =>
    defaultTags.filter((value) => value.label === label).length > 0
  // const filteredProjects = projects.filter((element) => {
  //   // stringTags = element.stackTags.toString
  //   if (element.stackTags.includes(checkedTagsLabels)) {
  //     return element
  //   }
  // })

  const [filteredProjects, setFilteredProjects] = useState<Project[] | []>([])
  const [filters, setFilters] = useState('')

  useEffect(() => {
    setFilters(
      searchInput +
        checkedTagsLabels.reduce((acc, curr) => {
          return (acc = acc + ' ' + curr)
        })
    )

    console.log('filters: ', filters)

    const filtered = projects.filter((element) => {
      if (
        element.stackTags.some(
          (value) => value.toLowerCase() === filters.toLowerCase()
        )
      ) {
        return element
      }
    })

    setFilteredProjects(searchInput.length > 0 ? filtered : projects)
  }, [tags, searchInput])

  return (
    <Section.Container name="Portfolio" className="justify-start min-h-screen">
      <Section.Content>
        <Search className="grid grid-cols-3">
          <SearchBar />
          <SearchSideBar />
          <SearchResultsContainer>
            {filteredProjects.map((element, i) => {
              return (
                <ArticleStyleCard
                  cardType="Project"
                  {...element}
                  key={element.title + i}
                  imgSrc={element.desktopImage.url}
                  linkPaths={[
                    { path: element.websiteUrl, label: 'Website' },
                    { path: element.githubUrl, label: 'GitHub' },
                  ]}
                  tags={element.stackTags}
                  tagsCallback={(label: string) => {
                    if (isDefaultTag(label)) {
                      console.log('updating')

                      dispatch(
                        update({ label: label, checked: true, default: true })
                      )
                    } else {
                      dispatch(
                        add({ label: label, checked: true, default: true })
                      )
                      console.log('adding')
                    }
                  }}
                />
              )
            })}
          </SearchResultsContainer>
        </Search>
      </Section.Content>
    </Section.Container>
  )
}

Portfolio.displayName = 'PortfolioRoute'
export default Portfolio
