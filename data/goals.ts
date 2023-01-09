import { Goal } from '../types/goal'

const now = new Date();

export const goals: Goal[] = [
    {
        type: 'event',
        goalId: '1234234123',
        studentId: '1234',
        title: 'Food Drive',
        location: 'School Gym',
        reason: null,
        dueDate: now,
        completed: true
    },
    {
        type: 'event',
        goalId: '12342123',
        studentId: '1234',
        title: 'Book Sorting',
        reason: null,
        location: 'Library',
        dueDate: now,
        completed: false
    },
    {
        type: 'short',
        goalId: '123423434123',
        studentId: '1234',
        title: 'Save $60',
        reason: 'Saving for Books',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'short',
        goalId: '12342334134123',
        studentId: '1234',
        title: 'Save $200',
        reason: 'Saving for Sneakers',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'long',
        goalId: '1234234134134123',
        studentId: '1234',
        title: 'Save $600',
        reason: 'Saving for Phone',
        location: null,
        dueDate: now,
        completed: false
    },
    {
        type: 'long',
        goalId: '12342334343343134123',
        studentId: '1234',
        title: 'Save $2000',
        reason: 'Saving for College',
        location: null,
        dueDate: now,
        completed: false
    }
]