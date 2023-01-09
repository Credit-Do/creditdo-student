import React from 'react'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'

import { FaHandshake } from 'react-icons/fa'
import { BsPiggyBankFill } from 'react-icons/bs';

import ActivityItem from './ActivityItem';
import useSaveAmounts from '../../hooks/useSaveAmounts';

const activities = [
    {
        title: "EARNED",
        amount: 100,
        icon: FaHandshake,
        bgColor: "orange.500",
        textColor: "orange.300"
    },
    {
        title: "SAVED",
        amount: 140,
        icon: BsPiggyBankFill,
        bgColor: "green.500",
        textColor: "green"
    }
];

interface Props {
    userId: string
}

const Activity: React.FC<Props> = ({ userId }) => {

    const { amountEarned, amountSaved } = useSaveAmounts(userId);

    return (
        <VStack
            w='100%'
            alignItems='flex-start'
            spacing={4}
        >
            <Text
                fontSize='xl'
                color='gray'
                fontWeight='semibold'
            >
                Activity
            </Text>
            <HStack
                w='100%'
                justifyContent='space-between'
                pr={8}
            >
                <ActivityItem
                    title='EARNED'
                    amount={amountEarned}
                    icon={FaHandshake}
                    bgColor="orange.500"
                    textColor="orange.400"
                />
                <ActivityItem
                    title='SAVED'
                    amount={amountSaved}
                    icon={BsPiggyBankFill}
                    bgColor="green.500"
                    textColor="green.500"
                />
            </HStack>
        </VStack>
    )
    }

export default Activity