import createClassName from '@utils/createClassName'
import Image from 'next/image'
import { FC, useState } from 'react'
import Button from './Button'
// import {ReactComponent as logoIcon} from './public/icon/logo_black.svg'

const Navbar: FC = () => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)
  // className={createClassName(['',mobileNavMenuToggled ? '' : null])}

  return (
    <nav
      className={createClassName([
        'flex top-0 z-50 flex-col justify-center items-center w-screen bg-light md:overflow-hidden md:flex-row shadow-lg',
        mobileNavMenuToggled ? 'h-screen fixed md:h-auto md:relative' : null,
      ])}
    >
      {/* max width container */}
      <div className="flex flex-col justify-center items-start py-6 px-10 w-full max-w-screen-lg h-full md:flex-row md:px-12">
        {/* left and top */}
        <div className="flex flex-row items-center w-full h-16 md:w-auto">
          {/* logo image */}
          <button className="relative w-16 h-12">
            <Image
              src="/icon/logo_black.svg"
              alt="generic blog image"
              layout="fill"
              objectFit="contain"
            />
          </button>
          {/* Website name */}
          <div className="pr-8 pl-4 text-xl ">spacecase.dev</div>
          {/* Menu button */}
          <button
            className="relative p-0 ml-auto w-12 h-12 md:hidden"
            onClick={() => {
              setMobileNavMenuToggled(!mobileNavMenuToggled)
            }}
          >
            <Image
              src="/icon/menu.svg"
              alt="generic blog image"
              layout="fill"
              objectFit="contain"
            />
          </button>
        </div>
        {/* links */}
        <div
          className={createClassName([
            'flex flex-row-reverse items-center m-auto w-full max-w-lg h-auto md:mt-auto md:mr-0 md:h-16',
            mobileNavMenuToggled ? 'flex' : 'hidden md:flex',
          ])}
        >
          <div className="flex relative flex-col justify-between items-start w-full h-full text-lg md:flex md:flex-row">
            <a
              className={createClassName([
                'pr-4 pb-2 hover:pl-16 my-8 mx-0 w-auto h-20 text-6xl font-medium text-left hover:border-b-primary transition-all cursor-pointer md:pb-0 md:hover:pl-4 md:my-auto md:h-auto md:text-base md:border-b-2 md:hover:border-b-2 hover:text-black  md:mx-4',
                1
                  ? 'pl-0 border-b-primary border-b-8 text-black'
                  : 'border-b-[#888] border-b-2 text-[#444]',
              ])}
            >
              Home
            </a>
            <a
              className={createClassName([
                'pr-4 pb-2 hover:pl-16 my-8 mx-0 w-auto h-20 text-6xl font-medium text-left hover:border-b-primary transition-all cursor-pointer md:pb-0 md:hover:pl-4 md:my-auto md:h-auto md:text-base md:border-b-2 md:hover:border-b-2 hover:text-black md:mx-4',
                0
                  ? 'pl-0 border-b-primary border-b-8 text-black'
                  : 'border-b-[#888] border-b-2 text-[#444]',
              ])}
            >
              Insights
            </a>
            <a
              className={createClassName([
                'pr-4 pb-2 hover:pl-16 my-8 mx-0 w-auto h-20 text-6xl font-medium text-left hover:border-b-primary transition-all cursor-pointer md:pb-0 md:hover:pl-4 md:my-auto md:h-auto md:text-base md:border-b-2 md:hover:border-b-2 hover:text-black  md:mx-4',
                0
                  ? 'pl-0 border-b-primary border-b-8 text-black'
                  : 'border-b-[#888] border-b-2 text-[#444]',
              ])}
            >
              Portfolio
            </a>

            <div className="pr-4 mx-6 mt-8 mb-20 md:m-auto md:mx-4">
              <Button
                alt="scroll to contact form"
                handleClick={() => {}}
                imgSrc="/icon/mail_dark.svg"
                size="big"
                className="mt-6 ml-6 scale-150 md:mt-auto md:scale-100"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
