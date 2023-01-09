import { useState, useEffect } from "react";

import { contributions as contributionsData } from "../../data/contribution";
import { DOLLARS_PER_POUND, getDollarsGivenMeals, getMealsGivenPounds } from "../../services/impact";

import { Contribution } from "../../types/contribution";

const useEventContributions = (eventId: string) => {
    const [contributions, setContributions] = useState<Contribution[]>([]);

    useEffect(() => {
        setContributions(contributionsData)
    }, [])
    
    const totalPounds = contributions.reduce((total, contribution) => total + contribution.pounds, 0);
    const totalMeals = getMealsGivenPounds(totalPounds);
    const totalDollars = getDollarsGivenMeals(totalMeals);

    return {
        totalPounds,
        totalMeals,
        totalDollars,
        dollarsPerPound: DOLLARS_PER_POUND
    }
}

export default useEventContributions;