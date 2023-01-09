import { useState, useEffect } from 'react';

import { defaultClassData } from '../data/class';

import { Class } from '../types/class';

const useClassData = (classId: string) => {
    const [classData, setClassData] = useState<Class>();

    useEffect(() => {
        setClassData(defaultClassData);
    }, [classId]);

    return classData;
}

export default useClassData;