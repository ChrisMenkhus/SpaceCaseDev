import createClassName from '@utils/createClassName'

interface ButtonGroupProps {
  children: JSX.Element | JSX.Element[]
  className?: string
  variant?: 'left' | 'center' | 'right'
}

function ButtonGroup({
  children,
  className = '',
  variant = 'center',
}: ButtonGroupProps) {
  return (
    <div
      className={createClassName([
        'flex-row flex-wrap gap-4 px-8 py-2 sm:py-4 md:py-8 ',
        variant === 'center' ? 'flexcenter' : null,
        variant === 'left' ? 'flexleft' : null,
        variant === 'right' ? 'flexright' : null,
        className,
      ])}
    >
      {children}
    </div>
  )
}

export default ButtonGroup
