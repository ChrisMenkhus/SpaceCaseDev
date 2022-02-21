import makeStyles from '@utils/makeStyles'
import React from 'react'

const variants = {
  primary: 'border-primary',
  secondary: 'border-secondary bg-white shadaw-lg',
  inverse: 'border-dark',
  borderless: 'border-none shadow-none bg-transparent dark:bg-transparent',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
  xl: 'py-4 px-10 text-lg',
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants
  size: keyof typeof sizes
  icon?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
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
        className={makeStyles([
          'flex justify-center items-center rounded border shadow-lg text-black bg-white dark:text-white dark:bg-dark',
          variants[variant],
          sizes[size],
          className,
        ])}
        {...props}
      >
        <span className="mx-1">{props.children}</span>
        {Icon && (
          <Icon
            className={makeStyles([
              'h-4 w-4 mx-1 my-auto',
              size === 'xl' && 'h-14 w-16',
            ])}
          />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
