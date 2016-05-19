import moment = require("moment")

export class DateFormatValueConverter {
  toView(value, format: string) {    
    if(!format){
      format = 'YYYYMMDD'
    }
    return moment(value).format(format);
  }
}