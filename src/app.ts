import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'schedule/month', name: 'scheduleMonth', moduleId: 'calendars/scheduleMonth', nav: true, title: 'Schedule Month' },
      { route: 'schedule/week', name: 'scheduleWeek', moduleId: 'calendars/scheduleWeek', nav: true, title: 'Schedule Week' },
      { route: 'calendars', name: 'calendarsList', moduleId: 'calendars/list', nav: true, title: 'Calendars List' },
      { route: 'calendars/:id', name: 'calendarView', moduleId: 'calendarView', title: 'Calendar' }
    ]);

    this.router = router;
  }
}
