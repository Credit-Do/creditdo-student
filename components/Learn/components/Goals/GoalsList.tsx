import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Goal, PersonalGoal } from '../../../../hooks/types'
import GoalComponent from './GoalComponent'

interface Props {
    name: string
    goalList: PersonalGoal[]
    onClick: (goal: Goal) => void
}


const GoalsList: React.FC<Props> = ({name, goalList, onClick}) => {

    const generateGoal = (goal: Goal, index: number) => {
        let caption: string = '';
        if (goal.location) {
            caption = '@ ' + goal.location;
        }
        else{
            caption = 'For ' + goal.reason;
        }
        return (
            <GoalComponent 
                key={index} 
                goal={goal}
                caption={caption} 
                onClick={onClick}
            />
        )
    }

    if (goalList.length > 0){
        return (
            <VStack
                spacing={2}
                alignItems='left'
                w='100%'
                >
                <Heading size='sm' color='gray'>{name}</Heading>
                <VStack
                    spacing={2}
                    alignItems='left'
                    w='100%'
                >
                    {
                        goalList.map((goal, index) => generateGoal(goal, index))
                    }
                </VStack>
            </VStack>
        )
    }
    return null;
}

export default GoalsList