import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Work from '../components/Work'
import Layout from '../layouts/Layout'

const WorkPage : NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Work />
      </PageContainer>
    </Layout>
  )
}

export default WorkPage