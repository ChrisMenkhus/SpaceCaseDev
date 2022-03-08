import NavItem, { NavItemProps } from './components/NavItem'
import NavWrapper from './components/NavWrapper'

import { MailIcon } from '@heroicons/react/outline'
import Router from 'next/router'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from 'src/stores/Context'

export const Navbar = ({}: {}) => {
  const [mobileNavMenuToggled, setMobileNavMenuToggled] = useState(false)
  const context = useContext(Context)

  //UPDATE CONTEXT HERE ITS MESSY

  const navItemsInfo: NavItemProps[] = [
    {
      name: 'Home',
      variant: 'link',
      to: '/',
    },
    {
      name: 'Portfolio',
      variant: 'link',
      to: '/portfolio',
    },
    {
      name: 'Insights',
      variant: 'link',
      to: '/blog',
    },
    {
      name: 'Contact',
      variant: 'button',
      to: '/#contact',
      icon: MailIcon,
      onClick: () => {
        context?.actions.setBlockLazyLoading(() =>
          Router.push({ pathname: '/' }, undefined, { scroll: false }).then(
            () => {
              setTimeout(
                () => context?.store.contactRef.current?.scrollIntoView(),
                100
              )
            }
          )
        )
      },
    },
  ]

  const NavItems = navItemsInfo.map((item, index) => (
    <NavItem
      {...item}
      key={item.name + index}
      callback={() => setMobileNavMenuToggled(false)}
    />
  ))

  return (
    <NavWrapper
      mobileNavMenuToggled={mobileNavMenuToggled}
      setMobileNavMenuToggled={setMobileNavMenuToggled}
    >
      {NavItems}
    </NavWrapper>
  )
}

Navbar.displayName = 'Navbar'
