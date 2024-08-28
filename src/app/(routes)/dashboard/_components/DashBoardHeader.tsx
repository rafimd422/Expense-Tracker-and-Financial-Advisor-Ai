import React, { FC } from 'react'
import { UserButton } from '@clerk/nextjs'

const DashBoardHeader:FC = () => {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      <div>

      </div>
      <div>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default DashBoardHeader
