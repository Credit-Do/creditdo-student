import { useState, useEffect } from 'react';

import { defaultTeacherData } from '../data/teacher';

import { Teacher } from '../types/user';

const useTeacherData = (teacherId: string) => {
    const [teacherData, setTeacherData] = useState<Teacher>();

    useEffect(() => {
        setTeacherData(defaultTeacherData);
    }, [teacherId]);

    return teacherData
}

export default useTeacherData;