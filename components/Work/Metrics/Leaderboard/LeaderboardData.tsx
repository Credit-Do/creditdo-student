import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

interface Props {
    color: string,
    value: string
    label: string
}   

const LeaderboardData: React.FC<Props> = ({color, value, label}) => {
  return (
    <VStack
        alignItems='flex-start'
        spacing={0}
    >
        <Text
            fontSize='xs'
        >
            {label}
        </Text>
        <Text
            color={color}
            fontWeight='bold'
        >
            {value}
        </Text>
    </VStack>
  )
}

export default LeaderboardData