import makeStyles from '@utils/makeStyles'
import React from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ElementType
  size?: keyof typeof sizes
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className = '', size = 'md', icon, ...props }, ref) => {
    const Icon = icon
    return (
      <a
        ref={ref}
        className={makeStyles([styles.container, sizes[size], className])}
        {...props}
      >
        {Icon && <Icon className={styles.icon.main} />}
        <span className={styles.text}>{props.children}</span>
      </a>
    )
  }
)

const styles = {
  container:
    'flex justify-center items-center py-2 pb-0 text-md border-b-2 border-transparent hover:border-primary dark:hover:border-primary transition-all',
  text: 'mx-1  text-primary dark:text-primary ',
  icon: {
    main: 'h-4 w-4 mx-1 my-auto text-primary',
    large: 'h-14 w-16',
  },
}

const sizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl pb-1',
}

Link.displayName = 'LinkComponent'
