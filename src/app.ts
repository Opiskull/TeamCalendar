import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'calendars', name: 'calendars', moduleId: 'calendars', nav: true, title: 'Calendars' },
      { route: 'calendars/:id', name: 'calendarView', moduleId: 'calendarView', title: 'Calendar' }
    ]);

    this.router = router;
  }
}
