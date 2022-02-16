import ListDisplay from './components/ListDisplay'

import Section from '@components/templates/Section'

type ProcessInterface = {}

export default function Process({ ...props }: ProcessInterface) {
  return (
    <Section.Container name="DevProcess" className="my-8">
      <Section.Header title={'asdf'} subtitle={'adsf'} />
      <ListDisplay
        items={[
          {
            title: 'Outline Project Through Blueprintingasdfasdf',
            description:
              'When I start a project the first thing I think about is what does this project offer the visitors and what does the project mean to the client. Understanding why the client wants a website (or what they want out of a website) is very important in delivering an outstanding website. After I have defined the goals of the website I mock-up a rough draft / blueprint of the site to get an idea for number of pages, neccesary API’s, stylistic choices, and tools to use.',
            iteration: 3,
          },
          {
            title: 'Outline Project Through Blueprintingasdfasdf',
            description:
              'When I start a project the first thing I think about is what does this project offer the visitors and what does the project mean to the client. Understanding why the client wants a website (or what they want out of a website) is very important in delivering an outstanding website. After I have defined the goals of the website I mock-up a rough draft / blueprint of the site to get an idea for number of pages, neccesary API’s, stylistic choices, and tools to use.',
            iteration: 3,
          },
          {
            title: 'Outline Project Through Blueprintingasdfasdf',
            description:
              'When I start a project the first thing I think about is what does this project offer the visitors and what does the project mean to the client. Understanding why the client wants a website (or what they want out of a website) is very important in delivering an outstanding website. After I have defined the goals of the website I mock-up a rough draft / blueprint of the site to get an idea for number of pages, neccesary API’s, stylistic choices, and tools to use.',
            iteration: 3,
          },
        ]}
      />
    </Section.Container>
  )
}

Process.displayName = 'DevProcess'
