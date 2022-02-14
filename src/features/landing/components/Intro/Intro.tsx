import { Button } from '@components/atoms/Button'
import Section from '@components/templates/Section'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Intro({
  scrollFunction,
}: {
  scrollFunction: () => void
}) {
  const styles = {
    background: 'flex w-full h-[calc(100vh-4rem)] flex-col md:flex-row',
    background__left: 'w-1/2 h-full',
    background__right: 'bg-secondary h-[30vh] md:h-5/6 md:m-auto md:w-1/2 ',
    content: '',
  }

  return (
    <Section.Container name="Intro" className={'relative mt-0'}>
      <div className={styles.background}>
        <div className={styles.background__left} />
        <div className={styles.background__right} />
      </div>
      <div
        className={
          'flex absolute inset-y-0 flex-col w-full max-w-screen-lg h-[calc(100vh-5rem)] md:flex-row'
        }
      >
        <div className=" flex justify-center items-center m-auto w-full h-fit md:pt-0 md:w-1/2">
          <h1 className="p-4 pt-16 w-full max-w-fit text-2xl sm:m-auto sm:text-3xl md:pt-0 md:pb-16">
            <span className="block text-left">{"Hey, I'm"}</span>
            <span className="block text-5xl text-left text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-6xl">
              Chris Menkhus
            </span>
            <span className="block text-right">Front End Web-Stronaut</span>
            <Button
              variant="primary"
              size="lg"
              className="m-auto my-8 md:mt-16"
              icon={ChevronDoubleDownIcon}
              onClick={scrollFunction}
            >
              Learn More
            </Button>
          </h1>
        </div>
        <div className="flex overflow-hidden relative justify-center items-center w-full h-full md:w-1/2">
          <figure className="absolute bottom-0 -left-1 w-36 h-full max-h-[32rem] md:relative md:m-auto md:ml-0 md:w-56 md:max-h-[42rem]">
            <Image
              src="/icon/chris-illustration.svg"
              alt="starship image"
              layout="fill"
            />
          </figure>
        </div>
      </div>
    </Section.Container>
  )
}
