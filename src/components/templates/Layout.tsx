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
        'flex flex-col justify-center items-center  m-auto',
        'bg-light text-black dark:bg-[#111] dark:text-white',
        'mt-[5rem]',
        props.className ? props.className : '',
      ])}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar />
      <div>{props.children}</div>
    </div>
  )
}
