import React from 'react'

import MobileLayout from './MobileLayout'

interface Props {
    children: React.ReactNode
    noDisplayNav?: boolean
}

const Layout : React.FC<Props> = ({ children, noDisplayNav }) => {
  return (
    <MobileLayout noDisplayNav={noDisplayNav}>
        {children}
    </MobileLayout>
  )
}

export default Layout