import React from 'react'

import {
    Text,
    VStack,
    HStack,
    Progress
} from '@chakra-ui/react'

import Widget from './Widget';

import useLessons from '../../../hooks/useLessons';
interface Props {
    classId: string
}

const LearnWidget : React.FC<Props> = ({ classId }) => {

    const { lessons } = useLessons(classId);

    const completedLessons = lessons.filter(lesson => lesson.completed).length;
    const totalLessons = lessons.length;

    return (
        <Widget
            title="Learn"
            href="/learn"
            bg="pink.400"
        >
            <VStack
                spacing={1}
            >
                <Progress
                    value={completedLessons / totalLessons * 100}
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
                            {completedLessons}
                        </Text> / {totalLessons}
                    </Text>
                </HStack>
            </VStack>
        </Widget>
    )
}

export default LearnWidget