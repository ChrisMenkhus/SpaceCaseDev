import { Button } from '@components/atoms/Button'
import RocketLaunchIcon from '@components/molecules/Icons/RocketLaunchIcon'
import ScrollDownIcon from '@components/molecules/Icons/ScrollDownIcon'
import Section from '@components/templates/Section'
import { CalendarIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import * as data from 'public/data/home'

type HeaderContainerInterface = { children: JSX.Element | JSX.Element[] }

function HeaderContainer({ children }: HeaderContainerInterface) {
  return (
    <div className="relative flex-col-reverse mb-4 max-w-screen-lg sm:flex-row flexcenter">
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
      <h1 className="pt-0 pb-2 text-6xl font-bold leading-none text-center sm:text-left md:pl-0 md:m-0 md:text-8xl lg:text-8xl">
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
    <Section.Container name="Intro" className="px-4 min-h-[calc(100vh-12rem)]">
      <HeaderContainer>
        <Header
          title={data.Intro.text as string}
          subtitle={data.Intro.text2 as string}
        />
        <div className="relative w-full h-96">
          <Image src="/icon/astronaut.svg" layout="fill" alt="rocket image" />
        </div>
      </HeaderContainer>
      <Section.Footer>
        <div className="flex-row flex-wrap py-2 px-8 md:py-0">
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
            icon={ChevronDoubleDownIcon}
            className="my-16 mx-auto "
            // onClick={() => scrollToRef(contactSectionRef)}
          />
        </div>
      </Section.Footer>
    </Section.Container>
  )
}
