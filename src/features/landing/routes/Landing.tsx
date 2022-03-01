import {
  AboutSection,
  ContactSection,
  InsightsSection,
  IntroSection,
  ProjectsSection,
} from '../components'

import Post from 'src/types/Post'
import Project from 'src/types/Project'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

export function Landing({ posts, projects }: LandingInterface) {
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

Landing.displayName = 'LandingComponent'
