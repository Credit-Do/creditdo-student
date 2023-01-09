import React from 'react'
import NotLoggedIn from '../components/utility/NotLoggedIn'
import useUserData from '../hooks/useStudentData'

import MobileLayout from './MobileLayout'

interface Props {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({ children }) => {

  const userData = useUserData();

  if (!userData) {
    <NotLoggedIn />
  }

  return (
    <MobileLayout>
      {children}
    </MobileLayout>
  )
}

export default Layout