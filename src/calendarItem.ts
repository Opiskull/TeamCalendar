import {Calendar} from "./calendars/models/calendar"
import {Event} from "./calendars/models/event"
import {CalendarService} from "./calendars/services/calendars"
import {EventsService} from "./calendars/services/events"
import {autoinject} from 'aurelia-framework'

@autoinject
export class CalendarView {
    private calendar: Calendar
    private currentDate: Date;
    private currentMonth: Date;
    private nextMonth: Date;
    private previousMonth: Date;
    private events: Event[];

    constructor(private calendarService: CalendarService, private eventsService: EventsService) {
        
    }

    activate(routeParams) {
        this.calendar = this.calendarService.getById(routeParams.id);
        this.events = this.eventsService.findEventsForCalendar(routeParams.id);
    }
}