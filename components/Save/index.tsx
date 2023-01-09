import React from 'react'

import { Box } from '@chakra-ui/react'

import Activity from './Activity'
import Earned from './Earned'
import EWalletBanner from './EWalletBanner'

import { bannerHeight } from './EWalletBanner'

const Save : React.FC = () => {
  return (
    <Box 
      w='100%'
      pt={bannerHeight}
    >
        <EWalletBanner />
        <Activity />
        <Earned />
    </Box>
  )
}

export default Save