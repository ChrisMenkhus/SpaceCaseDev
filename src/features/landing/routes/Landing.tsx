import useIntersectionObserver from '@utils/useIntersectionObserver'
import dynamic from 'next/dynamic'
import { RefObject, useContext, useEffect, useRef, useState } from 'react'
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

type SectionObserver = {
  ref: RefObject<HTMLDivElement>
  entry?: IntersectionObserverEntry
  visibility?: boolean
}

export function Landing({ posts, projects }: LandingInterface) {
  const context = useContext(Context)

  const aboutRef = useRef(null)
  const insightsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const insightsEntry = useIntersectionObserver(aboutRef, {
    freezeOnceVisible: true,
    threshold: 0.5,
  })

  const projectsEntry = useIntersectionObserver(insightsRef, {
    freezeOnceVisible: true,
    threshold: 0.5,
  })

  const contactEntry = useIntersectionObserver(projectsRef, {
    freezeOnceVisible: true,
    threshold: 0.5,
  })

  const insightsVisibility = insightsEntry?.isIntersecting

  const projectsVisibility = projectsEntry?.isIntersecting

  const contactVisibility = contactEntry?.isIntersecting

  return (
    <>
      <IntroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={insightsRef}>
        {insightsVisibility && <InsightsSection posts={posts} />}
      </div>
      <div ref={projectsRef}>
        {projectsVisibility && <ProjectsSection projects={projects} />}
      </div>
      <div ref={contactRef}>{contactVisibility && <ContactSection />}</div>
    </>
  )
}

Landing.displayName = 'LandingComponent'
