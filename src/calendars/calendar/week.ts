import moment = require("moment")
import {bindable, inject} from 'aurelia-framework';
import {Calendar} from '../models/calendar';
import {Event} from '../models/event';
import {EventsService} from '../services/events';

@inject(EventsService)
export class Week {
    @bindable public weekNumber: number;
    @bindable({
        changeHandler: 'inputChanged'
    }) public currentDate: Date;
    @bindable({
        changeHandler: 'inputChanged'
    }) public calendars: Calendar[];
    private weekDays: string[] = moment.weekdays()
    private daysOfWeek: Date[]

    constructor(private eventsService: EventsService) {
        
    }

    private isWeekend(day: Date): boolean {
        var weekDay = moment(day).isoWeekday()
        return weekDay == 7 || weekDay == 6
    }

    inputChanged() {
        this.weekNumber = moment(this.currentDate).isoWeek()
        this.daysOfWeek = []
        for (var index = 1; index <= 7; index++) {
            var day = moment(this.currentDate).isoWeekday(index).toDate()
            this.daysOfWeek.push(day)
        }
    }
}