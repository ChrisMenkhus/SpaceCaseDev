import { Navbar } from '@components/organisms/Navbar'
import makeStyles from '@utils/makeStyles'
import Head from 'next/head'

type PageInterface = {
  children: JSX.Element | JSX.Element[]
  seo: {
    title: string
    description: string
  }
  className?: string
  showNavOnScroll?: boolean
}

export function Layout({ ...props }: PageInterface) {
  return (
    <div
      className={makeStyles([
        'flex flex-col justify-center items-center m-auto',
        'bg-light text-black dark:bg-[#111] dark:text-white',
        'md:pt-20',
        props.className || '',
      ])}
    >
      <Head>
        <title>spacecase.dev - {props.seo.title}</title>
        <meta name="description" content={props.seo.description} />
      </Head>
      <Navbar showOnScroll={props.showNavOnScroll} />
      <div className="mt-0">{props.children}</div>
    </div>
  )
}
