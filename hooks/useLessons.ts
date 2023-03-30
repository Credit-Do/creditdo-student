import { db } from "../firebase/clientApp";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, CollectionReference, doc, updateDoc } from "firebase/firestore";

import { Lesson } from "./types";
import { title } from "process";


const useLessons = (classId : string, studentId: string) => {

    // const [lessons, loading, error] = useCollectionData<Lesson>(collection(db, "classes", classId, "lessons") as CollectionReference<Lesson>);
    // const [ completedLessons, loading, error] = useCollectionData<Lesson>(collection(db, "classes", classId, "students",studentId, "completedLessons") as CollectionReference<Lesson>);

    // const getLessonData = (lessonId: string) => {
    //     return lessons;
    // }

    // const partitionWeeks = (lessons: Lesson[]) => {
    //     const weeklyLessons: Lesson[][] = [[], []];
    //     lessons.forEach((element: Lesson) => {
    //         if (element.week == 1){
    //             weeklyLessons[0].push(element);
    //         }
    //         else{
    //             weeklyLessons[1].push(element);
    //         }
    //     });
    //     return weeklyLessons;
    // } 

    // return {
    //     //lessons: partitionWeeks(lessons || []),
    //     getLessonData: (lessonId: string) => {},
    //     //loading
    // }
}

export default useLessons;