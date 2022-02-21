import Button from '@components/atoms/Button'
import { GlobeIcon, SparklesIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface Props {
  variant?: 'primary' | 'featured'
  title: string
  text: string
  slug: string
  desktopImage: string
  mobileImage: string
  colors: string[]
  website: string
  github: string
}

function ProjectCard({ ...props }: Props) {
  return (
    <article className="overflow-hidden mb-16 last:mb-8 w-screen h-full dark:text-white bg-gradient-to-b from-[#E0E0E0] dark:from-dark to-white dark:to-[#111] rounded shadow-lg">
      <div className="flex flex-row flex-wrap justify-center items-center pt-10 mx-auto w-full">
        <div className="py-4 px-6 max-w-sm  ">
          <div className="pb-2 text-sm font-light text-dark">
            Figma, Inkscape, Photoshop
          </div>
          <div className="text-3xl font-bold leading-none">{props.title}</div>
          <p className="py-2 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
          </p>
          <div className="flex flex-row mt-2 w-auto ">
            {props.colors.map((e) => (
              <div
                key={e}
                className="-mr-4 w-10 h-10 bg-secondary rounded-full shadow-md"
                style={{ backgroundColor: e }}
              />
            ))}
          </div>
          <div className="flex flex-row gap-4 justify-start mt-4">
            <Button variant="primary" size="sm" icon={GlobeIcon}>
              Website
            </Button>
            <Button variant="primary" size="sm" icon={SparklesIcon}>
              Github
            </Button>
            <a href={props.website}>Website</a>
            <a href={props.github}>Github</a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-auto w-auto h-fit">
          <div className="relative mt-auto w-64 h-[16rem] sm:w-80 sm:h-[20rem]">
            <Image
              src={props.desktopImage}
              alt="generic blog image"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
          <div className="relative mt-auto w-24 h-52">
            <Image
              src={props.mobileImage}
              alt="generic blog image"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
