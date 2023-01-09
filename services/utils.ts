import { Student, Teacher } from '../types/user';

export const formatStudentName = (studentData: Student) => {
    return `${studentData.firstName} ${studentData.lastInitial}.`;
}

export const formatTeacherName = (teacherData: Teacher) => {
    return `${teacherData.prefix} ${teacherData.lastName}`
}
