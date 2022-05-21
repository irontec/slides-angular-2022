import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'trunc'})
export class TruncatePipe implements PipeTransform {
  transform(value: string, chars = 140, separator = '...') {
    if(value.length < chars) {
      return value;
    }
    return `${value.substr(0, value.substr(0, chars - separator.length).lastIndexOf(' '))}${separator}`  
  }
}