import React from 'react'

import { Box } from '@chakra-ui/react'

import PastEvents from './PastEvents'
import UpcomingEvents from './UpcomingEvents'
interface Props {
  classId: string
}

const Events : React.FC<Props> = ({ classId }) => {

  return (
    <Box>
      <UpcomingEvents 
        classId={classId}
      />
      <PastEvents 
        classId={classId}
      />
    </Box>
  )
}

export default Events