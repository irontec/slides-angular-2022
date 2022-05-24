import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'exp'
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent = 1) {
    return Math.pow(value, exponent);
  }
}