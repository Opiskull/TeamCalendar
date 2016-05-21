import {Event, EventType} from "../models/event"
import {bindable, computedFrom} from "aurelia-framework"

export class EventDay {
    @bindable({
        changeHandler: 'eventChanged'
    })
    event: Event;
    style: any;

    constructor() {

    }

    private eventChanged() {
        this.style = this.calcStyle();
    }

    private calcStyle(): any {
        if (this.event.type != undefined) {
            var type = this.event.type;
            switch (type) {
                case EventType.Holiday:
                    return {
                        color: 'green',
                    }
                case EventType.CompTime:
                    return {
                        color: 'blue',
                    }
                case EventType.Training:
                    return {
                        color: 'red',
                    }
                case EventType.Home:
                    return {
                        color: 'orange',
                    }
                case EventType.Sick:
                    return {
                        color: 'black',
                    }
            }
        }
        return {}
    }
}