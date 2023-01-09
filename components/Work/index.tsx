import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel, Skeleton } from '@chakra-ui/react'

import Events from './Events'
import Metrics from './Metrics'

import useClassData from '../../hooks/useClassData'
import useStudentData from '../../hooks/useStudentData'

const Work : React.FC = () => {

    const studentData = useStudentData();
    
    if (!studentData) {
        return <Skeleton />
    }

    return (
        <Tabs 
            isFitted
            colorScheme='orange'
        >
            <TabList>
                <Tab>Events</Tab>
                <Tab>Metrics</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Events 
                        classId={studentData.classId}
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