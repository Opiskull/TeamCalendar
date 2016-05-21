import {Calendar} from "./models/calendar"
import {CalendarService} from "./services/calendars"
import {inject} from 'aurelia-framework'

@inject(CalendarService)
export class ScheduleWeek {
    private calendars: Calendar[] = []
    private currentDay: Date = new Date()

    constructor(private calendarService: CalendarService) {
        this.calendars = this.calendarService.getAll();
    }

    activate() {
        
    }
}
