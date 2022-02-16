import { DarkModeSwitch } from './DarkModeSwitch'

import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const styles = {
  container:
    'bg-white w-full fixed top-0 z-50 shadow-md text-black bg-white dark:bg-dark dark:text-white',
  layout:
    'max-w-screen-lg mx-auto flex flex-wrap md:flex-nowrap px-4 py-2 md:py-4 ',
  layout_top: 'flex flex-row items-center w-full h-auto md:w-auto',
  logoButton: 'relative w-12 h-12 ',
  menuButton: 'relative ml-auto p-1 w-10 h-10 md:hidden',
  links: 'flex flex-col w-auto text-center m-auto md:mr-0 md:flex-row',
  darkModeSwitch:
    'relative m-auto mt-8 md:mt-auto md:ml-8 md:mr-0 grid place-items-center',
}

export const NavWrapper = ({
  children,
}: React.BaseHTMLAttributes<HTMLElement>) => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)

  function ToggleMobileNavMenu() {
    setMobileNavMenuToggled(!mobileNavMenuToggled)
  }

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
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
              src="/icon/logo_color.svg"
              alt="website logo"
              layout="fill"
              objectFit="contain"
            />
          </button>
          <button className={styles.menuButton} onClick={ToggleMobileNavMenu}>
            {mobileNavMenuToggled ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={makeStyles([
            styles.links,
            !mobileNavMenuToggled && 'hidden md:flex',
          ])}
        >
          {children}
          <div className={styles.darkModeSwitch}>
            <DarkModeSwitch toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  )
}
