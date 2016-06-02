import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import moment = require('moment')

@inject(CalendarService,Router)
export class ScheduleMonth {
    private calendars: Calendar[] = []
    private currentDay: Date
    private previousMonth: String
    private nextMonth: String

    constructor(private calendarService: CalendarService, private router: Router) {
        
    }

    activate(routeParameters: any) {
        this.calendars = this.calendarService.items;
        if(routeParameters.month){
            this.currentDay = moment(routeParameters.month,"YYYYMM").toDate()
            this.previousMonth = moment(this.currentDay).subtract(1,'months').date(1).format("YYYYMM") 
            this.nextMonth = moment(this.currentDay).add(1,'months').date(1).format("YYYYMM")
        } else {
            this.router.navigateToRoute('scheduleMonth', {month : moment(new Date()).format("YYYYMM") })
        }
    }
}
