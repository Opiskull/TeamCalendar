import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {autoinject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import moment = require('moment')

@autoinject()
export class ScheduleWeek {
    private calendars: Calendar[] = []
    private currentDay: Date = new Date()

    constructor(private calendarService: CalendarService, private router: Router) {
    }

    activate(routeParameters: any) {
        this.calendars = this.calendarService.items;
        if (routeParameters.week) {            
            this.currentDay = moment(routeParameters.week, "YYYYWW").toDate()
        } else {
            this.router.navigateToRoute('scheduleWeek', {month : moment(new Date()).format("YYYYWW") })
        }
    }
}
