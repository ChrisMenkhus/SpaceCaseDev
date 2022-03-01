import { Link } from '@components/atoms'
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

export function ProjectCard({ ...props }: Props) {
  return (
    <article className={styles.main}>
      <div className={styles.flexContainer}>
        {/* textbox */}
        <div className={styles.textBox.main}>
          <div className={styles.textBox.tags}>Figma, Inkscape, Photoshop</div>
          <div className={styles.textBox.title}>{props.title}</div>
          <p className={styles.textBox.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
          </p>
          <ul className={styles.textBox.colorList}>
            {props.colors.map((e) => (
              <li
                key={e}
                className={styles.textBox.colorItem}
                style={{ backgroundColor: e }}
              />
            ))}
          </ul>
          <div className={styles.textBox.linkBox}>
            <Link icon={GlobeIcon} href={props.website}>
              Website
            </Link>
            <Link icon={SparklesIcon} href={props.github}>
              Github
            </Link>
          </div>
        </div>
        <div className={styles.imageBox.main}>
          <div className={styles.imageBox.desktopImage.main}>
            <Image
              src={props.desktopImage}
              alt="generic blog image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className={styles.imageBox.mobileImage.main}>
            <Image
              src={props.mobileImage}
              alt="generic blog image"
              layout="fill"
              objectFit="cover"
              className={styles.imageBox.mobileImage.image}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

const styles = {
  main: 'overflow-hidden mb-16 last:mb-8 w-screen h-full dark:text-white bg-gradient-to-b from-[#FFF] dark:from-dark to-white dark:to-[#111] rounded shadow-lg',
  flexContainer:
    'flex flex-row flex-wrap justify-center items-center pt-10 mx-auto w-full',
  textBox: {
    main: 'py-4 px-6 max-w-sm',
    tags: 'pb-2 text-sm font-light text-dark',
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
