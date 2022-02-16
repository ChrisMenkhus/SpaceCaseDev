import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export const s = {
  background: {
    main: 'flex w-full h-[calc(100vh-4rem)] max-h-[1050px] flex-col md:flex-row ',
    left: 'w-1/2 h-full ',
    right: 'bg-secondary h-4/6 md:h-5/6 md:m-auto md:w-1/2 ',
  },
  content: {
    main: 'flex absolute inset-y-0 flex-col w-full max-w-screen-lg h-[calc(100vh-4rem)] max-h-[1050px] md:flex-row ',
    textContainer: {
      main: 'flex justify-center items-center m-auto w-full h-fit md:pt-0 md:w-1/2 bg-transparent',
      header1:
        'p-4 w-full max-w-fit text-2xl sm:m-auto sm:text-3xl md:pt-0 md:pb-16 ',
      span1: 'block text-left',
      span2:
        'block text-6xl text-left text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-6xl ',
      span3: 'block text-right',
      button: 'hidden m-auto my-8 mt-16 md:flex',
    },
    imageContainer: {
      main: 'flex relative justify-center items-center w-full h-[31rem] md:h-full md:w-1/2',
      button: 'z-10 mt-auto mb-32 md:hidden',
      figure:
        'absolute -bottom-1 -left-1 w-[10rem] h-[30rem] md:relative md:m-auto md:ml-0 md:w-56 md:h-full md:max-h-[42rem] ',
      image: '',
    },
  },
}

export default function Intro({
  scrollFunction,
}: {
  scrollFunction: () => void
}) {
  return (
    <Section.Container name="Intro" className={'relative'}>
      <div className={s.background.main}>
        <div className={s.background.left} />
        <div className={s.background.right} />
      </div>
      <div className={s.content.main}>
        <div className={s.content.textContainer.main}>
          <div className={s.content.textContainer.header1}>
            <h1>
              <span className={s.content.textContainer.span1}>Hey, I am</span>
              <span className={s.content.textContainer.span2}>
                Chris Menkhus
              </span>
              <span className={s.content.textContainer.span3}>
                Front End Web-Stronaut
              </span>
            </h1>
            <Button
              variant="primary"
              size="lg"
              className={s.content.textContainer.button}
              icon={ChevronDoubleDownIcon}
              onClick={scrollFunction}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className={s.content.imageContainer.main}>
          <Button
            variant="inverse"
            size="lg"
            className={s.content.imageContainer.button}
            icon={ChevronDoubleDownIcon}
            onClick={scrollFunction}
          >
            Learn More
          </Button>
          <figure className={s.content.imageContainer.figure}>
            <Image
              src="/icon/chris-illustration.svg"
              alt="starship image"
              layout="fill"
              className={s.content.imageContainer.image}
            />
          </figure>
        </div>
      </div>
    </Section.Container>
  )
}
