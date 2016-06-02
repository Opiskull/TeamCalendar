import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {autoinject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import moment = require('moment')


const WEEKFORMAT = "YYYYWW";

@autoinject()
export class ScheduleWeek {
    private calendars: Calendar[] = []
    private currentDay: Date = new Date()
    private previousWeek: String
    private nextWeek: String

    constructor(private calendarService: CalendarService, private router: Router) {
    }

    activate(routeParameters: any) {
        this.calendars = this.calendarService.items;
        if (routeParameters.week) {            
            this.currentDay = moment(routeParameters.week, WEEKFORMAT).toDate()
            this.nextWeek = moment(this.currentDay).add(1, 'weeks').format(WEEKFORMAT)
            this.previousWeek = moment(this.currentDay).subtract(1, 'weeks').format(WEEKFORMAT)
        } else {
            this.router.navigateToRoute('scheduleWeek', {week : moment(new Date()).format(WEEKFORMAT) })
        }
    }
}
