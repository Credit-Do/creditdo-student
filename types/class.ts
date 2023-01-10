import { Teacher } from "./user";

export interface Class {
    classId: string;
    time: Date;
    name: string;
    teacherId: Teacher["userId"];
}