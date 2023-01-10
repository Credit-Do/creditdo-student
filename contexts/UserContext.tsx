import React from 'react';

import { Student } from '../types/user';
import { Class } from '../types/class';

import { defaultStudentData } from '../data/student';
import { defaultClassData } from '../data/class';

interface UserContext {
    studentData: Student | null;
    classData: Class | null;
}

const UserContext = React.createContext<UserContext>({
    studentData: null,
    classData: null,
});

export const useUserContext = () => React.useContext(UserContext);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [studentData, setStudentData] = React.useState<Student | null>(null);
    const [classData, setClassData] = React.useState<Class | null>(null);

    const getStudent = async () => {
        setStudentData(defaultStudentData);
    }

    const getClassData = async () => {
        setClassData(defaultClassData);
    }

    React.useEffect(() => {
        getStudent();
    }, [])

    React.useEffect(() => {
        getClassData();
    }, [studentData])

    return (
        <UserContext.Provider 
            value={{ 
                studentData, 
                classData 
            }}
        >
            {children}
        </UserContext.Provider>
    )
}