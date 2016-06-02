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
    }
    public description: string;
    public fromDay: Date;
    public tillDay: Date;
    public type: EventType;
    public createdBy: User;
    public calendarId: number;
}