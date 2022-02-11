import createClassName from '@utils/createClassName'
import makeStyles from '@utils/makeStyles'
import { FC, forwardRef } from 'react'

type ContainerInterface = React.HTMLAttributes<HTMLDivElement> & {
  children: JSX.Element | JSX.Element[]
  name: string
  className?: string
}

const Container = forwardRef<HTMLDivElement, ContainerInterface>(
  ({ children, name, className = '' }, ref?) => {
    return (
      <div
        ref={ref}
        id={name}
        className={makeStyles([
          'flex-col gap-4 px-0 mt-8 pb-0 flexcenter',
          className,
        ])}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'DisplayContainer'

interface HeaderInterface {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderInterface) {
  return (
    <header
      className={createClassName([
        'z-10 flex-col p-0 mt-0 mb-auto md:pl-12 md:max-w-screen-lg flexcenter',
        'md:justify-start md:items-start',
      ])}
    >
      <h2 className="pt-4 font-light leading-none">
        <span className="">(01) </span>
        {subtitle}
      </h2>
      <h1 className="pt-8 pb-4 text-6xl font-bold leading-none text-center md:pl-0 md:m-0 md:text-8xl md:text-left">
        {title}
      </h1>
    </header>
  )
}

const Content: FC = ({ children }) => {
  return (
    <div className=" flex-row flex-wrap mt-4 max-w-screen-lg flexcenter">
      {children}
    </div>
  )
}

const Article: FC = ({ children }) => {
  return <article className="flexcenter ">{children}</article>
}

const Footer: FC = ({ children }) => {
  return <footer className="max-w-screen-lg flexcenter ">{children}</footer>
}

const Section = {
  Container,
  Header,
  Content,
  Article,
  Footer,
}

export default Section
