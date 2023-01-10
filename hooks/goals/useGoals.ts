import { useState, useEffect } from "react";

import { goals } from '../../data/goals'

import { Goal } from "../../types/goal";

const useGoals = (userId: string) => {

    const [eventGoals, setEventGoals] = useState<Goal[]>([]);
    const [shortGoals, setShortGoals] = useState<Goal[]>([]);
    const [longGoals, setLongGoals] = useState<Goal[]>([]);
    const [completedGoals, setCompletedGoals] = useState<Goal[]>([]);

    useEffect(() => {
        const uncompletedGoals = goals.filter(goal => !goal.completed);
        setEventGoals(uncompletedGoals.filter(goal => goal.type === 'event'));
        setShortGoals(uncompletedGoals.filter(goal => goal.type === 'short'));
        setLongGoals(uncompletedGoals.filter(goal => goal.type === 'long'));
        setCompletedGoals(goals.filter(goal => goal.completed));
    }, []);

    return {
        eventGoals,
        shortGoals,
        longGoals,
        completedGoals,
    }
}

export default useGoals;