import makeStyles from '@utils/makeStyles'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={makeStyles([
        'grid p-4 w-full h-full max-w-screen-md m-auto',
        ' ',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export default Container
