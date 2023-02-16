import { DocumentReference } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/clientApp";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useGrantStudentPermission = () => {

    const [granted, setSubmitted] = useState(false);
    const [granting, setSubmitting] = useState(false);

    // Grants permission to the student to join the class
    const grantPermission = async (classId: string | string[] | undefined, studentId: string | string[] | undefined) => {
        if (granted || granting) return;
        if (!classId || !studentId) return;
        if (classId instanceof Array || studentId instanceof Array) return;
        setSubmitting(true);
        const studentRef: DocumentReference = doc(db, "classes", classId, 'students', studentId);
        const studentData = await getDoc(studentRef);
        if(!studentData.exists() || !studentData.data()) return;
        let data = studentData.data();
        data.joinPermission = true;
        setSubmitted(true);
        setSubmitting(false);
    }

    return {
        granted,
        granting,
        grantPermission,
    };
}

export default useGrantStudentPermission;