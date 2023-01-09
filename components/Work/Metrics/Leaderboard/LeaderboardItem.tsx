import React from 'react'

import { Box, Flex, HStack, Icon, Skeleton, Text, VStack, Image } from '@chakra-ui/react';

import { IconType } from 'react-icons';
import LeaderboardData from './LeaderboardData';

import { Metric } from '../../../../types/metric';
import { ClassMetric } from '../../../../types/classMetric';
import useTeacherData from '../../../../hooks/teacher/useTeacherData';
import { formatTeacherName } from '../../../../services/utils';

interface Props {
    ranking: number
    classMetric: ClassMetric
}

const LeaderboardItem: React.FC<Props> = ({ ranking, classMetric}) => {

    const {
        totalPounds,
        totalMeals,
        totalDollars,
        dollarsPerPound
    } = classMetric.metric;

    const teacherData = useTeacherData(classMetric.class.teacherId);

    if(!teacherData) {
        return <Skeleton />
    }

    return (
        <HStack
            w='100%'
            alignItems='flex-start'
            spacing={6}
        >
            <Text
                size='xl'
                color='gray'
            >
                {ranking}
            </Text>
            <Image 
                boxSize={8}
                src={teacherData.profilePicture}
                alt='teacher profile picture'
            />
            <VStack
                flex={1}
                alignItems='flex-start'
            >
                <VStack
                    alignItems='flex-start'
                    spacing={0}
                >
                    <Text
                        size='md'
                    >
                        {formatTeacherName(teacherData)}&apos;s
                    </Text>
                    <Text
                        size='sm'
                    >
                        {classMetric.class.name}
                    </Text>                        
                </VStack>
                <HStack
                    spacing={4}
                >
                    <LeaderboardData 
                        value={totalPounds.toLocaleString()}
                        label='POUNDS'
                        color='purple.500'
                    />
                    <LeaderboardData 
                        value={totalMeals.toLocaleString()}
                        label='MEALS'
                        color='yellow.500'
                    />
                    <LeaderboardData 
                        value={`$${(totalDollars / 1000).toFixed(1)}k`}
                        label='VALUE'
                        color='green.500'
                    />
                    <LeaderboardData 
                        value={`$${Math.round(dollarsPerPound).toLocaleString()} / lb`}
                        label='AVG. COST'
                        color='pink.500'
                    />
                </HStack>
            </VStack>
        </HStack>
    )
}

export default LeaderboardItem