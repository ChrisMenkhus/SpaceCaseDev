import { Button } from '@components/atoms/Button'
import ScrollDownIcon from '@components/molecules/Icons/ScrollDownIcon'
import Section from '@components/templates/Section'
import { CalendarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import * as data from 'public/data/home'

type HeaderContainerInterface = { children: JSX.Element | JSX.Element[] }

function HeaderContainer({ children }: HeaderContainerInterface) {
  return (
    <div className="flex-col-reverse mb-4 max-w-screen-lg sm:flex-row flexcenter">
      {children}
    </div>
  )
}

interface HeaderInterface {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderInterface) {
  return (
    <header className="flex-col flexleft ">
      <h1 className="pt-0 pb-2 text-6xl font-bold md:text-8xl leading-none text-center sm:text-left md:pl-0 md:m-0 lg:text-9xl">
        {title}
      </h1>
      <h2 className="m-auto w-8/12 text-lg font-light leading-none text-center text-transparent bg-clip-text sm:ml-0 sm:text-left 2xl:text-xl gradientbg">
        {subtitle}
      </h2>
    </header>
  )
}

function SpaceShipImage() {
  return (
    <div className="gap-4 w-full max-w-xs h-full ">
      <Image
        src="/starship.svg"
        alt="starship image"
        width="380px"
        height="520px"
        layout="responsive"
      />
    </div>
  )
}

export default function Intro() {
  return (
    <Section.Container name="Intro" className="min-h-[calc(100vh-12rem)] ">
      <HeaderContainer>
        <Header
          title={data.Intro.text as string}
          subtitle={data.Intro.text2 as string}
        />
        <SpaceShipImage />
      </HeaderContainer>
      <Section.Footer>
        <div className="flex-row flex-wrap px-8 py-2 md:py-0">
          <Button
            size="lg"
            variant="secondary"
            icon={CalendarIcon}
            className="mb-4"
            // onClick={() => scrollToRef(contactSectionRef)}
          >
            {data.Intro.button2 as string}
          </Button>
          <Button
            size="xl"
            variant="borderless"
            icon={ScrollDownIcon}
            className="mx-auto my-16 animate-bounce"
            // onClick={() => scrollToRef(contactSectionRef)}
          />
        </div>
      </Section.Footer>
    </Section.Container>
  )
}
