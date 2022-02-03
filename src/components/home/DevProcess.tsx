function TimelineCard({
  title,
  description,
  sectionNumber,
}: {
  title: string
  description: string
  sectionNumber: number
}) {
  return (
    <div className="grid sticky top-16 place-items-center mb-8 h-[20rem] bg-light shadow-none md:top-[15vh]">
      <article className="flex relative flex-col p-4 pt-12 m-auto mt-0 w-full max-w-screen-sm bg-white rounded shadow-lg sm:flex-row sm:px-16 md:p-4 md:h-fit">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
        <div className="pb-2 m-0 w-fit h-fit sm:pr-14 md:pb-8 md:m-auto">
          <h1 className="text-8xl font-black">{sectionNumber}</h1>
        </div>
        <div className="py-4 m-0 h-fit md:m-auto">
          <h1 className="text-2xl font-bold text-center sm:text-3xl sm:text-left">
            {title}
          </h1>
          <p className="pt-2">{description}</p>
        </div>
      </article>
    </div>
  )
}

type TimelineItemType = {
  title: string
  description: string
}

function TimelineGroup({
  timelineItems,
}: {
  timelineItems: TimelineItemType[]
}) {
  const timelineCards = timelineItems.map((element, i) => {
    return (
      <TimelineCard
        key={element.title.split(' ')[0] + i}
        title={element.title}
        description={element.description}
        sectionNumber={i + 1}
      />
    )
  })
  return (
    <section className="flex last:top-[100vh] flex-col px-4 w-full text-black bg-light">
      {timelineCards}
    </section>
  )
}

export { TimelineGroup }
