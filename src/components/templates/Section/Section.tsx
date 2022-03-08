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
          'flex items-center justify-center flex-col px-0 pb-0 w-full',
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
        'z-10 flex-col pl-0 mt-0 mb-auto md:pl-4 md:max-w-screen-lg flexcenter',
        'md:justify-start md:items-start',
        // im here doing dynamic text
      ])}
    >
      <h2 className="px-8 pt-4 font-light leading-none whitespace-normal md:px-0">
        {subtitle}
      </h2>
      <h1 className="pt-2 pb-4 text-dynamic font-bold leading-none text-center md:pl-0 md:m-0 md:text-left">
        {title}
      </h1>
    </header>
  )
}

const Content = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className=" flex-row flex-wrap mt-4 max-w-screen-lg flexcenter">
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
  Content,
  Article,
  Footer,
}
