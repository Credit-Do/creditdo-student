import { useState } from 'react';

const useCreateGoal = (userId: string) => {

    const [item, setItem] = useState<string>();
    const [cost, setCost] = useState<number>();
    const [currentAmount, setCurrentAmount] = useState<number>();
    const [targetDate, setTargetDate] = useState<Date>();

    // this function will create a document in the firstore database
    const createGoal = async () => {

    }

    return {
        item,
        setItem,
        cost,
        setCost,
        currentAmount,
        setCurrentAmount,
        targetDate,
        setTargetDate,
        createGoal
    }
    
}

export default useCreateGoal;