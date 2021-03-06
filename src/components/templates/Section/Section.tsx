import makeStyles from '@utils/makeStyles'
import { forwardRef } from 'react'

type ContainerInterface = React.HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element | JSX.Element[]
  name: string
  className?: string
}

const Container = forwardRef<HTMLDivElement, ContainerInterface>(
  ({ children, name, className = '' }, ref?) => {
    return (
      <section
        ref={ref}
        id={name}
        className={makeStyles([
          'flex items-center justify-center flex-col w-full mb-16',
          className,
        ])}
      >
        {children}
      </section>
    )
  }
)

Container.displayName = 'DisplayContainer'

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header
      className={makeStyles([
        'z-10 flex-col pl-0 mt-0 md:pl-4 md:max-w-screen-lg flexcenter',
        'md:justify-start md:items-start',
        // im here doing dynamic text
      ])}
    >
      <h2 className="px-8 pt-4 text-lg font-light tracking-widest leading-none whitespace-normal md:px-0">
        {subtitle}
      </h2>
      <h1 className="pt-2 pb-4 font-ibm text-dynamic font-medium leading-none text-center md:pl-0 md:m-0 md:text-left">
        {title}
      </h1>
    </header>
  )
}

const HeaderForPages = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <header
      className={makeStyles([
        'z-10 flex-col pl-0 mt-16 md:pl-4 md:max-w-screen-lg flexcenter md:mt-0',
        '',
      ])}
    >
      <h2 className="px-8 pt-4 text-xl font-normal tracking-widest leading-none whitespace-normal md:text-4xl">
        {subtitle}
      </h2>
      <h1 className="pt-2 pb-4 font-ibm text-dynamic font-normal leading-none text-center">
        {title}
      </h1>
    </header>
  )
}

const Content = ({
  children,
  className = '',
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) => {
  return (
    <div
      className={makeStyles([
        'flex-row flex-wrap mt-4 max-w-screen-lg flexcenter',
        className,
      ])}
    >
      {children}
    </div>
  )
}

const Article = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <article className="flexcenter">{children}</article>
}

const Footer = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <footer className="max-w-screen-lg flexcenter ">{children}</footer>
}

export const Section = {
  Container,
  Header,
  HeaderForPages,
  Content,
  Article,
  Footer,
}
