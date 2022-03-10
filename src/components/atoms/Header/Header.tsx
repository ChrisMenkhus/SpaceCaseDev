import Head from 'next/head'

type HeaderInterface = {
  title: string
  description: string
}

export const Header = ({ ...props }: HeaderInterface) => {
  return (
    <Head>
      <title>{props.title} - spacecase.dev</title>
      <meta name="description" content={props.description} />
    </Head>
  )
}

Header.displayName = 'HeaderComponent'
