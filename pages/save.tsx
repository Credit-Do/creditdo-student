import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utility/PageContainer'
import Save from '../components/Save'
import Layout from '../layouts/Layout'

const SavePage : NextPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Save />
      </PageContainer>
    </Layout>
  )
}

export default SavePage