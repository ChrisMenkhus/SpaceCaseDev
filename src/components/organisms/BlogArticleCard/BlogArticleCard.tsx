import { Link } from '@components/atoms'
import { BookOpenIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import truncateString from '@utils/truncateString'
import Image from 'next/image'

export function BlogArticleCard({
  title,
  text,
  date,
  className = '',
  variant = 'regular',
  imgSrc,
  slug,
}: {
  title?: string
  text?: string
  date?: string
  className?: string
  variant?: 'regular' | 'large'
  imgSrc: string
  slug: string
}) {
  return (
    <article
      className={makeStyles([
        styles.main,
        variant === 'regular' && 'sm:max-w-sm sm:flex-col',
        variant === 'large' && 'sm:max-w-screen-md',
        className,
      ])}
    >
      <div
        className={makeStyles([
          styles.imageBox,
          variant === 'regular' && 'sm:h-56',
        ])}
      >
        <Image
          src={imgSrc}
          alt="generic blog image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.textBox.main}>
        <div className={styles.textBox.line} />
        <h1 className={styles.textBox.title}>
          {truncateString(title as string, variant === 'large' ? 100 : 70)}
        </h1>
        <p className={styles.textBox.description}>
          {truncateString(text as string, variant === 'large' ? 212 : 138)}
        </p>
        <div className={styles.textBox.credits.main}>
          <small className={styles.textBox.credits.textBox.main}>
            <h2 className={styles.textBox.credits.textBox.name}>
              Chris Menkhus
            </h2>
            <h3 className={styles.textBox.credits.textBox.date}>
              {date || '0/0/0000'}
            </h3>
          </small>
          <div className={styles.textBox.credits.link}>
            <Link icon={BookOpenIcon} href={'/blog/' + slug}>
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

const styles = {
  main: 'my-8 flex flex-col w-full h-full md:min-h-[14rem] max-w-sm bg-white dark:bg-dark dark:text-white text-black shadow-lg sm:flex-row md:my-4 rounded overflow-hidden',
  imageBox: 'w-full h-56 bg-gray-300 sm:h-auto relative',
  textBox: {
    main: 'p-4 w-full max-w-md h-full',
    line: 'w-32 h-1 gradientbg',
    title: 'py-2 text-2xl font-medium leading-none',
    credits: {
      main: 'flex justify-start items-center pt-2',
      logo: 'relative w-6 h-6',
      textBox: {
        main: 'flex flex-col justify-center items-center leading-none',
        name: 'h-full text-sm leading-none',
        date: 'mr-auto ml-0 h-full text-sm leading-none',
      },
      link: 'ml-auto mr-0 flex',
    },
    description: 'pb-2',
  },
}

BlogArticleCard.displayName = 'BlogArticleCardComponent'
