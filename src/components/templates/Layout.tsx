import { Navbar } from '@components/organisms/navbar'
import makeStyles from '@utils/makeStyles'
import Head from 'next/head'

type PageInterface = {
  children: JSX.Element | JSX.Element[]
  title: string
  description: string
  className?: string
  showNavOnScroll?: boolean
}

export default function Layout({ ...props }: PageInterface) {
  return (
    <div
      className={makeStyles([
        'flex flex-col justify-center items-center  m-auto',
        'bg-light text-black dark:bg-[#111] dark:text-white',
        props.className || '',
      ])}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar showOnScroll={props.showNavOnScroll} />
      <div className="mt-0">{props.children}</div>
    </div>
  )
}
