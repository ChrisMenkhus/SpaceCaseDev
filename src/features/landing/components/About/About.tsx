import Section from '@components/templates/Section'
import Image from 'next/image'
import * as data from 'public/data/home'
import { FC } from 'react'

type ListsType = {
  name: string
  data: string | string[]
  imgSrc?: string
}[]

function ListCards({ lists = [] }: { lists?: ListsType }) {
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-start pt-16 pb-2">
      {lists.map((e, i) => {
        return (
          <ListCard
            key={e.name + i}
            title={e.name}
            items={typeof e.data === 'string' ? [e.data] : e.data}
            imgSrc={e.imgSrc}
          />
        )
      })}
    </div>
  )
}

function ListCard({
  items,
  title,
  imgSrc = '/people-icon.svg',
}: {
  items: string[]
  title: string
  imgSrc?: string
}) {
  const ListItems = items.map((item, i) => {
    return (
      <li className="pb-3" key={item + i}>
        {item}
      </li>
    )
  })
  return (
    <div className="flex flex-col my-8 mx-4 w-64 h-full bg-white dark:bg-dark dark:text-white text-black rounded shadow-lg md:m-auto md:my-8 md:mx-4">
      <div className="p-4 m-auto -mt-5 mb-0 w-14 h-14 text-white bg-gradient-to-b from-dark to-[#111] rounded-full">
        <Image
          src={imgSrc}
          alt="starship image"
          width="50px"
          height="50px"
          layout="responsive"
          objectFit="scale-down"
        />
      </div>
      <h1 className="flex-wrap px-4 my-4 text-lg font-bold text-center">
        {title}
      </h1>
      <ul className="py-2 px-4 w-full text-left">{ListItems}</ul>
    </div>
  )
}

const TextBlockGroup: FC = ({ children }) => {
  return (
    <div className="flex-col flex-wrap m-auto w-full max-w-sm md:mr-0 lg:max-w-sm flexcenter">
      {children}
    </div>
  )
}

function TextBlock({ text }: { text: string }) {
  return <p className="py-1 pb-4 mb-auto indent-6">{text}</p>
}

function CallToActionImage() {
  return (
    <div className="pr-8 m-auto w-96 h-full md:ml-0">
      <div className="relative m-auto w-80 h-80">
        <Image
          src="/thinking-about-space.svg"
          alt="starship image"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section.Container
      name="About"
      // ref={aboutSectionRef}
    >
      <Section.Header
        title={data.About.section.name}
        subtitle={data.About.section.altname || ''}
      />
      <Section.Content>
        <TextBlockGroup>
          <TextBlock text={data.About.text || ''} />
          <TextBlock text={data.About.text2 || ''} />
        </TextBlockGroup>
        <CallToActionImage />
        <ListCards lists={data.About.lists} />
      </Section.Content>
    </Section.Container>
  )
}

export { TextBlock, CallToActionImage, ListCards, TextBlockGroup }