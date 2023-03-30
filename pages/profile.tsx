import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Profile from '../components/Profile'
import Layout from '../layouts/Layout'

const ProfilePage : NextPage = () => {


  return (
    <Layout>
      <PageContainer
        bg='orange.400'
      >
        <Profile />
      </PageContainer>
    </Layout>
  )
}

export default ProfilePage