import makeStyles from '@utils/makeStyles'
import React from 'react'

const variants = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  inverse: 'border-dark',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants
  size: keyof typeof sizes
  icon?: React.ElementType
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
          'flex justify-center items-center rounded border shadow-sm',
          variants[variant],
          sizes[size],
          className,
        ])}
        {...props}
      >
        <span className="mx-1">{props.children}</span>
        {Icon && <Icon className="h-4 w-4 mx-1" />}
      </button>
    )
  }
)

Button.displayName = 'Button'
