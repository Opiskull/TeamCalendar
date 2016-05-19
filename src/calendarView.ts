import {Calendar} from "./calendars/calendar"
import {CalendarService} from "./calendars/service"
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
        this.setCurrentDate(new Date());
    }
    
    public setCurrentDate(currentDate: Date){
        this.currentDate = currentDate;
        this.currentMonth = this.calcCurrentMont();
        this.nextMonth = this.calcNextMonth()
        this.previousMonth = this.calcPreviousMonth()
    }
    
    private calcCurrentMont(): Date {
        var date = new Date(this.currentDate.toISOString());
        date.setDate(1);
        return date;
    }

    private calcPreviousMonth(): Date {
        var date = new Date(this.currentDate.toISOString());
        date.setDate(1);
        date.setMonth(date.getMonth() - 1)
        return date;
    }

    private calcNextMonth(): Date {
        var date = new Date(this.currentDate.toISOString());
        date.setDate(1);
        date.setMonth(date.getMonth() + 1)
        return date;
    }
}