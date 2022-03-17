import NavItem, { NavItemProps } from './components/NavItem'
import NavWrapper from './components/NavWrapper'

import React, { HTMLAttributes, useState } from 'react'

type NavbarProps = HTMLAttributes<HTMLElement>

export const Navbar = ({ ...props }: NavbarProps) => {
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
  ]

  const NavItems = navItemsInfo.map((item, index) => (
    <NavItem {...item} key={item.name + index} />
  ))

  return <NavWrapper>{NavItems}</NavWrapper>
}

Navbar.displayName = 'Navbar'
