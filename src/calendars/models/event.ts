export enum EventType{
    Holiday,
    CompTime,
    Training,
    Home,
    Sick
}

export class Event{
    constructor(name: string){
        
    }
    public description: string;
    public fromDay: Date;
    public toDay: Date;
    public type: EventType;
}