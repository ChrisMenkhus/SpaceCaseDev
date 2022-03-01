import makeStyles from '@utils/makeStyles'
import classNames from 'classnames'
import React from 'react'
import { overrideTailwindClasses } from 'tailwind-override'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants
  size: keyof typeof sizes
  icon?: React.ElementType
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      size = 'md',
      variant = 'primary',
      icon,
      ...props
    },
    ref
  ) => {
    const Icon = icon
    return (
      <button
        ref={ref}
        type={type}
        className={classNames([
          styles.container,
          variants[variant],
          sizes[size],
          className,
        ])}
        {...props}
      >
        <span className={styles.text}>{props.children}</span>
        {Icon && (
          <Icon
            className={makeStyles([
              styles.icon.main,
              size === sizes.lg && styles.icon.large,
            ])}
          />
        )}
      </button>
    )
  }
)

const styles = {
  container:
    'flex justify-center items-center rounded border text-black bg-white dark:text-white dark:bg-dark  hover:scale-105 transition-all border-0',
  text: 'mx-1',
  icon: {
    main: 'h-4 w-4 mx-1 my-auto',
    large: 'h-14 w-16',
  },
}

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-secondary/30',
  secondary: 'border-2 border-secondary bg-white shadaw-lg',
  inverse: 'border-dark',
  borderless: 'border-none shadow-none bg-transparent dark:bg-transparent',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
  xl: 'py-4 px-10 text-lg',
}

Button.displayName = 'ButtonComponent'
