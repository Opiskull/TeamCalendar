import {Calendar} from "../models/calendar"
import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

import 'fetch'

@inject(HttpClient)
export class CalendarService {
    public items: Calendar[] = []

    constructor(private httpClient: HttpClient){        
    }

    public getById(id: number) : Calendar {
        return this.items.find((val) => val.id == id);
    }
    
    public getAll(): Promise<Calendar>{
        return this.httpClient.fetch('/data/calendars.json')
            .then(response => response.json())
            .then(data => this.items = data);
    }
}