import { Layout } from '@components/templates'
import { NextPage } from 'next'

const Workspace: NextPage<{}> = ({ ...props }) => {
  return (
    <Layout
      seo={{
        title: 'Workspace',
        description: 'Workspace',
      }}
    >
      <></>
    </Layout>
  )
}

export default Workspace
