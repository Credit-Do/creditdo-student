import type { NextPage } from 'next'

import PageContainer from '../components/utility/PageContainer'
import Home from '../components/Home'
import Layout from '../layouts/Layout'

const HomePage : NextPage = () => {
  return (
    <Layout>
        <PageContainer>
        <Home />
        </PageContainer>
    </Layout>
  )
}

export default HomePage
