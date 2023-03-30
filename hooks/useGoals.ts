import { Goal, PersonalGoal, goalStatus } from "./types";
import { useState } from "react";
import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc, orderBy, query, getDocs, addDoc, Timestamp } from "firebase/firestore";

type GoalBuckets = {
    [key in typeof goalStatus[number]]: PersonalGoal[];
}

type FBPersonalGoals = {
    goal: string,
    id: string,
    cost: number,
    dueDate: Timestamp,
    type: string,
    completed: boolean,
}

const usePersonalGoal = (userId: string | undefined) =>{
    const goalsCol = userId && collection(db, 'students', userId, 'personalGoals');

    const [goals] = useCollectionData<FBPersonalGoals>(goalsCol as CollectionReference<FBPersonalGoals>);
    
    const markComplete = async (goalId: string) => {
        console.log('goalid')
        console.log(goalId);
        if(goalsCol)
            return updateDoc(doc(goalsCol, goalId), {completed: true});
    }
    const markIncomplete = async (goalId: string) => {
        console.log(goalId);
        if(goalsCol)
            return updateDoc(doc(goalsCol, goalId), {completed: false});
    }
    const getGoalBuckets = () : GoalBuckets =>{
        const emptyBuckets: GoalBuckets = {
            'Short Term': [],
            'Long Term': [],
            'Completed': []
        }
        if(!goals){
            return emptyBuckets;
        }
        if (goals){
            return goals.reduce((acc, goal) => {
                const personalGoal: PersonalGoal = {
                    goal: goal.goal,
                    id : goal.id,
                    cost: goal.cost,
                    dueDate: goal.dueDate.toDate(),
                    type: goal.type,
                    completed: goal.completed,
                }

                if (goal.completed){
                    acc['Completed'].push(personalGoal);
                }
                else{
                    if (goal.type === 'short') acc['Short Term'].push(personalGoal);
                    else acc['Long Term'].push(personalGoal);
                }
                return acc;
            },
            emptyBuckets)
        }
        return emptyBuckets;
    } 

    const addGoal = async (goal: string, cost: number, date: Date, type: string) => {
        if (!goalsCol) return;
        const goalObj: PersonalGoal = {
            goal,
            id: '',
            cost,
            dueDate: date,
            type,
            completed: false,
        }
        const docRef = await addDoc(goalsCol, goalObj);
        updateDoc(docRef, {id: docRef.id});
    }
    if (userId === ' '){
        return {
            goalBuckets: getGoalBuckets(),
            loading: true,
            markComplete,
            markIncomplete,
            addGoal,
        }
    }

    return {
        goalBuckets: getGoalBuckets(),
        loading: false,
        markComplete,
        markIncomplete,
        addGoal,
    }
}
 
export default usePersonalGoal;