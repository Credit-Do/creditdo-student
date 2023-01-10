import { useEffect, useState } from "react";

import chunk from "lodash.chunk";

import { defaultLessonsData } from "../../data/lessons";

import { Lesson } from "../../types/lesson";

const useLessons = (classId: string) => {

    const [lessons, setLessons] = useState<Lesson[]>([]);

    useEffect(() => {
        setLessons(defaultLessonsData)
    }, []);

    const partitionWeeks = () => {
        return chunk(lessons, 3)
    } 

    return {
        lessons,
        partitionedLessons: lessons ? partitionWeeks() : [],
        getLessonData: (lessonId: string) => {},
    }
}

export default useLessons;