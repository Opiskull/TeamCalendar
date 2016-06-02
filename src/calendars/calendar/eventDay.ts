import {Event, EventType} from "../models/event"
import {bindable, computedFrom} from "aurelia-framework"

export class EventDay {
    @bindable({
        changeHandler: 'eventChanged'
    })
    event: Event;
    class : string;

    constructor() {

    }

    private eventChanged() {
        this.class = this.getClasses();
    }

    private getClasses(): string {
        if (this.event.type != undefined) {
            var type = this.event.type;
            switch (type) {
                case EventType.Holiday:
                    return 'holiday'
                case EventType.CompTime:
                    return 'comptime'
                case EventType.Training:
                    return 'training'
                case EventType.Home:
                    return 'home'
                case EventType.Sick:
                    return 'sick'
            }
        }
        return ''
    }
    
    private getShortName(){
        if (this.event.type != undefined) {
            var type = this.event.type;
            switch (type) {
                case EventType.Holiday:
                    return 'h'
                case EventType.CompTime:
                    return 'c'
                case EventType.Training:
                    return 't'
                case EventType.Home:
                    return 'h'
                case EventType.Sick:
                    return 's'
            }
        }
        return ''
    }
}