import React from 'react'

import { Heading, VStack, HStack, Text } from '@chakra-ui/react'

import Card from '../../utility/Card'
import CompletedBadge from './CompletedBadge'

import { Lesson } from '../../../types/lesson'
import moment from 'moment'

interface Props {
  lesson: Lesson
}

const LessonCard: React.FC<Props> = ({ lesson }) => {
  return (
    <Card>
      <HStack
        justifyContent='space-between'
      >
        <VStack
          alignItems='flex-start'
        >
          <Heading
          size='sm'>
            {lesson.subject}
          </Heading>
          <Text
            fontSize='xs'
            color='gray'
          >
            {"Due " + moment(lesson.dueDate).format('MMM Do')}
          </Text>
        </VStack>
        <CompletedBadge completed={lesson.completed}></CompletedBadge>
      </HStack>
    </Card>
  )
}

export default LessonCard