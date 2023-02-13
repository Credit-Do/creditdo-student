import { AddIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, Input, useDisclosure, VStack, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Goal, PersonalGoal } from '../../../../hooks/types'
import useGoals from '../../../../hooks/useGoals'
import GoalsList from './GoalsList'

interface Props {
    eventGoals: PersonalGoal[]
    shortTermGoals: PersonalGoal[]
    longTermGoals: PersonalGoal[]
    done: PersonalGoal[]
}

const GoalsPage: React.FC<Props> = ({eventGoals, shortTermGoals, longTermGoals, done}) => {

  const [ rstate, setRState ] = useState(0);
  const { completeGoal, uncompleteGoal } = useGoals();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const check = (goal: Goal) => {
    completeGoal(goal);
    setRState(rstate + 1);
  }

  const uncheck = (goal: Goal) => {
    uncompleteGoal(goal);
    setRState(rstate + 1);
  }

  return (
    <VStack spacing='10' position='relative'>
      <GoalsList name='Event Goals' goalList={eventGoals} onClick={check}/>
      <GoalsList name='Short Term Goals' goalList={shortTermGoals} onClick={check}/>
      <GoalsList name='Long Term Goals' goalList={longTermGoals} onClick={check}/>
      <GoalsList name='Done' goalList={done} onClick={uncheck}/>
      <Button leftIcon={<AddIcon />} colorScheme='orange' variant='solid' pos='fixed' bottom='13%' right='5%' onClick={onOpen}>
            Create Goal
        </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={'md'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create New Goal</DrawerHeader>

          <DrawerBody>
            <Text>What item do you want to save for?</Text>
            <Input />
            <br />
            <br />
            <Text>How much does it cost?</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
              >$</InputLeftElement>
              <Input placeholder='Enter amount' />
            </InputGroup>
            <br />
            <Text>How much do I have now?</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
              >$</InputLeftElement>
              <Input placeholder='Enter amount' />
            </InputGroup>
            <br />
            <Text>How much money can I save?</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
              >$</InputLeftElement>
              <Input placeholder='Enter amount' />
            </InputGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </VStack>

  )
}

export default GoalsPage