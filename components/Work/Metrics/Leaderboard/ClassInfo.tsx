import React from 'react'
import useTeacherData from '../../../../hooks/teacher/useTeacherData'

import { Class } from '../../../../types/class'

interface Props {
    classData: Class
}

const ClassInfo: React.FC<Props> = ({ classData }) => {

    const teacherData = useTeacherData(classData.teacherId);

    return (
        <div>ClassInfo</div>
    )
}

export default ClassInfo