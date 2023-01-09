import { useState, useEffect } from "react";

import { contributions as contributionsData } from "../data/contribution";

import { Contribution } from "../types/contribution";

const useContributions = (userId: string) => {
    const [contributions, setContributions] = useState<Contribution[]>([]);

    useEffect(() => {
        setContributions(contributionsData)
    }, [contributions])

    return contributions;
}

export default useContributions;