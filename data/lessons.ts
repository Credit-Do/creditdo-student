import { Lesson } from "../types/lesson";

export const defaultLessonsData: Lesson[] = [
    {
        lessonId: "1",
        classId: "1",
        subject: "Earn",
        lengthHours: 2,
        completed: true,
        dueDate: new Date("2021-01-01"),
    },
    {
        lessonId: "2",
        classId: "1",
        subject: "Budget",
        lengthHours: 2,
        completed: false,
        dueDate: new Date("2021-01-02"),
    },
    {
        lessonId: "3",
        classId: "1",
        subject: "Goal-Setting",
        lengthHours: 2,
        completed: false,
        dueDate: new Date("2021-01-03"),
    },
    {
        lessonId: "4",
        classId: "1",
        subject: "Spend",
        lengthHours: 2,
        completed: false,
        dueDate: new Date("2021-01-04"),
    },
    {
        lessonId: "5",
        classId: "1",
        subject: "Save",
        lengthHours: 2,
        completed: false,
        dueDate: new Date("2021-01-05"),
    },
    {
        lessonId: "6",
        classId: "1",
        subject: "Work Ethic",
        lengthHours: 2,
        completed: false,
        dueDate: new Date("2021-01-06"),
    }
]