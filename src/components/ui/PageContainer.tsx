import { FC } from 'react'

const PageContainer: FC = ({ children }) => {
  return (
    <div className="flex-col min-h-screen text-black bg-light flexcenter">
      {children}
    </div>
  )
}

export default PageContainer
