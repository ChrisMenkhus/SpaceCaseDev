import { NavItem, NavItemProps } from './NavItem'
import { NavWrapper } from './NavWrapper'

import { MailIcon } from '@heroicons/react/outline'
import React from 'react'

export const Navbar = () => {
  const navItemsInfo: NavItemProps[] = [
    {
      name: 'Home',
      variant: 'link',
      to: '/',
    },
    {
      name: 'Portfolio',
      variant: 'link',
      to: '/Portfolio',
    },
    {
      name: 'Insights',
      variant: 'link',
      to: '/Insights',
    },
    {
      name: 'Workspace',
      variant: 'link',
      to: '/Workspace',
    },
    {
      name: 'Contact',
      variant: 'button',
      to: '/#Contact',
      icon: MailIcon,
    },
  ]

  const NavItems = navItemsInfo.map((item, index) => (
    <NavItem {...item} key={item.name + index} />
  ))

  return <NavWrapper>{NavItems}</NavWrapper>
}

Navbar.displayName = 'Navbar'
