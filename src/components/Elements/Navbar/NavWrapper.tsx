import { MenuIcon, XIcon } from '@heroicons/react/outline'
import MakeStyles from '@utils/MakeStyles'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'

const styles = {
  container: 'bg-white w-full mb-auto mt-0 shadow-lg',
  layout: 'max-w-screen-lg mx-auto flex flex-wrap md:flex-nowrap px-4 py-8',
  layout_top: 'flex flex-row items-center w-full h-auto md:w-auto',
  logoButton: 'relative w-12 h-12 ',
  name: 'pr-8 pl-4 text-xl',
  menuButton: 'relative ml-auto w-12 h-12 md:hidden',
  links: 'flex flex-col w-auto m-auto md:mr-0 md:flex-row',
}

export const NavWrapper = ({
  children,
}: React.BaseHTMLAttributes<HTMLElement>) => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)
  function ToggleMobileNavMenu() {
    setMobileNavMenuToggled(!mobileNavMenuToggled)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.layout_top}>
          <button
            className={styles.logoButton}
            onClick={(e) => {
              e.preventDefault()
              Router.push('/')
            }}
          >
            <Image
              src="/icon/logo_black.svg"
              alt="generic blog image"
              layout="fill"
              objectFit="contain"
            />
          </button>
          <div className={styles.name}>spacecase.dev</div>
          <button className={styles.menuButton} onClick={ToggleMobileNavMenu}>
            {mobileNavMenuToggled ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={MakeStyles([
            styles.links,
            !mobileNavMenuToggled && 'hidden md:flex',
          ])}
        >
          {children}
        </div>
      </div>
    </nav>
  )
}
