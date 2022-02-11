import { Navbar } from '@components/organisms/Navbar'
import makeStyles from '@utils/makeStyles'
import Head from 'next/head'

type PageInterface = {
  children: JSX.Element | JSX.Element[]
  title: string
  description: string
  className?: string
}

export default function Layout({ ...props }: PageInterface) {
  return (
    <div
      className={makeStyles([
        'flex-col min-h-screen flexcenter',
        'bg-light text-black dark:bg-[#111] dark:text-white',
        props.className ? props.className : '',
      ])}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}