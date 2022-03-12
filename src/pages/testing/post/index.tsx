import Post from '!types/Post'
import Tag from '!types/Tag'
import { Header } from '@components/atoms/Header'
import { NewArticleCard } from '@components/organisms'
import { SearchBar } from '@components/organisms/SearchBar'
import { Section } from '@components/templates'
import addNewTag from '@utils/addNewTag'
import { addStringToArray } from '@utils/addStringToArray'
import makeStyles from '@utils/makeStyles'
import { queryForPosts, queryForProjects } from '@utils/queryContentful'
import { removeStringFromArray } from '@utils/removeStringFromArray'
import setTagChecked from '@utils/setTagChecked'
import { NextPage } from 'next'
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
  return (
    <>
      <Header {...pageSeo} />
      <Section.Container name="testing playground" className="mt-20 ">
        <Section.Content>
          <h1 className="mt-20 text-7xl">hello world</h1>
        </Section.Content>
      </Section.Container>
    </>
  )
}

const pageSeo = { title: 'Insights', description: 'Insights' }
Page.displayName = 'BlogArticlePage'

export default Page
