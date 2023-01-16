import { Timestamp } from "firebase/firestore";

export interface Lesson {
    id: string;
	title: string;
	lengthHours: number;
    dueDate: Date;
	completed: boolean;
    week: number

}

export interface WeeklyLessons {
    weekNumber: number
    lessons: Lesson[]
}

// gonna need to parse this
export interface Goal {
    type: string
    id: string
    title: string 
    location: string | null
    reason: string | null
    dueDate: Date
    completed: boolean
}

export interface LessonData {
    title: string,
    week: number,
    id: string,
    text: string
}

