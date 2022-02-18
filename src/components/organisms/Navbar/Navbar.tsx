import { NavItem, NavItemProps } from './components/NavItem'
import { NavWrapper } from './components/NavWrapper'

import { MailIcon } from '@heroicons/react/outline'
import React from 'react'

export const Navbar = ({
  showOnScroll = false,
}: {
  showOnScroll?: boolean
}) => {
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
      name: 'Contact',
      variant: 'button',
      to: '/#contact',
      icon: MailIcon,
    },
  ]

  const NavItems = navItemsInfo.map((item, index) => (
    <NavItem {...item} key={item.name + index} />
  ))

  return <NavWrapper showOnScroll={showOnScroll}>{NavItems}</NavWrapper>
}

Navbar.displayName = 'Navbar'
