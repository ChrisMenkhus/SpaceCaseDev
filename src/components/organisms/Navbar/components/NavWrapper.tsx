import DarkModeToggleButton from './DarkModeToggleButton'

import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import useScrollPosition from '@utils/useScrollPosition'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'

const styles = {
  container:
    'fixed top-0 z-50 bg-white w-full  sm:shadow-md text-black bg-transparent sm:bg-white dark:sm:bg-dark dark:text-white hidden',
  container_hasScrolled: 'block',
  container_mobileIsActive:
    'bg-light dark:bg-dark pb-12 border-b-8 border-secondary',
  layout:
    'max-w-screen-lg mx-auto flex flex-wrap md:flex-nowrap px-4 py-2 md:py-4 ',
  layout_top: 'flex flex-row items-center w-full h-auto md:w-auto',
  logoButton: 'relative w-12 h-12 hidden sm:flex',
  menuButton:
    'relative ml-auto p-1 w-10 h-10 mt-4 bg-white shadow-lg dark:bg-dark rounded-full sm:mt-auto md:hidden',
  links: 'flex flex-col w-auto text-center m-auto md:mr-0 md:flex-row',
  darkModeSwitch:
    'relative m-auto mt-8 md:mt-auto md:ml-8 md:mr-0 grid place-items-center',
}

export const NavWrapper = ({
  children,
  showOnScroll = false,
}: React.BaseHTMLAttributes<HTMLElement> & { showOnScroll?: boolean }) => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)

  function ToggleMobileNavMenu() {
    setMobileNavMenuToggled(!mobileNavMenuToggled)
  }

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  let isDark = Boolean(theme === 'dark')

  const [hasScrolled, setHasScrolled] = useState(false)
  let scrollPosition = useScrollPosition()

  if (showOnScroll) {
    if (!hasScrolled) {
      if (scrollPosition > 10) {
        setHasScrolled(true)
      }
    } else {
      if (scrollPosition < 10) {
        setHasScrolled(false)
      }
    }
  } else {
    if (!hasScrolled) setHasScrolled(true)
  }

  return (
    <nav
      className={makeStyles([
        styles.container,
        mobileNavMenuToggled && styles.container_mobileIsActive,
        hasScrolled && styles.container_hasScrolled,
      ])}
    >
      <div className={styles.layout}>
        <div className={styles.layout_top}>
          <Link href="/" passHref>
            <a className={styles.logoButton}>
              <Image
                src="/logo.svg"
                alt="website logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
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
            <DarkModeToggleButton toggleTheme={toggleTheme} isDark={isDark} />
          </div>
        </div>
      </div>
    </nav>
  )
}
