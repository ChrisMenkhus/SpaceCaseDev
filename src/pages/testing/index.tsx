import { LazyRender } from '@components/atoms'
import { Section } from '@components/templates'
import makeStyles from '@utils/makeStyles'
import { NextPage } from 'next'

const TestDiv = ({ className = '' }: { className?: string }) => (
  <div
    className={makeStyles([
      'grid place-items-center mb-16 w-screen max-w-screen-lg h-[100vh] text-center bg-dark border-b-8 border-primary',
      className,
    ])}
  >
    <h1 className="text-7xl">test</h1>
  </div>
)

type PageProps = {}

const Page: NextPage<PageProps> = ({}) => {
  return (
    <>
      <Section.Container name="testing">
        <TestDiv />
        <LazyRender>
          <TestDiv className="border-4 border-[aquamarine]" />
        </LazyRender>
        <LazyRender>
          <TestDiv className="border-4 border-[blue]" />
        </LazyRender>
        <LazyRender>
          <TestDiv className="text-dark bg-light border-4" />
        </LazyRender>
        <LazyRender>
          <TestDiv className="border-4 border-[red]" />
        </LazyRender>
      </Section.Container>
    </>
  )
}

Page.displayName = 'Testing'

export default Page
