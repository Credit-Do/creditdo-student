import React from 'react'

import { Flex } from '@chakra-ui/react'

import EventImpact from './EventImpact'
import Leaderboard from './Leaderboard'

interface Props {
  classId: string
}

const Metrics : React.FC<Props> = ({ classId }) => {
  return (
    <Flex
      direction='column'
      gap={8}
    >
      <EventImpact 
        classId={classId}
      />
      <Leaderboard />
    </Flex>
  )
}

export default Metrics