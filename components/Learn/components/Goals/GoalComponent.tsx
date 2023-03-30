import { Checkbox, HStack, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Goal, PersonalGoal } from '../../../../hooks/types'

interface Props {
  goal: PersonalGoal,
  onClick: (goal: PersonalGoal) => void
}

const GoalComponent: React.FC<Props> = ({ goal, onClick}) => {

  if (!goal.completed) {
    return (
      <Checkbox 
        colorScheme='green' 
        size='lg' 
        spacing='5'
        isChecked={goal.completed}
        onChange={() => onClick(goal)}
      >
        <VStack
          spacing={0}
          alignItems='left'
        >
            <HStack spacing='1'>
                <Text fontSize='md' as='b'>{goal.goal}</Text>
                <Text fontSize='sm' color='gray'>{"on " + goal.dueDate.getMonth().toString() + "/" + goal.dueDate.getDate().toString()}</Text>
            </HStack>
            <Text fontSize='sm'>{goal.cost}</Text>
        </VStack>
      </Checkbox>
    )
  }

  return (
    <Checkbox 
      colorScheme='green' 
      size='lg' 
      spacing='5'
      onChange={() => onClick(goal)}
      isChecked={goal.completed}
      >
    <VStack
      spacing={0}
      alignItems='left'
    >
        <HStack spacing='1'>
            <Text fontSize='md' as='del' color='green'>{goal.goal}</Text>
            <Text fontSize='sm' color='green' as='del'>{"on " + goal.dueDate.getMonth().toString() + "/" + goal.dueDate.getDate().toString()}</Text>
        </HStack>
        <Text fontSize='sm' color='green' as='del'>{goal.cost}</Text>
    </VStack>
  </Checkbox>
  )
}

export default GoalComponent