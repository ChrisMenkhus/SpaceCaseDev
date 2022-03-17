import makeStyles from '@utils/makeStyles'

function Card({
  children,
  title,
  variant = 'primary',
}: {
  children: JSX.Element | JSX.Element[]
  title: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <div
      className={makeStyles([
        'flex z-10 flex-col justify-center items-center m-auto mt-0  w-80 h-full bg-white dark:bg-dark shadow-lg sm:mt-auto md:mx-8 min-h-[30rem] rounded overflow-hidden',
        variant === 'primary' && '',
        variant === 'secondary' && 'mt-16',
      ])}
    >
      <div
        className={makeStyles([
          'mt-0 flex flex-col justify-center items-center w-full h-20',
          variant === 'primary' && 'bg-primary',
          variant === 'secondary' && 'bg-secondary',
        ])}
      >
        <h1 className="text-xl text-white">{title}</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-4 pb-8 m-auto w-full h-full ">
        {children}
      </div>
    </div>
  )
}

export default Card
