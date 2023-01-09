import React from 'react'

import { 
    Box,
    HStack,
    Image,
    VStack,
    Text,
    Button
} from '@chakra-ui/react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

import { Event } from '../../../types/event'
import moment from 'moment';

interface Props {
    event: Event;
}

const UpcomingEvent: React.FC<Props> = ({ event }) => {

    const startDate = moment(event.startDate);

  return (
    <VStack
        w='100%'
        spacing={4}
    >
        <HStack
            spacing={4}
            w='100%'
        >
            <Box
                position='relative'
            >
                <Image 
                    src={event.pictureUrl}
                    alt='event image'
                    h='150px'
                />
                <VStack
                    position='absolute'
                    zIndex={2}
                    left={1}
                    top={1}
                    bg='blackAlpha.500'
                    spacing={0}
                    p={1}
                    rounded='md'
                >
                    <Text
                        color='white'
                        fontSize='sm'
                    >
                        {startDate.format('MMM')}
                    </Text>
                    <Text
                        color='white'
                        fontSize='sm'
                    >
                        {startDate.format('DD')}
                    </Text>
                </VStack>
            </Box>
            <VStack
                alignItems='flex-start'
                spacing={2}
            >
            <Text
                fontSize='sm'
                fontWeight='bold'
            >
                {event.title}
            </Text>
            <Text
                fontSize='sm'
            >
                {event.type}
            </Text>
            <HStack>
                <FaClock />
                <Text
                    fontSize='sm'
                >
                    {startDate.format('ddd h:mm a')}
                </Text>
            </HStack>
            <HStack>
                <FaMapMarkerAlt />
                <VStack
                    alignItems='flex-start'
                    spacing={0}
                >
                <Text
                    fontSize='xs'
                >
                    {event.address}
                </Text>
                </VStack>
            </HStack>
            </VStack>
        </HStack>
        <Button
            w='100%'
            colorScheme='green'
        >
            Clock In
        </Button>
        <Button
            color='blue.500'
            variant='text'
            w='100%'
        >
            Record Hours
        </Button>
    </VStack>
  )
}

export default UpcomingEvent