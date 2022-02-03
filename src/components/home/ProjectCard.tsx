interface Props {
  variant?: 'primary' | 'featured'
}

function ProjectCard({ variant = 'primary' }: Props) {
  return (
    <article className="mb-16 last:mb-8 w-screen h-full bg-gradient-to-b from-[#E0E0E0] to-white rounded shadow-lg">
      <div className="flex flex-row flex-wrap justify-center items-center pt-10 mx-auto w-full">
        <div className="py-4 px-6 max-w-sm  ">
          <div className="pb-2 text-sm font-light text-dark">
            Figma, Inkscape, Photoshop
          </div>
          <div className="text-3xl font-bold leading-none">
            Coffee Store Case Study
          </div>
          <p className="py-2 text-base ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et.
          </p>
          <div className="flex flex-row mt-2 w-auto ">
            <div className="w-6 h-12 bg-secondary " />
            <div className="z-10 ml-0 w-6 h-12 bg-primary border-0" />
            <div className="z-20 ml-0 w-6 h-12 bg-dark border-0" />
            <div className="z-30 ml-0 w-6 h-12 bg-black border-0" />
            <div className="z-40 ml-0 w-6 h-12 bg-light border-0" />
          </div>
        </div>
        <div className="flex overflow-hidden justify-center items-center mt-auto w-auto h-64">
          <div className="mt-auto w-64 h-96 bg-dark shadow-lg"></div>
          <div className="mt-auto w-32 h-48 bg-black"></div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
