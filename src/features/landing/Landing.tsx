import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Insights from './components/Insights/Insights'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'

import scrollToRef from '@utils/scrollToRef'
import { useRef } from 'react'
import Post from 'src/types/Post'
import Project from 'src/types/Project'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

export default function Landing({ posts, projects }: LandingInterface) {
  const aboutRef = useRef(null)
  const scrollToAboutSection = () => {
    scrollToRef(aboutRef)
  }
  return (
    <>
      <Intro scrollFunction={scrollToAboutSection} />
      <About ref={aboutRef} />
      <Insights posts={posts} />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}
