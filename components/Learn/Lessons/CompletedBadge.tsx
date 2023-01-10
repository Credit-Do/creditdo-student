import React from 'react'

import { Badge, HStack, Text } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'

interface Props {
    completed: boolean,
    amountHours: number,
    selected: boolean
}

const CompletedBadge: React.FC<Props> = ({ completed, amountHours, selected }) => {
    if(completed){
        return (
            <Badge 
                bg='green.500'
                color='white'
            >
                {completed ? 'Completed' : 'Not Completed'}
            </Badge>
        )
    }

    return (
        <HStack
            spacing={1}
        >
            <TimeIcon 
                fontSize='xs'
                color={selected ? 'white' : 'black'}
            />
            <Text
                fontSize='xs'
                color={selected ? 'white' : 'black'}
            >
                {amountHours} HOURS
            </Text>
        </HStack>
    )
    
}

export default CompletedBadge