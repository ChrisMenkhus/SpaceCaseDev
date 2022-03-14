import { LazyRender } from '@components/atoms'
import dynamic from 'next/dynamic'
import Post from 'src/types/Post'
import Project from 'src/types/Project'

const IntroSection = dynamic(async () => {
  const module = await import('../components/pages/IntroSection')
  return module.IntroSection
})
const AboutSection = dynamic(async () => {
  const module = await import('../components/pages/AboutSection')
  return module.AboutSection
})
const InsightsSection = dynamic(async () => {
  const module = await import('../components/pages/InsightsSection')
  return module.InsightsSection
})
const ProjectsSection = dynamic(async () => {
  const module = await import('../components/pages/ProjectsSection')
  return module.ProjectsSection
})
const ContactSection = dynamic(async () => {
  const module = await import('../components/pages/ContactSection')
  return module.ContactSection
})

// static props provided by './pages/index.ts'

type LandingInterface = {
  posts: Post[]
  projects: Project[]
}

export function Landing({ posts, projects }: LandingInterface) {
  return (
    <>
      <IntroSection />

      <AboutSection />

      <LazyRender>
        <InsightsSection posts={posts} />
      </LazyRender>

      <LazyRender>
        <ProjectsSection projects={projects} />
      </LazyRender>

      <LazyRender>
        <ContactSection />
      </LazyRender>
    </>
  )
}

Landing.displayName = 'LandingComponent'
