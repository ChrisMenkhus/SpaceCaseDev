/* eslint-disable react-hooks/exhaustive-deps */
import { ProjectCard } from '@components/organisms'
import { ArticleStyleCard } from '@components/organisms/ArticleStyleCard'
import { Section } from '@components/templates/Section'
import { SearchBar } from '@features/search/components/SearchBar'
import SearchComponentsContainer from '@features/search/components/SearchComponentsContainer'
import { SearchLayout } from '@features/search/components/SearchLayout'
import SearchSideBar from '@features/search/components/SearchSideBar'
import { SearchContext } from '@features/search/stores/SearchContext'
import Tag from '@features/search/types/Tag'
import useUrlQuery from '@utils/new/useUrlQuery'
import { useContext, useEffect } from 'react'
import Project from 'src/types/Project'

// static props provider: './pages/portfolio/index.ts'
// context api provided: './pages/portfolio/index.ts'

type PortfolioInterface = {
  projects: Project[]
}

function Portfolio({ projects }: PortfolioInterface) {
  const context = useContext(SearchContext)
  const urlTag: Tag = { label: useUrlQuery(), checked: false, default: false }

  let searchInput = context?.store.searchInput || ''
  const handleSearchInput = (value: string) => {
    context?.actions.setSearchInput(value)
  }

  const mutateSearchTags = (
    actionType: 'create' | 'update' | 'delete',
    tag: Tag
  ) => {
    console.log('mutating: ' + tag.label)
    switch (actionType) {
      case 'create':
        {
          const tagAlreadyExists =
            [...(context?.store.searchTags || [])].filter((element: Tag) => {
              if (element.label === tag.label) {
                return tag
              }
            }).length > 0
          const updatedTags = [...(context?.store.searchTags || []), tag]
          if (!tagAlreadyExists) context?.actions.setSearchTags(updatedTags)
        }
        break
      case 'update':
        {
          const updatedTags = [...(context?.store.searchTags || [])].map(
            (element: Tag) => {
              if (element.label === tag.label) {
                return tag
              }
              return element
            }
          )
          context?.actions.setSearchTags(updatedTags)
        }
        break
      case 'delete':
        {
          const updatedTags = [...(context?.store.searchTags || [])].filter(
            (element: Tag) => {
              if (element.label !== tag.label) {
                return tag
              }
            }
          )
          context?.actions.setSearchTags(updatedTags)
        }
        break
    }
  }

  useEffect(() => {
    mutateSearchTags('create', urlTag)
  }, [])

  return (
    <Section.Container name="Portfolio" className="min-h-screen">
      <Section.Content>
        <SearchLayout className="flex flex-col">
          <SearchBar
            inputValue={searchInput}
            setInputValue={handleSearchInput}
            searchTags={context?.store.searchTags || []}
            mutateSearchTags={mutateSearchTags}
          />
          <div className="flex flex-row flex-wrap justify-center items-start md:flex-nowrap">
            <SearchSideBar
              searchTags={context?.store.searchTags || []}
              mutateSearchTags={mutateSearchTags}
            />
            <SearchComponentsContainer>
              {projects.map((element, i) => {
                return (
                  <ArticleStyleCard
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
                  />
                )
              })}
            </SearchComponentsContainer>
          </div>
        </SearchLayout>
      </Section.Content>
    </Section.Container>
  )
}

Portfolio.displayName = 'PortfolioRoute'
export default Portfolio
