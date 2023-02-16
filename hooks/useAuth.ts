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

import { doc, DocumentReference, setDoc } from 'firebase/firestore'

import { Student } from './types';

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
    const [Student, userLoading] = useDocumentData<Student>(authObj && doc(db, 'teachers', authObj.uid) as DocumentReference<Student>);

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
        loading: authLoading || userLoading,
        signIn,
        signOut,
        //updateUser
    }
}

export default useAuth;