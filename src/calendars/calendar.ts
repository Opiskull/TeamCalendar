import {User} from "./user"
import {Event} from "./event"

export class Calendar {
    constructor(public title: string, public id: number) {

    }

    public users: User[] = []
    public events: Event[] = []
}