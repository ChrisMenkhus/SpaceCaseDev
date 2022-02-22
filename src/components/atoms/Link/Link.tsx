import makeStyles from '@utils/makeStyles'
import React from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ElementType
  size?: keyof typeof sizes
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className = '', size = 'md', icon, ...props }, ref) => {
    const Icon = icon
    return (
      <a
        ref={ref}
        className={makeStyles([styles.container, sizes[size], className])}
        {...props}
      >
        {Icon && <Icon className={makeStyles([styles.icon.main])} />}
        <span className={styles.text}>{props.children}</span>
      </a>
    )
  }
)

const styles = {
  container:
    'flex justify-center items-center text-black py-2 pb-0 text-md dark:text-white border-b-2 border-transparent hover:border-dark dark:hover:border-light transition-all',
  text: 'mx-1',
  icon: {
    main: 'h-4 w-4 mx-1 my-auto',
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

export default Link
