import NavItem, { NavItemProps } from './components/NavItem'
import NavWrapper from './components/NavWrapper'

import { MailIcon } from '@heroicons/react/outline'
import RouteToContactSectionRef from '@utils/routeToContactSectionRef'
import Router from 'next/router'
import React from 'react'
import { useContext } from 'react'
import { Context } from 'src/stores/Context'

export const Navbar = ({}: {}) => {
  const context = useContext(Context)

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
        Router.push('/').then(() => {
          context?.contactRef.current?.scrollIntoView()
        })
      },
    },
  ]

  const NavItems = navItemsInfo.map((item, index) => (
    <NavItem {...item} key={item.name + index} />
  ))

  return <NavWrapper>{NavItems}</NavWrapper>
}

Navbar.displayName = 'Navbar'
