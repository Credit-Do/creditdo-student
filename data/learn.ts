import { Timestamp } from "firebase/firestore";
import { Goal, LessonData } from '../hooks/types'
import { Event } from '../types/event'
const now = new Date();

export const lessonData = [
    {
        weekNumber: 1,
        lessons: [
            {
                id: "12341234123",
                title: "Lesson 1",
                lengthHours: 2,
                dueDate: now,
                completed: true,
                week: 1
            },
            {
                id: "1221343412",
                title: "Lesson 2",
                lengthHours: 1,
                dueDate: now,
                completed: true,
                week: 1
            }
        ]
    },
    {
        weekNumber: 1,
        lessons: [
            {
                id: "12341223",
                title: "Lesson 3",
                lengthHours: 2,
                dueDate: now,
                completed: true,
                week: 2
            },
            {
                id: "122123",
                title: "Lesson 4",
                lengthHours: 1,
                dueDate: now,
                completed: false,
                week: 2
            }
        ]
    }
];

export var eventGData: Goal[] = [
    {
        type: 'event',
        id: '1234234123',
        title: 'Food Drive',
        location: 'School Gym',
        reason: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'event',
        id: '12342123',
        title: 'Book Sorting',
        reason: null,
        location: 'Library',
        dueDate: now,
        completed: false
    },
]

export var shortGData: Goal[] = [
    {
        type: 'short',
        id: '123423434123',
        title: 'Save $60',
        reason: 'books',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'short',
        id: '12342334134123',
        title: 'Save $200',
        reason: 'sneakers',
        location: null,
        dueDate: now,
        completed: false
    },
]

export var longGData: Goal[] = [
    {
        type: 'long',
        id: '1234234134134123',
        title: 'Save $600',
        reason: 'phone',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'long',
        id: '12342334343343134123',
        title: 'Save $2000',
        reason: 'college',
        location: null,
        dueDate: now,
        completed: false
    },
]

export var doneGData: Goal[] = [
    {
        type: 'short',
        id: '1243343134123',
        title: 'Save $10',
        reason: 'snaxs',
        location: null,
        dueDate: now,
        completed: true
    }
]

export const lessonDataInfo: LessonData = {
    week: 1,
    title: 'Week 1 - Budget',
    id: '1234132',
    text: "TEST TEST TEST TEST",
}

export var pastEventData: Event[] = [
    {
        title: 'Food Drive',
        type: 'Supply School Drive',
        month: 'Aug',
        date: "21",
        day: "Sat",
        time: '10:00 AM',
        location: '1234 Main St, New York, NY',
        imageURL: 'https://via.placeholder.com/75'
    },
    {
        title: 'Food Drive',
        type: 'Supply School Drive',
        month: 'Aug',
        date: "21",
        day: "Sat",
        time: '10:00 AM',
        location: '1234 Main St, New York, NY',
        imageURL: 'https://via.placeholder.com/75'
    },
]

export var upcomingEventData: Event[] = [
    {
        title: 'Food Drive',
        type: 'Supply School Drive',
        month: 'Aug',
        date: "21",
        day: "Sat",
        time: '10:00 AM',
        location: '1234 Main St, New York, NY',
        imageURL: 'https://via.placeholder.com/150'
    }
]