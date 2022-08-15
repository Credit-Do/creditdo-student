import React from 'react'

import {
    Flex,
    Text,
    VStack,
    HStack,
    Progress
} from '@chakra-ui/react'
import Widget from './Widget';

const lessonsCompleted = 4;
const lessonsTotal = 6;

const LearnWidget : React.FC = () => {
  return (
    <Widget
        title="Learn"
        href="https://www.google.com"
        bg="pink.400"
    >
        <VStack
            spacing={1}
        >
            <Progress
                value={lessonsCompleted / lessonsTotal * 100}
                w='100%'
                variant='whiteAlpha'
                rounded='full'
                size='sm'
            />
            <HStack
                w='100%'
                justifyContent='space-between'
            >
                <Text
                    color="whiteAlpha.800"
                >
                    Lessons Completed
                </Text>
                <Text
                    color="whiteAlpha.800"
                    alignItems='center'
                >
                    <Text
                        fontSize='lg'
                        as="span"
                        fontWeight='bold'
                    >
                        {lessonsCompleted}
                    </Text> / {lessonsTotal}
                </Text>
            </HStack>
        </VStack>
    </Widget>
  )
}

export default LearnWidget