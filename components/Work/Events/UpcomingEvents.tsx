import React from 'react'

import { Text, VStack } from '@chakra-ui/react'

import UpcomingEvent from './UpcomingEvent'

import useUpcomingEvents from '../../../hooks/useUpcomingEvents'

interface Props {
  classId: string
}

const UpcomingEvents: React.FC<Props> = ({ classId }) => {

  const upcomingEvents = useUpcomingEvents(classId);

  return (
    <VStack
      alignItems='flex-start'
    >
      <Text
        fontSize='xl'
        fontWeight='bold'
      >
        Upcoming Events
      </Text>
      {
        upcomingEvents.map((event) => (
          <UpcomingEvent 
            event={event}
            key={event.eventId}
          />
        ))
      }
    </VStack>
  )
}

export default UpcomingEvents