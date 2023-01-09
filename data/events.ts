import { Event } from "../types/event";

export const events: Event[] = [
    {
        eventId: "1",
        classId: "1",
        poundsCollected: 100,
        address: "123 Fake Street",
        startDate: new Date(),
        endDate: new Date(),
        pictureUrl: "https://picsum.photos/200",
        title: "Event 1",
        type: "School Supply Drive"
    },
    {
        eventId: "2",
        classId: "1",
        poundsCollected: 200,
        address: "123 Fake Street",
        startDate: new Date(),
        endDate: new Date(),
        pictureUrl: "https://picsum.photos/200",
        title: "Event 2",
        type: "School Supply Drive"
    },
    {
        eventId: "3",
        classId: "1",
        poundsCollected: 300,
        address: "123 Fake Street",
        startDate: new Date(),
        endDate: new Date(),
        pictureUrl: "https://picsum.photos/200",
        title: "Event 3",
        type: "School Supply Drive"
    }
]