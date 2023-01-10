import React from 'react'

import { Text, VStack } from '@chakra-ui/react'

import UpcomingEvent from './UpcomingEvent'

import useUpcomingEvents from '../../../hooks/events/useUpcomingEvents'

interface Props {
  classId: string,
  openClockInModal: (eventId: string) => void
}

const UpcomingEvents: React.FC<Props> = ({ classId, openClockInModal }) => {

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
            openClockInModal={() => openClockInModal(event.eventId)}
          />
        ))
      }
    </VStack>
  )
}

export default UpcomingEvents