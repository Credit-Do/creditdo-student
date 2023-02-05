import {db} from '../firebase/clientApp';
import {addDoc, collection, doc, updateDoc} from 'firebase/firestore';
export interface GoalInput {
    id: string,
    description: string,
    type: string,
    completed: boolean,
    dueDate: Date,
}

export const createGoals = async (studentid: string, goalInput: GoalInput) => {
    const goalDoc = await addDoc(collection(db, 'studentid', studentid, 'personalGoals'), goalInput);
    await updateDoc(doc(db, 'studentid', studentid, 'personalGoals', goalDoc.id), {
        id: goalDoc.id
    });
}