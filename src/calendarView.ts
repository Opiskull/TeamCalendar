import {Calendar} from "./calendars/calendar"
import {CalendarService} from "./calendars/service"
import {inject} from 'aurelia-framework'

@inject(CalendarService)
export class CalendarView {
    private calendar: Calendar

    constructor(private calendarService: CalendarService) {
    }

    activate(routeParams) {
        this.calendar = this.calendarService.getById(routeParams.id);
    }
}