import { Button } from '@components/atoms'
import { Section } from '@components/templates'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Router from 'next/router'
import { forwardRef } from 'react'

type IntroInterface = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

export const IntroSection = forwardRef<HTMLDivElement, IntroInterface>(
  ({}, ref?) => {
    return (
      <Section.Container name="Intro" className={styles.main}>
        <div className={styles.background.main}>
          <div className={styles.background.left} />
          <div className={styles.background.right.main}>
            <div className="relative w-8 h-8">
              <Image alt="resume logo" src="/resume.svg" layout="fill" />
            </div>
          </div>
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
                  Router.push('#About')
                }}
              >
                Learn More
              </Button>
              <div className="flex justify-center items-center md:mt-8">
                <a
                  href="https://github.com/ChrisMenkhus"
                  className={styles.content.textContainer.ellipseButton}
                  aria-label="link to GitHub"
                >
                  <div className="relative w-8 h-8">
                    <Image alt="github logo" src="/github.svg" layout="fill" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/solonaut/"
                  className={styles.content.textContainer.ellipseButton}
                  aria-label="link to LinkedIn"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      alt="linkedin logo"
                      src="/linkedin.svg"
                      layout="fill"
                    />
                  </div>
                </a>
                <a
                  href="https://docs.google.com/document/d/1oDRiRERHm9KubdwktoU7MtR5XTMyZr6Y5Rp2a7SrsHM/edit?usp=sharing"
                  className={styles.content.textContainer.ellipseButton}
                  aria-label="link to resume"
                >
                  <div className="relative w-8 h-8">
                    <Image alt="resume logo" src="/resume.svg" layout="fill" />
                  </div>
                </a>
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
      </Section.Container>
    )
  }
)

const styles = {
  main: 'relative h-screen md:h-[calc(100vh-8rem)]',
  background: {
    main: 'flex w-full h-full max-h-[1050px] flex-col md:flex-row max-w-screen-lg ',
    left: 'w-1/2 h-full ',
    right: {
      main: 'bg-secondary h-full h-4/6 md:h-5/6 md:m-auto md:w-1/2 md:rounded',
    },
  },
  content: {
    main: 'flex absolute inset-y-0 flex-col w-full max-w-screen-lg h-full md:flex-row overflow-hidden',
    textContainer: {
      main: 'flex justify-center items-center m-auto w-full h-full md:pt-0 md:w-1/2 bg-transparent ',
      header1:
        'p-4 w-full max-w-fit text-2xl mt-16 sm:m-auto sm:text-3xl md:pt-0 md:pb-16 h-full flex flex-col justify-center items-center',
      span1: 'block text-left',
      span2:
        'block text-6xl text-left text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-6xl ',
      span3: 'block text-right',
      button: 'm-auto my-8 md:mt-16 md:flex',
      ellipseButton:
        'grid place-items-center p-4 mx-4 my-auto w-16 h-16 bg-white rounded-full shadow-md hover:scale-110 transition-all',
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
