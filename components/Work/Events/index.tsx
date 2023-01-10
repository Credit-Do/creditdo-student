import React from 'react'

import { Box, useDisclosure } from '@chakra-ui/react'

import PastEvents from './PastEvents'
import UpcomingEvents from './UpcomingEvents'
import ClockInModal from './ClockInModal'
interface Props {
  classId: string,
  userId: string
}

const Events : React.FC<Props> = ({ classId, userId }) => {

  const [selectedEventId, setSelectedEventId] = React.useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openClockInModal = (eventId: string) => {
    setSelectedEventId(eventId);
    onOpen();
  }

  return (
    <>
      <ClockInModal 
        isOpen={isOpen}
        onClose={onClose}
        eventId={selectedEventId}
        userId={userId}
      />
      <Box>
        <UpcomingEvents 
          classId={classId}
          openClockInModal={openClockInModal}
        />
        <PastEvents 
          classId={classId}
        />
      </Box>
    </>
    
  )
}

export default Events