import {Calendar} from "./calendars/models/calendar"
import {CalendarService} from "./calendars/services/calendars"
import {inject} from 'aurelia-framework'

@inject(CalendarService)
export class CalendarView {
    private calendar: Calendar
    private currentDate: Date;
    private currentMonth: Date;
    private nextMonth: Date;
    private previousMonth: Date;

    constructor(private calendarService: CalendarService) {
    }

    activate(routeParams) {
        this.calendar = this.calendarService.getById(routeParams.id);
    }
}