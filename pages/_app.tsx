import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

import Layout from '../layouts/Layout'
import { UserProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={theme}
    >
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp
