import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

export const s = {
  content: {
    main: 'flex flex-col w-full max-w-screen-lg h-full md:flex-row',
    titleText: 'w-full text-lg font-medium text-left tracking-wide',
    leftContainer: {
      main: 'px-8 flex flex-col justify-center items-center m-auto w-full md:w-1/2 md:h-full',
      paragraph: 'indent-4 pb-4',
    },
    rightContainer: {
      main: 'px-8 flex flex-col justify-start items-center m-auto w-full md:w-1/2 md:h-full',
      tagsGroup: 'flex flex-wrap pb-4',
      tag: 'px-2 mr-2 my-1 text-white bg-secondary rounded',
      tag2: 'px-2 mr-2 my-1 text-white bg-dark rounded',
    },
  },
}

type AboutInterface = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

const About = forwardRef<HTMLDivElement, AboutInterface>(
  ({ className = '' }, ref?) => {
    return (
      <Section.Container name="About" className="h-full" ref={ref}>
        <Section.Header
          title="About"
          subtitle="Did I mention im obsessed with space? 🚀"
        />
        <div className={s.content.main}>
          <div className={s.content.leftContainer.main}>
            <h1 className={s.content.titleText}>Technical</h1>
            <p className={s.content.leftContainer.paragraph}>
              I’m Chris Menkhus a Colorado based web developer and designer. I
              develop real-world web applications through modern web design
              concepts, web development technologies, and search engine
              optimization practices. I craft custom web solutions that are
              tailored specifically to the clients needs.
            </p>
            <h2 className={s.content.titleText}>Personal</h2>
            <p className={s.content.leftContainer.paragraph}>
              When im not programming or spending time with my girlfriend im
              dreaming of space, comic book movies, and my next crazy adventure.
              Every weekend I go on an adventure wether that be finding a
              beautiful new view of Colorado or slaying monsters and gaining EXP
              in Dungeons & Dragons.
            </p>
          </div>
          <div className={s.content.rightContainer.main}>
            <div className="mr-auto">
              <h3 className={s.content.titleText}>Current Tech Stack</h3>
              <ul className={s.content.rightContainer.tagsGroup}>
                <li className={s.content.rightContainer.tag}>Typescript</li>
                <li className={s.content.rightContainer.tag}>React</li>
                <li className={s.content.rightContainer.tag}>NextJs</li>
                <li className={s.content.rightContainer.tag}>Graphql</li>
                <li className={s.content.rightContainer.tag}>Tailwind</li>
                <li className={s.content.rightContainer.tag}>Redux Toolkit</li>
                <li className={s.content.rightContainer.tag}>Headless CMS</li>
              </ul>
            </div>
            <div className="mr-auto">
              <h3 className={s.content.titleText}>Other Skills</h3>
              <ul className={s.content.rightContainer.tagsGroup}>
                <li className={s.content.rightContainer.tag}>
                  Javascript (ES6+)
                </li>
                <li className={s.content.rightContainer.tag}>HTML</li>
                <li className={s.content.rightContainer.tag}>CSS</li>
                <li className={s.content.rightContainer.tag}>Redux</li>
                <li className={s.content.rightContainer.tag}>NodeJs</li>
                <li className={s.content.rightContainer.tag}>React Router</li>
                <li className={s.content.rightContainer.tag}>
                  Styled Components
                </li>
                <li className={s.content.rightContainer.tag}>CSS Modules</li>
                <li className={s.content.rightContainer.tag}>
                  ExpressJs Server
                </li>
                <li className={s.content.rightContainer.tag}>
                  PostgreSQL Database
                </li>
              </ul>
            </div>
            <div className="mr-auto">
              <h3 className={s.content.titleText}>Tools</h3>
              <ul className={s.content.rightContainer.tagsGroup}>
                <li className={s.content.rightContainer.tag2}>VS Code</li>
                <li className={s.content.rightContainer.tag2}>
                  Github & Git Workflow
                </li>
                <li className={s.content.rightContainer.tag2}>
                  Github Issues & Projects
                </li>
                <li className={s.content.rightContainer.tag2}>Postman</li>
                <li className={s.content.rightContainer.tag2}>Vercel</li>
                <li className={s.content.rightContainer.tag2}>Heroku</li>

                <li className={s.content.rightContainer.tag2}>Contentful</li>
                <li className={s.content.rightContainer.tag2}>Prismic</li>
                <li className={s.content.rightContainer.tag2}>Figma</li>
                <li className={s.content.rightContainer.tag2}>Photoshop</li>
                <li className={s.content.rightContainer.tag2}>Gimp</li>
                <li className={s.content.rightContainer.tag2}>Inkscape</li>
              </ul>
            </div>
          </div>
        </div>
        <Button size="lg" variant="secondary" className="my-4">
          Schedule a Meeting
        </Button>
      </Section.Container>
    )
  }
)

About.displayName = 'AboutSection'
export default About
