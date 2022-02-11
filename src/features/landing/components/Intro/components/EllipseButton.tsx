import makeStyles from '@utils/makeStyles'
import React from 'react'

const sizes = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-16 w-16 text-md',
  lg: 'h-36 w-36 text-lg',
}

type EllipseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: keyof typeof sizes
  Icon: React.ElementType
}

export default function EllipseButton({
  className = '',
  size,
  Icon,
  ...props
}: EllipseButtonProps) {
  return (
    <div className="border-4 border-primary">
      <button
        className={makeStyles([
          'grid place-items-center group border-8 border-primary w-4 h-4',
          className,
          // sizes[size],
        ])}
        {...props}
      >
        <div className="p-[0.05rem] w-auto h-auto m-auto rounded-full bg-white hover:bg-dark transition-all hover:shadow-lg">
          <div
            className={makeStyles(['h-auto w-auto rounded-full bg-light p-8'])}
          >
            <Icon className={sizes[size]} />
          </div>
        </div>
      </button>
    </div>
  )
}

EllipseButton.displayName = 'ElipseButton'