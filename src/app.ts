import {Router, RouterConfiguration} from 'aurelia-router'
import {autoinject} from 'aurelia-framework'

import {CalendarService} from './calendars/services/calendars'
import {EventsService} from './calendars/services/events'

@autoinject
export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'TCal';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', title: 'Welcome' },
      { route: ['schedule/month', 'schedule/month/:month'], name: 'scheduleMonth', moduleId: 'calendars/scheduleMonth', nav: true, title: 'Schedule Month', href: "#/schedule/month" },
      { route: ['schedule/week', 'schedule/week/:week'], name: 'scheduleWeek', moduleId: 'calendars/scheduleWeek', nav: true, title: 'Schedule Week', href: "#/schedule/week" },
      { route: 'calendars', name: 'calendarsList', moduleId: 'calendars/list', nav: true, title: 'Calendars List' },
      { route: 'events/new', name: 'eventsNew', moduleId: 'calendars/events/newEvent', nav: true, title: 'New Event' },
      { route: 'calendars/:id', name: 'calendarItem', moduleId: 'calendarItem', title: 'Calendar' }
    ]);    

    this.router = router;
  }
  
  constructor(private calendarService : CalendarService, private eventsService: EventsService){
    
  }
  
  activate(): Promise<any>{    
    return Promise.all([
      this.calendarService.getAll(),
      this.eventsService.getAll()
      ])
  }
}
