import {Event, EventType} from "../models/event"
import {EventsService} from "../services/events"


import {autoinject} from 'aurelia-framework';

@autoinject
export class NewEvent{
    private event: Event = new Event()
    private eventTypes: string[]    
    
    constructor(private eventsService: EventsService){
        this.eventTypes = [];
        for(var e in EventType){
            if(parseInt(e,10) >= 0)
                this.eventTypes.push(EventType[e]);
        }
    }
    
    private save(){
        this.eventsService.addEvent(this.event).then(result => this.event = new Event());
    }
}