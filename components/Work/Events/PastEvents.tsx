import { VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import usePastEvents from '../../../hooks/usePastEvents';
import { Event } from '../../../types/event'
import PastEvent from './PastEvent'

interface Props {
    classId: string;
}

const PastEvents: React.FC<Props> = ({ classId }) => {

    const pastEvents = usePastEvents(classId);

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
                    pastEvents.map((event, index) => (
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