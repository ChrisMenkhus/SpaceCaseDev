import { Button } from '@components/atoms'
import { SocialButtonGroup } from '@components/organisms'
import { Section } from '@components/templates'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Router from 'next/router'
import { useContext } from 'react'
import { AppContext } from 'src/stores/context/AppContext'

type IntroInterface = React.HTMLAttributes<HTMLDivElement>

export const IntroSection = ({ ...props }: IntroInterface) => {
  const context = useContext(AppContext)

  const ScrollToAboutSection = () => {
    context?.store.aboutRef.current?.scrollIntoView(true)
  }

  return (
    <Section.Container name="Intro">
      <div className={styles.main}>
        <div className={styles.background.main}>
          <div className={styles.background.left} />
          <div className={styles.background.right.main}></div>
        </div>
        <div className={styles.content.main}>
          <div className={styles.content.textContainer.main}>
            <div className={styles.content.textContainer.header1}>
              <h1>
                <span className={styles.content.textContainer.span1}>
                  Hey, I am
                </span>
                <span className={styles.content.textContainer.span2}>
                  Chris Menkhus
                </span>
                <span className={styles.content.textContainer.span3}>
                  Front End Web-Stronaut
                </span>
              </h1>
              <Button
                variant="primary"
                size="lg"
                className={styles.content.textContainer.button}
                icon={ChevronDoubleDownIcon}
                onClick={(e) => {
                  e.preventDefault()
                  ScrollToAboutSection()
                }}
              >
                Learn More About Me
              </Button>
              <div className={styles.content.textContainer.socialButtonGroup}>
                <SocialButtonGroup />
              </div>
            </div>
          </div>
          <div className={styles.content.imageContainer.main}>
            <figure className={styles.content.imageContainer.figure}>
              <Image
                src="https://res.cloudinary.com/spacecaser/image/upload/v1645042060/chris-illustration_qbzyoa.svg"
                width="222"
                height="670"
                alt="no shadow flat anime image of Chris"
                className={styles.content.imageContainer.image}
              />
            </figure>
          </div>
        </div>
      </div>
    </Section.Container>
  )
}

const styles = {
  main: 'relative w-screen max-w-screen-xl h-auto',
  background: {
    main: 'flex absolute w-full h-full md:max-h-[1050px] flex-col md:flex-row max-w-screen-xl pointer-events-none',
    left: 'w-1/2 h-full -z-10',
    right: {
      main: 'bg-secondary h-full border-white h-4/6 md:h-5/6 md:m-auto md:w-1/2 md:rounded',
    },
  },
  content: {
    main: 'flex inset-y-0 md:py-8 flex-col w-full max-w-screen-xl h-full md:flex-row overflow-hidden',
    textContainer: {
      main: 'md:px-8 flex justify-center items-center m-auto w-full h-full md:pt-16 md:w-1/2 bg-transparent ',
      header1:
        'p-4 w-full max-w-fit text-2xl mt-16 sm:m-auto sm:text-3xl md:pt-0 md:pb-16 h-full flex flex-col justify-center items-center',
      span1: 'block text-left',
      span2:
        'block text-left text-transparent bg-clip-text font-ibm bg-gradient-to-br from-primary to-secondary text-dynamicMd leading-none',
      span3: 'block text-right',
      button: 'm-auto my-8 md:mt-16 md:flex',
      socialButtonGroup: '',
    },
    imageContainer: {
      main: 'flex relative justify-center items-center w-full h-full md:h-full md:w-1/2 ',
      figure: 'flex w-fit h-fit mr-auto mt-4',
      figure__old:
        'absolute bottom-1 left-0 w-auto h-auto md:relative md:m-auto md:ml-0 md:w-56 md:h-full md:max-h-[42rem] ',
      image: '',
    },
  },
}

IntroSection.displayName = 'IntroSection'
