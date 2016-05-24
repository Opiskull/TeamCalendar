import {User} from "./user"

export enum EventType{
    Holiday,
    CompTime,
    Training,
    Home,
    Sick
}

export class Event{
    constructor(){
        this.toDay = new Date()
        this.fromDay = new Date()
    }
    public description: string;
    public fromDay: Date;
    public toDay: Date;
    public type: EventType;
    public createdBy: User;
    public calendarId: number;
}