import React from 'react'

import { Heading, VStack, HStack, Text } from '@chakra-ui/react'

import Card from '../../utility/Card'
import CompletedBadge from './CompletedBadge'

import { Lesson } from '../../../types/lesson'
import moment from 'moment'

interface Props {
  lesson: Lesson;
  selected: boolean;
  onSelect: () => void;
}

const LessonCard: React.FC<Props> = ({ lesson, selected, onSelect }) => {
  return (
    <Card
      onClick={onSelect}
      pointer='cursor'
      _hover={{
        shadow: 'lg'
      }}
      bg={selected ? 'orange.500' : 'white'}
    >
      <HStack
        justifyContent='space-between'
      >
        <VStack
          alignItems='flex-start'
          spacing={0}
        >
          <Text
            size='sm'
            fontWeight='semibold'
            color={selected ? 'white' : 'black'}
          >
            {lesson.subject}
          </Text>
          <Text
            fontSize='xs'
            color={selected ? 'whiteAlpha.800' : 'blackAlpha.700'}
          >
            {"Due " + moment(lesson.dueDate).format('MMM Do')}
          </Text>
        </VStack>
        <CompletedBadge 
          completed={lesson.completed}
          amountHours={lesson.lengthHours}
          selected={selected}
        />
      </HStack>
    </Card>
  )
}

export default LessonCard