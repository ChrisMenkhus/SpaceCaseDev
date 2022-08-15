import { Button } from '@components/atoms'
import { Section } from '@components/templates'
import { CalendarIcon } from '@heroicons/react/outline'
import OpenCalendlyPopup from '@utils/openCalendlyPopup'
import { useContext } from 'react'
import { AppContext } from 'src/stores/context/AppContext'

type AboutInterface = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export const AboutSection = ({ ...props }: AboutInterface) => {
  const context = useContext(AppContext)

  return (
    <Section.Container
      name="About"
      className="h-full"
      ref={context?.store.aboutRef}
    >
      <Section.Header
        title="About"
        subtitle="Did I mention im obsessed with space? 🚀"
      />
      <div className={styles.main}>
        <div className={styles.leftContainer.main}>
          <h1 className={styles.titleText}>Technical</h1>
          <p className={styles.leftContainer.paragraph}>
            {copytext.aboutMeTechnicalParagraph}
          </p>
          <h2 className={styles.titleText}>Personal</h2>
          <p className={styles.leftContainer.paragraph}>
            {copytext.aboutMePersonalParagraph}
          </p>
        </div>
        <div className={styles.rightContainer.main}>
          <div className="mr-auto">
            <h3 className={styles.titleText}>Current Tech Stack</h3>
            <ul className={styles.rightContainer.tagsGroup}>
              {copytext.currentSkills.map((e, i) => (
                <li className={styles.rightContainer.tag} key={e + i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-auto">
            <h4 className={styles.titleText}>Other Skills</h4>
            <ul className={styles.rightContainer.tagsGroup}>
              {copytext.otherSkills.map((e, i) => (
                <li className={styles.rightContainer.tag} key={e + i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-auto">
            <h5 className={styles.titleText}>Tools</h5>
            <ul className={styles.rightContainer.tagsGroup}>
              {copytext.tools.map((e, i) => (
                <li className={styles.rightContainer.tag2} key={e + i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="my-4"
        icon={CalendarIcon}
        onClick={() => OpenCalendlyPopup()}
      >
        Schedule a Meeting
      </Button>
    </Section.Container>
  )
}

const styles = {
  main: 'flex flex-col w-full max-w-screen-lg h-full md:flex-row',
  titleText: 'w-full  md:text-xl font-medium text-left tracking-wide',
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
}

const copytext = {
  aboutMeTechnicalParagraph:
    'I’m Chris Menkhus a Colorado based web developer and designer. I develop real-world web applications through modern web design concepts, web development technologies, and search engine optimization practices. I strive to write clean, maintainable, and reusable code that I can be proud of.',
  aboutMePersonalParagraph:
    'When im not programming im dreaming of space, comic book movies, and my next crazy adventure. Every weekend I go on an adventure wether that be finding a beautiful new view of Colorado or slaying monsters and gaining EXP in Dungeons & Dragons or God of War. I keep up to date with the newest web technologies and somehow still have time to obsess over SpaceX Starship spacecraft development. 🌌',

  currentSkills: [
    'C#',
    'T-SQL',
    'CRM',
  ],
  otherSkills: [
    'Javascript (ES6+)',
    'HTML',
    'CSS',
    'Redux',
    'NodeJs',
    'React Router',
    'Styled Components',
    'CSS Modules',
    'ExpressJs Server',
    'PostgreSQL Database',
    'Typescript',
    'React',
    'NextJs',
    'Graphql',
    'Tailwind',
    'Redux Toolkit',
    'Headless CMS',
    'Wordpress',
  ],
  tools: [
    'VS Code',
    'Visual Studio Pro',
    'Github & Git Workflow',
    'Github Issues & Projects',
    'Postman',
    'Vercel',
    'Heroku',
    'Contentful',
    'Prismic',
    'Figma',
    'Photoshop',
    'Gimp',
    'Inkscape',
  ],
}

AboutSection.displayName = 'AboutSection'
