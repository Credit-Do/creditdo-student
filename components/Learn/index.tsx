import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { WeeklyLessons } from '../../hooks/types'
import usePersonalGoal from '../../hooks/useGoals'
import LearnPage from './components/Lessons/LearnPage'
import GoalsPage from './components/Goals/GoalsPage'
import useAuth from '../../hooks/useAuth'


const Learn = () => {

    const { user } = useAuth();

    const { goalBuckets, loading, markComplete, markIncomplete, addGoal } = usePersonalGoal(user?.id ? user.id : ' ');
    if (loading) return (<div>Loading...</div>);

  return (
    <Tabs isFitted
        colorScheme="orange"
    >
        <TabList>
            <Tab>Lessons</Tab>
            <Tab>My Goals</Tab>
        </TabList>
        <TabPanels>
            {/* <TabPanel>
                <LearnPage schedule={}/>
            </TabPanel> */}
            <TabPanel>
                <GoalsPage 
                    eventGoals={[]} 
                    shortTermGoals={goalBuckets['Short Term']} 
                    longTermGoals={goalBuckets['Long Term']} 
                    done={goalBuckets['Completed']}/>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default Learn