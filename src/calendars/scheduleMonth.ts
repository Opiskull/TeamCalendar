import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {inject} from 'aurelia-framework'

import moment = require('moment')

@inject(CalendarService)
export class ScheduleMonth {
    private calendars: Calendar[] = []
    private currentDay: Date

    constructor(private calendarService: CalendarService) {
        
    }

    activate(routeParameters: any) {
        this.calendars = this.calendarService.items;
        if(routeParameters.month){            
            this.currentDay = moment(routeParameters.month,"YYYYMM").toDate()
        } else {
            this.currentDay  = new Date()
        }
    }
}
