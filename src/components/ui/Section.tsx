import createClassName from '@utils/createClassName'
import { FC } from 'react'

interface ContainerInterface {
  children: JSX.Element | JSX.Element[]
  name: string
  variant?: 'fullheight' | 'regular' | 'fullwidth'
  className?: string
}

interface HeaderInterface {
  title: string
  subtitle: string
}

function Container({
  children,
  name,
  variant = 'regular',
  className = '',
}: ContainerInterface) {
  return (
    <div
      id={name}
      className={createClassName([
        'flex-col gap-4 px-0 mt-8 pb-0 flexcenter',
        className,
      ])}
    >
      {children}
    </div>
  )
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

export const Content: FC = ({ children }) => {
  return (
    <div className=" flex-row flex-wrap mt-4 max-w-screen-lg flexcenter">
      {children}
    </div>
  )
}

export const Article: FC = ({ children }) => {
  return <article className="flexcenter ">{children}</article>
}

export const Footer: FC = ({ children }) => {
  return <footer className="max-w-screen-lg flexcenter ">{children}</footer>
}

export { Container, Header }
