import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel, Skeleton } from '@chakra-ui/react'

import Events from './Events'
import Metrics from './Metrics'

import useStudentData from '../../hooks/useStudentData'

const Work : React.FC = () => {

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
                    Events
                </Tab>
                <Tab
                    p={4}
                >
                    Metrics
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Events 
                        classId={studentData.classId}
                        userId={studentData.userId}
                    />
                </TabPanel>
                <TabPanel>
                    <Metrics />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Work