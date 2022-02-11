import makeStyles from '@utils/makeStyles'

type ItemType = {
  title: string
  description: string
  iteration: number
}

function Card({ ...props }: ItemType) {
  return (
    <article className="flex relative flex-col p-4 overflow-hidden text-white bg-dark m-auto mt-0 w-full max-w-screen-sm rounded shadow-lg sm:flex-row sm:px-16 md:h-fit my-8">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
      <div className="pb-2 m-0 w-fit h-fit sm:pr-14 md:pb-8 md:m-auto">
        <h1 className="text-8xl font-black ">{props.iteration}</h1>
      </div>
      <div className="py-4 m-0 h-fit md:m-auto">
        <h1 className="text-2xl  font-bold text-center sm:text-3xl sm:text-left">
          {props.title}
        </h1>
        <p className="pt-2 ">{props.description}</p>
      </div>
    </article>
  )
}

export default function ListDisplay({
  items,
  className = '',
}: {
  items: ItemType[]
  className?: string
}) {
  const Cards = items.map((element, i) => {
    return (
      <Card
        key={element.title.split(' ')[0] + i}
        title={element.title}
        description={element.description}
        iteration={i + 1}
      />
    )
  })

  return (
    <section
      className={makeStyles([
        'flex flex-col px-4 bg-black py-16 w-full',
        className,
      ])}
    >
      {Cards}
    </section>
  )
}
