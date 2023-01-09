import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel, Skeleton } from '@chakra-ui/react'

import Lessons from './Lessons'
import GoalsPage from './Goals'

import useStudentData from '../../hooks/useStudentData'

const Learn = () => {

    const studentData = useStudentData();

    if (!studentData) {
        return <Skeleton />
    }

    return (
        <Tabs 
            isFitted
            colorScheme="orange"
            flex={1}
        >
            <TabList
                shadow="md"
                mx={-4}
                mt={-4}
            >
                <Tab
                    p={4}
                >
                    Lessons
                </Tab>
                <Tab
                    p={4}
                >
                    My Goals
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Lessons
                        classId={studentData.classId}
                    />
                </TabPanel>
                <TabPanel>
                    <GoalsPage
                        userId={studentData.userId}
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Learn