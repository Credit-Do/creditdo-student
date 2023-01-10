import { Box, Grid, GridItem, HStack, Icon, SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { RiMoneyDollarCircleLine, RiScales2Fill } from 'react-icons/ri';
import { GiMeal } from 'react-icons/gi'
import { FaShoppingCart } from 'react-icons/fa'
import ImpactCard from './ImpactCard';
import useEventContributions from '../../../../hooks/contributions/useEventContributions';

interface Props {
    eventId: string
}    

const EventImpactItem: React.FC<Props> = ({ eventId }) => {

    const {
        metric
    } = useEventContributions(eventId);

    if(!metric) {
        return <Skeleton />
    }

    const {
        totalPounds,
        totalDollars,
        totalMeals,
        dollarsPerPound
    } = metric;

    return (
        <SimpleGrid
            columns={2}
            spacing={2}
            w='100%'
        >
            <ImpactCard 
                icon={RiScales2Fill}
                bg='purple.500'
                desription='Collected'
                value={totalPounds.toLocaleString()}
                unit='LBS'
            />
            <ImpactCard 
                icon={RiMoneyDollarCircleLine}
                bg='green.500'
                desription='Valued'
                value={`$${totalDollars.toLocaleString()}`}
                unit='USD'
            />
            <ImpactCard 
                icon={GiMeal}
                bg='yellow.500'
                desription='Equivalent to'
                value={totalMeals.toLocaleString()}
                unit='Meals'
            />
            <ImpactCard
                icon={FaShoppingCart}
                bg='pink.500'
                desription='Costs on avg.'
                value={`$${dollarsPerPound.toLocaleString()}`}
                unit='/ LB'
            />
        </SimpleGrid>
    )
}

export default EventImpactItem