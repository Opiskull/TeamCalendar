import {Calendar} from "./calendars/calendar"
import {CalendarService} from "./calendars/service"
import {inject} from 'aurelia-framework'

@inject(CalendarService)
export class Calendars {
    private calendars: Calendar[] = []

    constructor(private calendarService: CalendarService) {

    }

    activate() {
        this.calendars = this.calendarService.getAll();
    }
}
