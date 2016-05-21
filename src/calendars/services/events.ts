import {Calendar} from '../models/calendar';
import {Event} from '../models/event';
import moment = require("moment")

export class EventsService {
    
    
    public getEventsOnDay(calendar: Calendar, day: Date) : Event[]{
        if(calendar.events){
            return calendar.events.filter((evt) => { 
            return moment(day).isBetween(evt.fromDay,evt.toDay,'day',"[)"); 
        });
        }
        return []
    }

    public isEventOnDay(calendar: Calendar, day: Date) : boolean{
        var events = this.getEventsOnDay(calendar,day);
        if(events.length > 0){
            return true;
        }        
        return false
    }
}