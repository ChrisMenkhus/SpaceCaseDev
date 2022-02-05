import type { NextPage } from 'next'
import { Button } from '@components/Elements/Button'
import { HomeIcon } from '@heroicons/react/outline'

const Workspace: NextPage = () => {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <Button variant="primary" size="md" icon={<HomeIcon />}>
        hello world
      </Button>
    </div>
  )
}

export default Workspace
