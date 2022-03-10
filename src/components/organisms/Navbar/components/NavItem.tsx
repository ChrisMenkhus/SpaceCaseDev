import ActiveLink from './ActiveLink'

import { Button } from '@components/atoms'
import Router from 'next/router'
import { ElementType } from 'react'

const variants = {
  link: 'mx-4 my-4 md:my-auto',
  button: 'md:ml-4 my-4 md:my-auto',
}

export type NavItemProps = React.BaseHTMLAttributes<HTMLElement> & {
  name: string
  to: string
  icon?: ElementType
  variant: keyof typeof variants
}

const NavItem = ({ name, to, icon, variant, ...props }: NavItemProps) => {
  switch (variant) {
    case 'link':
      return <ActiveLink name={name} to={to} className={variants.link} />
    case 'button':
      return (
        <Button
          size="sm"
          variant="secondary"
          className={variants.button}
          icon={icon}
          onClick={(e) => {
            e.preventDefault()
            if (props.onClick) {
              props.onClick(e)
            } else {
              e.preventDefault()
              Router.push(to)
            }
          }}
        >
          {name}
        </Button>
      )
  }
}

export default NavItem
