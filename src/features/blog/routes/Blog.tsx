/* eslint-disable react-hooks/exhaustive-deps */
// import { filterProjectsByTags } from '../utils/filterProjectsByTags'
// import { filterProjectsByTitle } from '../utils/filterProjectsByTitle'
// import { filterTagsByChecked } from '../utils/filterTagsByChecked'
// import { isDefaultTag } from '../utils/isDefaultTag'
import { filterPostsByTags } from '../utils/filterPostsByTags'
import { filterPostsByTitle } from '../utils/filterPostsByTitle'

import Post from '!types/Post'
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

// static props provider: './pages/portfolio/index.ts'

type BlogInterface = {
  posts: Post[]
}

export function Blog({ posts }: BlogInterface) {
  const dispatch = useDispatch()
  const searchInput = useSelector((state: RootState) => state.searchInput.value)
  const tags = useSelector((state: RootState) => state.searchTags.value)

  const [filteredPostsData, setFilteredPostsData] = useState<Post[] | []>([])

  useEffect(() => {
    const postsFilteredBySearchTags = filterPostsByTags(
      posts,
      filterTagsByChecked(tags)
    )

    const postsFilteredBySearchInput = filterPostsByTitle(
      postsFilteredBySearchTags,
      searchInput
    )

    setFilteredPostsData(postsFilteredBySearchInput)
  }, [tags, searchInput])

  const FilteredPosts = () => (
    <>
      {filteredPostsData.map((element: Post, i) => {
        const path = '/blog/' + element.slug
        return (
          <ArticleStyleCard
            title={element.title}
            description={element.description}
            slug={element.slug}
            imgSrc={element.image.url}
            key={element.title + i}
            date={element.date}
            author={'Chris Menkhus'}
            linkPaths={[{ path: path, label: 'Read More' }]}
            cardType="Guide"
            tags={element.tags}
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
    <Section.Container name="Insights" className="justify-start min-h-screen">
      <Section.HeaderForPages title="Insights" subtitle="spacecase.dev" />
      <Section.Content>
        <Search className="grid grid-cols-3">
          <SearchBar />
          <SearchSideBar />
          <SearchResultsContainer>
            <FilteredPosts />
          </SearchResultsContainer>
        </Search>
      </Section.Content>
    </Section.Container>
  )
}

Blog.displayName = 'BlogRoute'
export default Blog
