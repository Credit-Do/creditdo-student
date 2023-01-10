import React from 'react'

import { Box, HStack, Text, Menu, MenuButton, Button, MenuList, MenuItem, VStack } from '@chakra-ui/react'

import { BsPersonCircle } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

import LeaderboardItem from './LeaderboardItem'
import useLeaderboard from '../../../../hooks/contributions/useLeaderboard'

const leaderboardClasses = [
    {
        teacher: "Mrs. Garcia",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        icon: BsPersonCircle,
        timeFrame: "Spring 2018",
        ranking: 1
    },
    {
        teacher: "Mrs. Smith",
        pounds: 1342,
        money: 260,
        meals: 250,
        avgCost: 10,
        icon: BsPersonCircle,
        timeFrame: "Spring 2018",
        ranking: 2
    }
]

const dropdownOptionsTeacher = [
    "Teacher: All",
    "Teacher: NYC"
]

const dropdownOptionsYear = [
    "Year: All",
    "Spring 2018"
]

const Leaderboard = () => {

    const [currentTeacherIndex, setCurrentTeacherIndex] = React.useState<number>(0);
    const [currentYearIndex, setCurrentYearIndex] = React.useState<number>(0);

    const classMetrics = useLeaderboard();

    return (
        <VStack
            w='100%'
            spacing={4}
        >
            <HStack
                w='100%'
                justifyContent='space-between'
            >
                <Text
                    color='blackAlpha.700'
                    fontSize='xl'
                    fontWeight='bold'
                >
                    Leaderboard
                </Text>
                <HStack
                    spacing={0}
                >
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            colorScheme='cyan'
                            fontWeight='semibold'
                            variant='ghost'
                            size='xs'
                        >
                            {dropdownOptionsTeacher[currentTeacherIndex]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsTeacher.map((dropdown, index) => (
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                        onClick={() => setCurrentTeacherIndex(index)}
                                        key={dropdown}
                                    >
                                        {dropdown}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<RiArrowDropDownLine />}
                            colorScheme='cyan'
                            fontWeight='semibold'
                            variant='ghost'
                            size='xs'
                        >
                            {dropdownOptionsYear[currentYearIndex]}
                        </MenuButton>
                        <MenuList>
                            {
                                dropdownOptionsYear.map((dropdown, index) => (
                                    <MenuItem
                                        color='cyan.500'
                                        fontWeight='semibold'
                                        onClick={() => setCurrentYearIndex(index)}
                                        key={dropdown}
                                    >
                                        {dropdown}
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </HStack>
            </HStack>
            {
                classMetrics.map((classMetric, index) => (
                    <LeaderboardItem
                        key={index}
                        ranking={index + 1}
                        classMetric={classMetric}
                    />
                ))
            }
        </VStack>
    )
}

export default Leaderboard