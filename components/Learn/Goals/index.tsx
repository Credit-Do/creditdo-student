import React, { useRef, useState } from 'react'

import {
  Button, 
  Drawer, 
  useDisclosure, 
  VStack, 
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import GoalsList from './GoalsList'
import CreateGoal from './CreateGoal'

import useGoals from '../../../hooks/goals/useGoals'

interface Props {
  userId: string
}

const Goals: React.FC<Props> = ({ userId }) => {

  const {
    eventGoals,
    shortGoals,
    longGoals,
    completedGoals
  } = useGoals(userId);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <CreateGoal
        userId={userId}
        isOpen={isOpen}
        onClose={onClose}
      />
      <VStack 
        spacing={8} 
        flex={1}
      >
        <GoalsList 
          name='Event Goals' 
          goalList={eventGoals} 
        />
        <GoalsList 
          name='Short Term Goals' 
          goalList={shortGoals} 
        />
        <GoalsList 
          name='Long Term Goals' 
          goalList={longGoals} 
        />
        <GoalsList 
          name='Done' 
          goalList={completedGoals} 
        />
        <Button 
          leftIcon={<AddIcon />} 
          colorScheme='orange' 
          position='absolute'
          bottom={4}
          right={4}
          onClick={onOpen}
        >
          Create Goal
        </Button>
      </VStack>
    </>
  )
}

export default Goals