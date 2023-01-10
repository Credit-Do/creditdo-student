import React from 'react'

import {
  Flex,
  Box
} from '@chakra-ui/react'

import Navbar, { navbarHeight } from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const MobileLayout : React.FC<Props> = ({ children }) => {
  return (
    <Flex
      minH='100vh'
      direction='column'
      position='relative'
      pb={`${navbarHeight}rem`}
    >
      {/* <Box
      
      > */}
        <Flex
          flex={1}
          direction='column'
          position='relative'
        >
          {children}
        </Flex>
      {/* </Box> */}
      <Navbar />
    </Flex>
  )
}

export default MobileLayout