import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Learn from '../components/Learn/index'
import Layout from '../layouts/Layout'

const LearnPage : NextPage = () => {
  return (
    <Layout>
      <PageContainer>
          <Learn />
      </PageContainer>
    </Layout>
  )
}

export default LearnPage