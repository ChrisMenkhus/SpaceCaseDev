import Project from '!types/Project'
import { Link } from '@components/atoms'
import { GlobeIcon, SparklesIcon } from '@heroicons/react/outline'
import isDark from '@utils/isDark'
import Image from 'next/image'

type ProjectCardProps = {
  variant?: 'primary' | 'featured'
} & Project

export function ProjectCard({ ...project }: ProjectCardProps) {
  const mainColor: string = project.colors[1]
  const textColor: string = isDark(mainColor) ? 'white' : 'black'

  return (
    <div className="relative my-12 last:mb-8 max-w-screen-lg md:my-8">
      <div className={styles.block} style={{ backgroundColor: mainColor }} />
      <article className={styles.main}>
        <div className={styles.flexContainer}>
          <div className={styles.textBox.main}>
            <div className={styles.textBox.tags.tagsGroup}>
              {project.stackTags.map((tag, i) => (
                <span
                  className={styles.textBox.tags.tag}
                  style={{ backgroundColor: mainColor, color: textColor }}
                  key={tag + i}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.textBox.title}>{project.title}</div>
            <p className={styles.textBox.description}>{project.description}</p>
            <ul className={styles.textBox.colorList}>
              {project.colors.map((e) => (
                <li
                  key={e}
                  className={styles.textBox.colorItem}
                  style={{ backgroundColor: e }}
                />
              ))}
            </ul>
            <div className={styles.textBox.linkBox}>
              <Link icon={GlobeIcon} href={project.websiteUrl}>
                Website
              </Link>
              <Link icon={SparklesIcon} href={project.githubUrl}>
                Github
              </Link>
            </div>
          </div>
          <div className={styles.imageBox.main}>
            <div className={styles.imageBox.desktopImage.main}>
              <Image
                src={project.desktopImage.url}
                alt={'desktop image of ' + project.title}
                layout="fill"
                objectFit="cover"
                className={styles.imageBox.desktopImage.image}
              />
            </div>
            <div className={styles.imageBox.mobileImage.main}>
              <Image
                src={project.mobileImage.url}
                alt={'mobile image of ' + project.title}
                layout="fill"
                objectFit="cover"
                className={styles.imageBox.mobileImage.image}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

const styles = {
  block:
    'bg-primary h-40 w-screen sm:w-40 absolute sm:-left-8 -top-8 sm:-top-8 rounded-xl sm:rounded-md shadow-md',
  main: 'overflow-hidden w-screen max-w-screen-lg h-full dark:text-white bg-gradient-to-b from-[#FFF] dark:from-dark to-white dark:to-[#111] rounded shadow-lg relative ',
  flexContainer:
    'flex flex-row flex-wrap justify-center items-center pt-10 mx-auto w-full ',
  textBox: {
    main: 'py-4 px-6 max-w-sm',
    tags: {
      tagsGroup: 'flex flex-wrap pb-2',
      tag: 'px-2 mr-2 my-1 text-black bg-secondary rounded',
    },
    title: 'text-3xl font-bold leading-none',
    description: 'py-2 text-base',
    colorList: 'flex flex-row mt-2 w-auto',
    colorItem:
      '-mr-4 w-10 h-10 bg-secondary rounded-full shadow-md transition-all',
    linkBox: 'flex flex-row gap-4 justify-start mt-4',
  },
  imageBox: {
    main: 'flex justify-center items-center mt-auto w-auto h-fit',
    desktopImage: {
      main: 'relative hover:z-10 mt-auto w-64 h-[16rem] shadow-xl transition-all hover:scale-105 sm:w-80 sm:h-[20rem]',
      image:
        'object-top hover:object-bottom rounded transition-all duration-500',
    },
    mobileImage: {
      main: 'relative mt-auto w-28 h-52 shadow-md transition-all hover:scale-110',
      image:
        'object-top hover:object-bottom rounded transition-all duration-1000',
    },
  },
}
