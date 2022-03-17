/* eslint-disable react-hooks/exhaustive-deps */
import { filterProjectsByTags } from '../utils/filterProjectsByTags'
import { filterProjectsByTitle } from '../utils/filterProjectsByTitle'

import { ArticleStyleCard } from '@components/organisms/ArticleStyleCard'
import { Section } from '@components/templates/Section'
import { Search } from '@features/search/components/Search'
import { SearchBar } from '@features/search/components/SearchBar'
import SearchResultsContainer from '@features/search/components/SearchResultsContainer'
import SearchSideBar from '@features/search/components/SearchSideBar'
import { add, update } from '@features/search/searchTagsSlice'
import { filterTagsByChecked } from '@features/search/utils/filterTagsByChecked'
import { isDefaultTag } from '@features/search/utils/isDefaultTag'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/stores/redux/store'
import Project from 'src/types/Project'

// static props provider: './pages/portfolio/index.ts'

type PortfolioInterface = {
  projects: Project[]
}

function Portfolio({ projects }: PortfolioInterface) {
  const dispatch = useDispatch()
  const searchInput = useSelector((state: RootState) => state.searchInput.value)
  const tags = useSelector((state: RootState) => state.searchTags.value)

  const [filteredProjectsData, setFilteredProjectsData] = useState<
    Project[] | []
  >([])

  useEffect(() => {
    const projectsFilteredBySearchTags = filterProjectsByTags(
      projects,
      filterTagsByChecked(tags)
    )

    const projectsFilteredBySearchInput = filterProjectsByTitle(
      projectsFilteredBySearchTags,
      searchInput
    )

    setFilteredProjectsData(projectsFilteredBySearchInput)
  }, [tags, searchInput])

  const FilteredProjects = () => (
    <>
      {filteredProjectsData.map((element, i) => {
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
              if (isDefaultTag(tags, label)) {
                dispatch(update({ label: label, checked: true, default: true }))
              } else {
                dispatch(add({ label: label, checked: true, default: true }))
              }
            }}
          />
        )
      })}
    </>
  )

  return (
    <Section.Container name="Portfolio" className="justify-start min-h-screen">
      <Section.HeaderForPages title="Portfolio" subtitle="spacecase.dev" />
      <Section.Content>
        <Search className="grid grid-cols-3">
          <SearchBar />
          <SearchSideBar />
          <SearchResultsContainer>
            <FilteredProjects />
          </SearchResultsContainer>
        </Search>
      </Section.Content>
    </Section.Container>
  )
}

Portfolio.displayName = 'PortfolioRoute'
export default Portfolio
