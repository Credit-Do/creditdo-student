import React from 'react'

import { HStack, Image, VStack, Text } from '@chakra-ui/react';

import { FaBriefcase } from 'react-icons/fa';

import Card from '../../utility/Card';

import { Event } from '../../../types/event'
import moment from 'moment';

interface Props {
    event: Event;
}

const PastEvent : React.FC<Props> = ({ event }) => {
  return (
    <Card
        p={0}
    >
        <Image
            src={event.pictureUrl}
            roundedTop='md'
            alt={event.title}
        />
        <VStack
            alignItems='flex-start'
            spacing={0}
            p={4}
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
            <HStack
                pt={2}
            >
                <FaBriefcase />
                <Text
                    fontSize='sm'
                >
                    {moment(event.startDate).format('MMM Do YYYY')}
                </Text>
            </HStack>
        </VStack>
    </Card>
  )
}

export default PastEvent