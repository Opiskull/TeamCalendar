import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {inject} from 'aurelia-framework'

import moment = require('moment')

@inject(CalendarService)
export class ScheduleWeek {
    private calendars: Calendar[] = []
    private currentDay: Date = new Date()

    constructor(private calendarService: CalendarService) {
    }

    activate(routeParameters: any) {
        this.calendars = this.calendarService.items;
        if (routeParameters.week) {            
            this.currentDay = moment(routeParameters.week, "YYYYWW").toDate()
        } else {
            this.currentDay = new Date()
        }
    }
}
