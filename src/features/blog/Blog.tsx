import Section from '@components/templates/Section'
import { NextPage } from 'next'
import Post from 'src/types/Post'

type BlogInterface = {
  posts: Post[]
}

export default function Blog({ ...props }: BlogInterface) {
  return <></>
}
