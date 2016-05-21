import {bindable, inject} from 'aurelia-framework';
import {Calendar} from '../models/calendar';
import moment = require("moment")
import {Event} from '../models/event';
import {EventsService} from '../services/events';


@inject(EventsService)
export class Month {
    @bindable public currentDate: Date;
    @bindable public calendars: Calendar[];
    
    private daysInMonth: Date[] = []
    
    constructor(private eventsService: EventsService){
    }
    
    private isWeekend(day: Date) : boolean {
        var weekDay = moment(day).isoWeekday()
        return weekDay == 7 || weekDay == 6 
    }   
    
    attached(){        
        var daysInMonth = [];        
        for(var day = 1; day <= moment(this.currentDate).endOf('month').date(); day++){
            var date = moment(this.currentDate).date(day)
            daysInMonth.push(date)
        }
        this.daysInMonth = daysInMonth;
    }
    
}