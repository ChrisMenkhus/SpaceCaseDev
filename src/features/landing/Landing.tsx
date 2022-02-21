import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Insights from './components/Insights/Insights'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'

import Post from 'src/types/Post'
import Project from 'src/types/Project'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

function Landing({ posts, projects }: LandingInterface) {
  return (
    <>
      <Intro />
      <About />
      <Insights posts={posts} />
      <Projects projects={projects} />
      <Contact />
    </>
  )
}

export default Landing
