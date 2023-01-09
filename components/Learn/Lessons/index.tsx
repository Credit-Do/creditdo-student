import React from 'react'

import { Button, VStack } from '@chakra-ui/react'

import Week from './Week'

import useLessons from '../../../hooks/useLessons';
import useSelectLesson from '../../../hooks/useSelectLesson';

interface Props {
    classId: string;
}

const Lessons: React.FC<Props> = ({ classId }) => {

    const { partitionedLessons } = useLessons(classId);

    const { selectedLesson, selectLesson, onDownload, onMore } = useSelectLesson();

    return (
        <VStack
            spacing={4}
            pt={4}
        >
            <Button
                variant='ghost'
                size='xs'
                colorScheme='blue'
                ml='auto'
            >
                View Test Scores
            </Button>
            <VStack
                spacing={8}
                w='100%'
            >
                {
                    partitionedLessons.map((lesson, index) => (
                        <Week 
                            key={index}
                            weekNumber={index+1}
                            lessons={lesson}
                            selectedLesson={selectedLesson}
                            selectLesson={selectLesson}
                            onDownload={onDownload}
                            onMore={onMore}
                        />
                        
                    ))
                }
            </VStack>
        </VStack>
    )
}

export default Lessons