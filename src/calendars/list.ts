import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {inject} from 'aurelia-framework'

@inject(CalendarService)
export class List {
    private calendars: Calendar[] = []
    private currentDay: Date = new Date()

    constructor(private calendarService: CalendarService) {
    }

    activate() {
        this.calendars = this.calendarService.items;
    }
}