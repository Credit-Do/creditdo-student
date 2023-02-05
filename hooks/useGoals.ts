import { Goal, PersonalGoal, goalStatus } from "./types";
import { useState } from "react";
import { lessonData, eventGData, shortGData, longGData, doneGData } from '../data/learn'
import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc, orderBy, query } from "firebase/firestore";

type GoalBuckets = {
    [key in typeof goalStatus[number]]: PersonalGoal[];
}

const useGoals = () => {

    const [ eventList, setEventList ] = useState(eventGData);
    const [ shortList, setShortList ] = useState(shortGData);
    const [ longList, setLongList ] = useState(longGData);
    const [ doneList, setDoneList ] = useState(doneGData);
    
    const completeGoal = (goal: Goal) => {
        goal.completed = !goal.completed;
        var goalList: Goal[];
        if (goal.type === 'event') goalList = eventList;
        else if (goal.type === 'short') goalList = shortList;
        else goalList = longList;


        for (let i = 0; i < goalList.length; ++i) {
            if (goalList[i].id === goal.id) {
                goalList.splice(i, 1);
                break;
            }
        }
        var newDoneList = doneList;
        newDoneList.push(goal);
        setDoneList(newDoneList);

        if(goal.type === 'event') setEventList(goalList);
        else if(goal.type === 'short') setShortList(goalList);
        else setLongList(goalList);
    }

    const uncompleteGoal = (goal: Goal) => {
        goal.completed = !goal.completed;
        var list: Goal[] = doneList;
        for (let i = 0; i < list.length; ++i) {
            if(list[i].id === goal.id) {
                list.splice(i, 1);
                break;
            }
        }
        setDoneList(list);

        if(goal.type === 'event'){
            const newList = eventList;
            newList.push(goal);
            setEventList(newList);
        }
        else if(goal.type === 'short'){
            const newList = shortList;
            newList.push(goal);
            setShortList(newList);
        }
        else {
            const newList = longList;
            newList.push(goal);
            setLongList(newList);
        }
    }

    return {
        eventList,
        shortList,
        longList,
        doneList,
        completeGoal,
        uncompleteGoal
    }
}

export const usePersonalGoal = (userId: string) =>{
    const [goals, loading, error] = useCollectionData<PersonalGoal>(query(collection(db, "students", userId, "personalGoals") as CollectionReference<PersonalGoal>, orderBy("completed", "asc")));
    const markComplete = async (goalId: string) => {
        return updateDoc(doc(db, "students", userId, "personalGoals", goalId), {completed: true});
    }
    const markIncomplete = async (goalId: string) => {
        return updateDoc(doc(db, "students", userId, "personalGoals", goalId), {completed: false});
    }
    const getGoalBuckets = () : GoalBuckets =>{
        const emptyBuckets: GoalBuckets = {
            'Short Term': [],
            'Long Term': [],
            'Completed': []
        }
        if (goals){
            return goals.reduce((acc, goal) => {
                if (goal.completed){
                    acc['Completed'].push(goal);
                }
                else{
                    if (goal.type === 'short') acc['Short Term'].push(goal);
                    else acc['Long Term'].push(goal);
                }
                return acc;
            },
            emptyBuckets)
        }
        return emptyBuckets;
    } 
    return {
        goalBuckets: getGoalBuckets(),
        loading,
        markComplete,
        markIncomplete
    }
}
 
export default useGoals;