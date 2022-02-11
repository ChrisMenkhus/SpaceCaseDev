import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import makeStyles from '@utils/makeStyles'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'

const styles = {
  container:
    'bg-white w-full mb-auto mt-0 shadow-md text-black bg-white dark:bg-dark dark:text-white',
  layout: 'max-w-screen-lg mx-auto flex flex-wrap md:flex-nowrap px-4 py-6',
  layout_top: 'flex flex-row items-center w-full h-auto md:w-auto',
  logoButton: 'relative w-12 h-12 ',
  name: 'pr-8 pl-4 text-xl',
  menuButton: 'relative ml-auto p-1 w-10 h-10 md:hidden',
  darkModeButton:
    'relative rounded h-10 w-fit border-2 border-dark p-0 ml-8 mr-0 flex flex-row',
  links: 'flex flex-col w-auto m-auto md:mr-0 md:flex-row',
}

export const NavWrapper = ({
  children,
}: React.BaseHTMLAttributes<HTMLElement>) => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)
  function ToggleMobileNavMenu() {
    setMobileNavMenuToggled(!mobileNavMenuToggled)
  }

  const { theme, setTheme } = useTheme()
  console.log('THEME: ', theme)

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
          className={makeStyles([
            styles.links,
            !mobileNavMenuToggled && 'hidden md:flex',
          ])}
        >
          {children}
          <div className="m-auto ml-8 flex ">
            <label
              htmlFor="darktoggle"
              className="relative bg-[#333] w-24 h-8 rounded-full transition-all "
            >
              <input
                type="checkbox"
                name="darktoggle"
                id="darktoggle"
                className="sr-only peer"
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
              />
              <span className="w-8 h-8 bg-light absolute rounded-full border-2 border-dark peer-checked:left-16  transition-all flex">
                <div className="w-6 h-6 m-auto">
                  <MoonIcon className="" />
                </div>
              </span>
              <div className="h-8 absolute top-2 left-8 text-center text-white text-xs peer-checked:left-1  transition-all">
                Lightmode
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}
