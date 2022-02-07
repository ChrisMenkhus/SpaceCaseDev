import { Navbar } from '@components/Elements/Navbar'
import type { NextPage } from 'next'
import React from 'react'

const Workspace: NextPage = () => {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <Navbar />
    </div>
  )
}

export default Workspace
