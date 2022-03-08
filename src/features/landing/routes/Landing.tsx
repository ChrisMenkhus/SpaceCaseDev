import { LazyRender } from '@components/atoms'
import useTimeout from '@utils/useTimeout'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Post from 'src/types/Post'
import Project from 'src/types/Project'

const IntroSection = dynamic(async () => {
  const module = await import('../components/IntroSection')
  return module.IntroSection
})
const AboutSection = dynamic(async () => {
  const module = await import('../components/AboutSection')
  return module.AboutSection
})
const InsightsSection = dynamic(async () => {
  const module = await import('../components/InsightsSection')
  return module.InsightsSection
})
const ProjectsSection = dynamic(async () => {
  const module = await import('../components/ProjectsSection')
  return module.ProjectsSection
})
const ContactSection = dynamic(async () => {
  const module = await import('../components/ContactSection')
  return module.ContactSection
})

// static props provided by './pages/index.ts'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

export function Landing({ posts, projects }: LandingInterface) {
  const [showContactSection, setShowContactSection] = useState(false)
  const show = () => setShowContactSection(true)
  useTimeout(show, 500)
  return (
    <>
      <IntroSection />
      <LazyRender>
        <AboutSection />
      </LazyRender>
      <LazyRender>
        <InsightsSection posts={posts} />
      </LazyRender>
      <LazyRender>
        <ProjectsSection projects={projects} />
      </LazyRender>
      {showContactSection && <ContactSection />}
    </>
  )
}

Landing.displayName = 'LandingComponent'
