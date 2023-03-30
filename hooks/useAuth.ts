import { auth, db } from '../firebase/clientApp';

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut as authSignOut,
    updateEmail,
    User
} from 'firebase/auth';

import { 
    useAuthState,
} from 'react-firebase-hooks/auth';

import {
    useDocumentData
} from 'react-firebase-hooks/firestore';

import { doc, DocumentReference, setDoc, query, collection, where, getDocs } from 'firebase/firestore'

import { Student } from './types';
import { useEffect, useState } from 'react';

interface ReturnType {
    auth: User | null | undefined;
    user: Student | null | undefined;
    loading: boolean,
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    //updateUser: (student: Student) => Promise<void>;
}

const init : ReturnType = {
    auth: null,
    user: null,
    loading: true,
    signIn: async (email: string, password: string) => {},
    signOut: async () => {},
    //updateUser: async (student: Student) => {}
}

const useAuth = () : ReturnType => {

    const [authObj, authLoading] = useAuthState(auth);
    const q = query(collection(db, 'students'), where("parentEmail", "==", authObj?.email ? authObj.email : ''));
    const [ Student, setStudent ] = useState<Student | null>(null);
    useEffect(() => {
        const func = async () => {
            if (!authObj) return;
            const querySnapshot = await getDocs(q);
            const data: Student = {
                id: querySnapshot.docs[0].id,
                firstName: querySnapshot.docs[0].data().firstName,
                parentEmail: querySnapshot.docs[0].data().parentEmail,
                lastName: querySnapshot.docs[0].data().lastName,
                classId: querySnapshot.docs[0].data().classId,
                personalGoals: querySnapshot.docs[0].data().personalGoals,
                completedLessons: querySnapshot.docs[0].data().completedLessons,
            }
            setStudent(data)
        }
        func();
    }, [authObj])

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = async () => {
        await authSignOut(auth);
    }
    
/* Need someone to write this function
    const updateUser = async (Student: Student) => {
        if(Student.email !== authObj.email) {
            await updateEmail(authObj, Student.email);
        }
        await setDoc(doc(db, 'teachers', authObj.uid), Student);
    }
*/

    return {
        auth: authObj,
        user: Student,
        loading: authLoading,
        signIn,
        signOut,
        //updateUser
    }
}

export default useAuth;