import { LazyRender } from '@components/atoms'
import useTimeout from '@utils/useTimeout'
import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'
import { Context } from 'src/stores/Context'
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
  const context = useContext(Context)

  return (
    <>
      <IntroSection />
      <div ref={context?.store.aboutRef}>
        <LazyRender blockLazy={context?.store.blockLazyLoading}>
          <AboutSection />
        </LazyRender>
      </div>
      <LazyRender blockLazy={context?.store.blockLazyLoading}>
        <InsightsSection posts={posts} />
      </LazyRender>
      <LazyRender blockLazy={context?.store.blockLazyLoading}>
        <ProjectsSection projects={projects} />
      </LazyRender>
      <div ref={context?.store.contactRef}>
        <LazyRender blockLazy={context?.store.blockLazyLoading}>
          <ContactSection />
        </LazyRender>
      </div>
      {/* {showContactSection && <ContactSection />} */}
    </>
  )
}

Landing.displayName = 'LandingComponent'
