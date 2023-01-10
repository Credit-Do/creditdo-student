import { Class } from "./class";

export interface Event {
    eventId: string;
    classId: Class["classId"];
    poundsCollected: number;
    address: string;
    startDate: Date;
    endDate: Date;
    pictureUrl: string;
    title: string;
    type: string;
}