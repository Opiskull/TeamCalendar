import {Router, RouterConfiguration} from 'aurelia-router'
import {autoinject} from 'aurelia-framework'

import {CalendarService} from './calendars/services/calendars'

@autoinject
export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: ['schedule/month', 'schedule/month/:month'], name: 'scheduleMonth', moduleId: 'calendars/scheduleMonth', nav: true, title: 'Schedule Month', href: "#/schedule/month" },
      { route: ['schedule/week', 'schedule/week/:week'], name: 'scheduleWeek', moduleId: 'calendars/scheduleWeek', nav: true, title: 'Schedule Week', href: "#/schedule/week" },
      { route: 'calendars', name: 'calendarsList', moduleId: 'calendars/list', nav: true, title: 'Calendars List' },
      { route: 'calendars/:id', name: 'calendarView', moduleId: 'calendarView', title: 'Calendar' }
    ]);

    this.router = router;
  }
  
  constructor(private calendarService : CalendarService){
    
  }
  
  activate(): Promise<any>{
    return this.calendarService.getAll()
  }
}
