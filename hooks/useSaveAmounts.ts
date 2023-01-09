import { useState, useEffect } from "react";

import {
    amountEarned as amountEarnedData,
    amountSaved as amountSavedData
} from "../data/save";

const useSaveAmounts = (userId: string) => {

    const [amountEarned, setAmountEarned] = useState<number>(0);
    const [amountSaved, setAmountSaved] = useState<number>(0);
    const [amountEarnedGoal, setAmountEarnedGoal] = useState<number>(0);
    const [amountSavedGoal, setAmountSavedGoal] = useState<number>(0);

    useEffect(() => {
        setAmountEarned(amountEarnedData)
        setAmountSaved(amountSavedData)
    }, [])

    return {
        amountEarned,
        amountSaved,
        amountEarnedGoal,
        amountSavedGoal
    }
}

export default useSaveAmounts;