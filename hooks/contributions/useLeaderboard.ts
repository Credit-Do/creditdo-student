import { useState, useEffect } from 'react'
import { defaultClassData } from '../../data/class';
import { defaultMetric } from '../../data/defaultMetric';

import { ClassMetric } from '../../types/classMetric';

const useLeaderboard = () => {
    const [classMetrics, setClassMetrics] = useState<ClassMetric[]>([]);

    useEffect(() => {
        setClassMetrics([
            {
                class: defaultClassData,
                metric: defaultMetric
            }
        ])
    })

    return classMetrics;
}

export default useLeaderboard;