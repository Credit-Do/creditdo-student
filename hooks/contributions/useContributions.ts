import { useState, useEffect } from "react";

import { contributions as contributionsData } from "../../data/contribution";

import { Contribution } from "../../types/contribution";

const useUserContributions = (userId: string) => {
    const [contributions, setContributions] = useState<Contribution[]>([]);

    useEffect(() => {
        setContributions(contributionsData)
    }, [contributions])

    return contributions;
}

export default useUserContributions;