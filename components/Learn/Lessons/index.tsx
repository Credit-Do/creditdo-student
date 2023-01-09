import React from 'react'

import { VStack } from '@chakra-ui/react'

import Week from './Week'

import useLessons from '../../../hooks/useLessons';

interface Props {
    classId: string;
}

const Lessons: React.FC<Props> = ({ classId }) => {

    const { partitionedLessons } = useLessons(classId);

    return (
        <VStack
            spacing={8}
        >
            {
                partitionedLessons.map((lesson, index) => (
                    <Week 
                        key={index}
                        weekNumber={index+1}
                        lessons={lesson}
                    />
                    
                ))
            }
        </VStack>
    )
}

export default Lessons