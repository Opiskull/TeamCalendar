import {bindable} from 'aurelia-framework';

export class Month {
    @bindable public currentDate: Date = new Date()
    
    private weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    public firstDay() : Date {
        return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    }

    public lastDay() : Date {
        return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    }
    
    public daysInMonth() : number {
        // +1 because getDate() is zero based
        return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(),0).getDate() +1;
    }
    
    public getWeekDays(): string[]{
        var firstWeekDay = this.firstDay().getDay();        
        var days = [];
        var daysInMonth = this.daysInMonth();
        for (var day = 0; day < daysInMonth; day++) {
            var weekDay = (firstWeekDay + day) % this.weekDays.length;
            days.push(this.weekDays[weekDay]);            
        }
        return days;
    }
}