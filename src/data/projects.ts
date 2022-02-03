type ProjectsType = {
  name: string
  workType: string
  description: string
  colors: string[]
  desktopImageSrc: string
  mobileImageSrc: string
}[]

const Projects: ProjectsType = [
  {
    name: 'Coffee Store Case Study',
    workType: 'Design',
    description:
      'Websites profesionally designed and developed with classic user experiences that are easy for your customers to understand.',
    colors: ['#3CDA85', '#1FCE6F', '#1C1B1F', '#010000', '#563729'],
    desktopImageSrc: '/coffee-store-desktop.png',
    mobileImageSrc: '/coffee-store-desktop.png',
  },
  {
    name: 'Falcon 9 Status Website',
    workType: 'Design, Front-end, Back-end',
    description:
      'Websites profesionally designed and developed with classic user experiences that are easy for your customers to understand.',
    colors: ['#3CDA85', '#1FCE6F', '#1C1B1F', '#010000', '#563729'],
    desktopImageSrc: '/coffee-store-desktop.png',
    mobileImageSrc: '/coffee-store-desktop.png',
  },
]

export { Projects }
