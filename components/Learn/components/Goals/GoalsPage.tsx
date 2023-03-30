import { AddIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, Input, useDisclosure, VStack, InputGroup, InputLeftElement, InputRightElement, FormControl, FormLabel, FormErrorMessage, Select, RadioGroup, HStack, Radio, useToast } from '@chakra-ui/react'
import { Field, Formik, useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { Goal, PersonalGoal } from '../../../../hooks/types'
import useAuth from '../../../../hooks/useAuth'
import usePersonalGoal from '../../../../hooks/useGoals'
import GoalsList from './GoalsList'

interface Props {
    eventGoals: PersonalGoal[]
    shortTermGoals: PersonalGoal[]
    longTermGoals: PersonalGoal[]
    done: PersonalGoal[]
}

interface ValidationSchema {
  goal?: string
  cost?: string
  date?: string
  type?: string
}

const GoalsPage: React.FC<Props> = ({eventGoals, shortTermGoals, longTermGoals, done}) => {

  const [ rstate, setRState ] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user } = useAuth();
  const toast = useToast();

  console.log('goals');
  console.log(user?.classId);
  console.log(user?.id);
  console.log(user);
  const { addGoal, markComplete, markIncomplete } = usePersonalGoal(user?.id ? user.id : ' ');


  const check = (goal: PersonalGoal) => {
    if (goal.completed){
      markIncomplete(goal.id);
    }
    else {
      markComplete(goal.id);
    }
    goal.completed = !goal.completed;
    setRState(rstate + 1);
  }

  const formik = useFormik({
    initialValues: {
      goal: '',
      cost: '',
      date: '',
      type: 'long',
    },
    onSubmit: (values, { resetForm }) => {
      addGoal(values.goal, +values.cost, new Date(values.date), values.type)
      toast({
        title: "Goal Created",
        description: "Your goal has been created",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      resetForm();
    },
    validate: (values) => {
      const errors: ValidationSchema = {
        goal: undefined,
        cost: undefined,
        date: undefined,
        type: undefined
      }
      if (!values.goal) {
        errors.goal = 'Required'
      }
      if (!values.cost) {
        errors.cost = 'Required'
      }
      if (!+values.cost) {
        errors.cost = 'Must be a number'
      }
      if (!values.date) {
        errors.date = 'Required'
      }
      if (!values.type) {
        errors.type = 'Required'
      }
      if (values.type !== 'long' && values.type !== 'short') {
        errors.type = 'Must be long or short'
      }
      if (errors.goal || errors.cost || errors.date || errors.type) {
        return errors
      }
      return {}
    }
  });
  
  return (
    <VStack spacing='10' position='relative'>
      <GoalsList name='Event Goals' goalList={eventGoals} onClick={check}/>
      <GoalsList name='Short Term Goals' goalList={shortTermGoals} onClick={check}/>
      <GoalsList name='Long Term Goals' goalList={longTermGoals} onClick={check}/>
      <GoalsList name='Done' goalList={done} onClick={check}/>
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
              <form onSubmit={formik.handleSubmit}>
                <DrawerCloseButton />
                <DrawerHeader>Create New Goal</DrawerHeader>

                <DrawerBody>
                  <FormControl mt='2vh' isInvalid={!!formik.errors.goal && formik.touched.goal}>
                    <FormLabel>Goal</FormLabel>
                    <Input
                      id='goal'
                      name='goal'
                      type='goal'
                      onChange={formik.handleChange}
                      value={formik.values.goal}
                      placeholder='Example: save for sneakers'
                      /> 
                    <FormErrorMessage>{formik.errors.goal}</FormErrorMessage>
                  </FormControl>
                  
                  <FormControl mt='2vh' isInvalid={!!formik.errors.cost && formik.touched.cost}>
                    <FormLabel>Cost</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                      >$</InputLeftElement>
                      <Input 
                        placeholder='Cost' 
                        id='cost' 
                        name='cost' 
                        type='cost' 
                        onChange={formik.handleChange} 
                        value={formik.values.cost}
                        />
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.cost}</FormErrorMessage>
                  </FormControl>

                  <FormControl mt='2vh' isInvalid={!!formik.errors.date && formik.touched.date}>
                    <FormLabel>Due Date</FormLabel>
                    <Input
                      id='date'
                      name='date'
                      type='date'
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      /> 
                      <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                  </FormControl>


                      <FormControl mt='2vh' isInvalid={!!formik.errors.type && formik.touched.type}>
                      <FormLabel>Type</FormLabel>
                      <RadioGroup defaultValue='1'>
                      <HStack spacing={5}>
                        <Radio colorScheme='blue' value='1'>
                          Long Term
                        </Radio>
                        <Radio colorScheme='blue' value='2'>
                          Short Term
                        </Radio>
                      </HStack>
                      </RadioGroup>
                      <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                    </FormControl>


                </DrawerBody>
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue' type='submit'>Save</Button>
                </DrawerFooter>
              </form>
        </DrawerContent>
      </Drawer>
    </VStack>

  )
}

export default GoalsPage