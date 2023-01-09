import React from 'react'

import { Heading, VStack } from '@chakra-ui/react'

import GoalComponent from './GoalComponent'

import { Goal } from '../../../types/goal'

interface Props {
    name: string
    goalList: Goal[]
}

const GoalsList: React.FC<Props> = ({name, goalList}) => {
    return (
        <VStack
            spacing={6}
            alignItems='left'
            w='100%'
        >
            <Heading
                size='md'
                color='gray'
            >
                {name}
            </Heading>
            <VStack
                spacing={4}
                alignItems='left'
                w='100%'
            >
                {
                    goalList.map(goal => (
                        <GoalComponent 
                            key={goal.goalId}
                            goal={goal}
                        />
                    ))
                }
            </VStack>
        </VStack>
    )
}

export default GoalsList