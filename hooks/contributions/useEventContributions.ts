import { useState, useEffect } from "react";

import { contributions as contributionsData } from "../../data/contribution";
import { DOLLARS_PER_POUND, getDollarsGivenMeals, getMealsGivenPounds } from "../../services/impact";

import { Contribution } from "../../types/contribution";
import { Metric } from "../../types/metric";

const useEventContributions = (eventId: string) => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [metric, setMetric] = useState<Metric>();

    useEffect(() => {
        setContributions(contributionsData)
    }, [])

    useEffect(() => {
        const totalPounds = contributions.reduce((total, contribution) => total + contribution.pounds, 0);
        const totalMeals = getMealsGivenPounds(totalPounds);
        const totalDollars = getDollarsGivenMeals(totalMeals);
        setMetric({
            totalPounds,
            totalMeals,
            totalDollars,
            dollarsPerPound: DOLLARS_PER_POUND
        })
    }, [contributions])
    
    

    return {
        metric
    }
}

export default useEventContributions;