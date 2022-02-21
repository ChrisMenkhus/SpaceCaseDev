import Button from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Router from 'next/router'
import { forwardRef } from 'react'

type IntroInterface = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

const Intro = forwardRef<HTMLDivElement, IntroInterface>(({}, ref?) => {
  return (
    <Section.Container name="Intro" className={'relative h-screen'}>
      <div className={styles.background.main}>
        <div className={styles.background.left} />
        <div className={styles.background.right} />
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
          </div>
        </div>
        <div className={styles.content.imageContainer.main}>
          <Button
            variant="inverse"
            size="lg"
            className={styles.content.imageContainer.button}
            icon={ChevronDoubleDownIcon}
            onClick={(e) => {
              e.preventDefault()
              Router.push('#About')
            }}
          >
            Learn More
          </Button>
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
})

const styles = {
  background: {
    main: 'flex w-full h-full max-h-[1050px] flex-col md:flex-row max-w-screen-lg ',
    left: 'w-1/2 h-full ',
    right: 'bg-secondary h-full md:h-5/6 md:m-auto md:w-1/2 ',
  },
  content: {
    main: 'flex absolute inset-y-0 flex-col w-full max-w-screen-lg h-full md:flex-row overflow-hidden',
    textContainer: {
      main: 'flex justify-center items-center m-auto w-full h-full md:pt-0 md:w-1/2 bg-transparent ',
      header1:
        'p-4 w-full max-w-fit text-2xl sm:m-auto sm:text-3xl md:pt-0 md:pb-16 ',
      span1: 'block text-left',
      span2:
        'block text-6xl text-left text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-6xl ',
      span3: 'block text-right',
      button: 'hidden m-auto my-8 mt-16 md:flex',
    },
    imageContainer: {
      main: 'flex relative justify-center items-center w-full h-full md:h-full md:w-1/2 ',
      button: 'absolute z-10 md:hidden',
      button__old: 'z-10 mt-auto mb-32 md:hidden',

      figure: 'flex w-fit h-fit mr-auto ',
      figure__old:
        'absolute bottom-1 left-0 w-auto h-auto md:relative md:m-auto md:ml-0 md:w-56 md:h-full md:max-h-[42rem] ',
      image: '',
    },
  },
}

Intro.displayName = 'IntroSection'

export default Intro
