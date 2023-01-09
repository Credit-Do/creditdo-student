import React, { useState } from 'react'

import { Box, HStack, VStack, Text, Menu, MenuButton, MenuList, Button, MenuItem, Skeleton } from '@chakra-ui/react'

import { RiArrowDropDownLine } from 'react-icons/ri'

import EventImpactItem from './EventImpactItem'
import useMostRecentEvent from '../../../../hooks/classes/useMostRecentEvent'

const eventImpacts = [
    {
        name: "4/23 Key Food",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        selected: true
    }
]

interface Props {
    classId: string
}

const EventImpact: React.FC<Props> = ({ classId }) => {
    
    const mostRecentEvent = useMostRecentEvent(classId)

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    if(!mostRecentEvent) {
        return <Skeleton />
    }

    return (
        <VStack
            align-items='flex-start'
            spacing={4}
        >
            <HStack
                w='100%'
                justifyContent={'space-between'}
            >
                <VStack
                    alignItems='flex-start'
                    spacing={0}
                >
                    <Text
                        fontSize='lg'
                        color='blackAlpha.700'
                        fontWeight='semibold'
                    >
                        My Class Impact
                    </Text>
                    <Text
                        fontSize='sm'
                        color='blackAlpha.600'
                    >
                        From Most Recent Event
                    </Text>
                </VStack>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<RiArrowDropDownLine />}
                        color='cyan.500'
                        fontWeight='semibold'
                        variant='ghost'
                        size='sm'
                    >
                        {eventImpacts[currentIndex].name}
                    </MenuButton>
                    <MenuList>
                        {
                            eventImpacts.map((eventImpact, index) => (
                                <MenuItem
                                    color='cyan.500'
                                    fontWeight='semibold'
                                    onClick={() => setCurrentIndex(index)}
                                    key={index}
                                >
                                    {eventImpact.name}
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Menu>
            </HStack>
            <EventImpactItem 
                eventId={mostRecentEvent.eventId}
            />
        </VStack>
    )
}

export default EventImpact