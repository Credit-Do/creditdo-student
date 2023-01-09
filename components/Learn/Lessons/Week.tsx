import React from 'react'

import { VStack } from '@chakra-ui/react'

import LessonCard from "./LessonCard"
import WeekHeader from "./WeekHeader"

import { Lesson } from '../../../types/lesson'
interface Props {
    weekNumber: number;
    lessons: Lesson[];
    selectedLesson: Lesson | null;
    selectLesson: (lesson: Lesson) => void;
    onDownload: () => void;
    onMore: () => void;
}

const Week: React.FC<Props> = ({ weekNumber, lessons, selectedLesson, selectLesson, onDownload, onMore }) => {
  return (
    <VStack 
        spacing={2}
        alignItems='left'
        w='100%'
    >
        <WeekHeader 
            weekNumber={weekNumber}
            lessonSelected={Boolean(lessons.find(lesson => lesson.lessonId === selectedLesson?.lessonId))}
            onDownload={onDownload}
            onMore={onMore}
        />
        {
            lessons.map(lesson => (
                <LessonCard
                    key={lesson.lessonId}
                    lesson={lesson}
                    selected={lesson.lessonId === selectedLesson?.lessonId}
                    onSelect={() => selectLesson(lesson)}
                />
            ))
        }
    </VStack>
  )
}

export default Week