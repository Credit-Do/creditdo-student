import React from 'react'

import { Skeleton, VStack } from '@chakra-ui/react'

import Activity from './Activity'
import Earned from './Earned'
import EWalletBanner from './EWalletBanner'

import { bannerHeight } from './EWalletBanner'
import useStudentData from '../../hooks/useStudentData'

const Save : React.FC = () => {

  const studentData = useStudentData();

  if(!studentData) {
    return <Skeleton />
  }

  return (
    <VStack 
      w='100%'
      pt={bannerHeight}
      spacing={8}
    >
        <EWalletBanner />
        <Activity 
          userId={studentData.userId}
        />
        <Earned />
    </VStack>
  )
}

export default Save