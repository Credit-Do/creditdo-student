import { useState } from "react";

import { Lesson } from "../types/lesson";

const useSelectLesson = () => {
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const selectLesson = (lesson: Lesson) => {
        setSelectedLesson(lesson);
    }

    const onDownload = () => {

    }

    const onMore = () => {

    }

    return {
        selectedLesson,
        selectLesson,
        onDownload,
        onMore
    }
}

export default useSelectLesson;