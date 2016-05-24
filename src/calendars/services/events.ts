import {Event} from '../models/event';
import moment = require("moment")


import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

import 'fetch'

@inject(HttpClient)
export class EventsService {
    private events: Event[]

    constructor(private httpClient: HttpClient) {

    }

    public getAll(): Promise<Event[]> {
        return this.httpClient.fetch('/data/events.json')
            .then(response => response.json())
            .then(data => this.events = data);
    }

    public findEventsFromCalendarOnDay(calendarId: number, day: Date): Event[] {
        return this.events.filter((evt) => {
            return evt.calendarId == calendarId && this.isEventOnDay(evt, day);
        });
    }

    private isEventOnDay(event: Event, day: Date): boolean {
        return moment(day).isBetween(event.fromDay, event.toDay, 'day', "[)")
    }

    public hasDayAnEvent(day: Date): boolean {
        return this.events.some((event) => this.isEventOnDay(event, day));
    }

    public addEvent(event: Event): Promise<Event> {
        return new Promise<Event>((resolve) => { 
            this.events.push(event); 
            resolve(event); 
        })
    }
}