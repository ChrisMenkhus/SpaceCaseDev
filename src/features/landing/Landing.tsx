import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/Contact/ContactSection'
import InsightsSection from './components/InsightsSection/InsightsSection'
import IntroSection from './components/IntroSection/IntroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

import Post from 'src/types/Post'
import Project from 'src/types/Project'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

function Landing({ posts, projects }: LandingInterface) {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <InsightsSection posts={posts} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  )
}

export default Landing
