import createClassName from '@utils/createClassName'
import Image from 'next/image'
import { FC } from 'react'

interface HeaderInterface {
  title: string
  subtitle: string
}

const HeaderContainer: FC = ({ children }) => {
  return (
    <div className="flex-col-reverse mb-4 max-w-screen-lg sm:flex-row flexcenter">
      {children}
    </div>
  )
}

function Header({ title, subtitle }: HeaderInterface) {
  return (
    <header
      className={createClassName([
        'flex-col sm:pl-8 md:max-w-xl flexleft  2xl:max-w-2xl',
      ])}
    >
      <h1 className="pt-0 pb-2 text-6xl font-bold leading-none text-center sm:text-left md:pl-0 md:m-0 md:text-8xl">
        {title}
      </h1>
      <h2 className="m-auto w-8/12 text-lg font-light leading-none text-center text-transparent bg-clip-text sm:ml-0 sm:text-left 2xl:text-xl gradientbg">
        {subtitle}
      </h2>
    </header>
  )
}

function SpaceShipImage() {
  return (
    <div className="gap-4 w-full max-w-xs h-full sm:pr-8 2xl:m-auto 2xl:max-w-md">
      <Image
        src="/starship.svg"
        alt="starship image"
        width="380px"
        height="520px"
        layout="responsive"
      />
    </div>
  )
}

export { Header, SpaceShipImage, HeaderContainer }
