import React from 'react'

import { Checkbox, HStack, VStack, Text } from '@chakra-ui/react'

import useCompleteGoal from '../../../hooks/goals/useCompleteGoal'

import { Goal } from '../../../types/goal'
import moment from 'moment'

interface Props {
  goal: Goal
}

const GoalComponent: React.FC<Props> = ({ goal}) => {

  const {completeGoal, uncompleteGoal} = useCompleteGoal(goal.goalId);
 
  return (
    <Checkbox 
      colorScheme='green' 
      size='lg' 
      spacing={5}
      isChecked={goal.completed}
      onChange={goal.completed ? uncompleteGoal : completeGoal}
    >
      <HStack>
        <VStack
          spacing={0}
          alignItems='left'
        >
            <HStack 
              spacing={2}
            >
                <Text 
                  fontSize='md' 
                  fontWeight='semibold'
                >
                  {goal.title}
                </Text>
                <Text 
                  fontSize='sm' 
                  color='gray'
                  as={goal.completed ? 'del' : undefined}
                >
                  by {moment(goal.dueDate).format('MMMM Do, YYYY')}
                </Text>
            </HStack>
            <Text 
              fontSize='sm'
            >
              {goal.reason}
            </Text>
        </VStack>
      </HStack>
    </Checkbox>
  )
}

export default GoalComponent