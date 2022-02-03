import createClassName from '@utils/createClassName'
import Image from 'next/image'
import { FC, useState } from 'react'
import Button from './Button'

const Navbar: FC = () => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)

  return (
    <nav className="p-4 w-screen bg-light shadow-lg">
      <div className="flex flex-row justify-between items-center mx-auto w-full max-w-screen-lg ">
        <div className="flex items-center pl-1 mr-auto">
          <div className="relative w-16 h-8">
            <Image
              src="/icon/logo_black.svg"
              alt="generic blog image"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="pr-8 pl-1 w-full text-xl text-center">
            spacecase.dev
          </div>
        </div>
        <div className="hidden flex-row justify-between items-center mr-4 max-w-5xl md:flex">
          <a className="px-4 mx-1 w-full text-sm font-medium text-center border-r-4 border-b-4 border-r-light border-b-primary hover:border-b-primary cursor-pointer">
            Home
          </a>
          <a className="px-4 mx-1 w-full text-sm font-medium text-center border-r-4 border-b-4 border-r-light hover:border-b-primary cursor-pointer">
            Insights
          </a>
          <a className="px-4 mx-1 w-full text-sm font-medium text-center border-r-4 border-b-4 border-r-light hover:border-b-primary cursor-pointer">
            Portfolio
          </a>
          <div className="pr-0 pl-4">
            <Button
              alt="scroll to contact form"
              handleClick={() => {}}
              imgSrc="/icon/mail_dark.svg"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className={createClassName(['flex items-center sm:hidden'])}>
          <button
            onClick={() => {
              setMobileNavMenuToggled(!mobileNavMenuToggled)
            }}
            className="w-10"
          >
            {mobileNavMenuToggled ? (
              <Image
                src="/icon/x.svg"
                alt="starship image"
                width="50px"
                height="50px"
                layout="responsive"
                objectFit="cover"
              />
            ) : (
              <Image
                src="/icon/menu.svg"
                alt="starship image"
                width="50px"
                height="50px"
                layout="responsive"
                objectFit="cover"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
