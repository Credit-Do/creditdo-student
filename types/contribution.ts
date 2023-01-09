import { Class } from "./class";
import { Student } from "./user";

export interface Contribution {
    contributionId: string;
    classId: Class["classId"];
    studentId: Student["userId"];
    hours: number;
    pounds: number;
}