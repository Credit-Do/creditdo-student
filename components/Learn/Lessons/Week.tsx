import React from 'react'

import { VStack } from '@chakra-ui/react'

import LessonCard from "./LessonCard"
import WeekHeader from "./WeekHeader"

import { Lesson } from '../../../types/lesson'
interface Props {
    weekNumber: number;
    lessons: Lesson[];
}

const Week: React.FC<Props> = ({ weekNumber, lessons }) => {
  return (
    <VStack 
        spacing={2}
        alignItems='left'
        w='100%'
    >
        <WeekHeader weekNumber={weekNumber} />
        {
            lessons.map((lesson, index) => (
                <LessonCard
                    key={index}
                    lesson={lesson}
                />
            ))
        }
    </VStack>
  )
}

export default Week