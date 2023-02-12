import { VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import useEvents from '../../../hooks/useEvents'
import PastEvent from './PastEvent'

const PastEvents = () => {
    const { pastEventData } = useEvents(""); 

  return (
    <VStack
        alignItems='flex-start'
    >
        <Text
            fontSize='xl'
            fontWeight='bold'
        >
            Past Events
        </Text>
        <HStack
            w="100%"
        >
            {
                pastEventData.map((event, index) => (
                    <PastEvent 
                        key={index}
                        event={event}
                    />
                ))
            }
        </HStack>
    </VStack>
  )
}

export default PastEvents