import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { WeeklyLessons } from '../../hooks/types'
import { usePersonalGoal } from '../../hooks/useGoals'
import LearnPage from './components/Lessons/LearnPage'
import { lessonData } from '../../data/learn'
import GoalsPage from './components/Goals/GoalsPage'


const Learn = () => {
    const weeklyLessons: WeeklyLessons[] = lessonData;

    const { goalBuckets, markComplete, markIncomplete } = usePersonalGoal();

  return (
    <Tabs isFitted
        colorScheme="orange"
    >
        <TabList>
            <Tab>Lessons</Tab>
            <Tab>My Goals</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <LearnPage schedule={weeklyLessons}/>
            </TabPanel>
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