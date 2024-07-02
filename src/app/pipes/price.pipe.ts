import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string')
      return `£${parseFloat(value).toFixed(2)}`;
    //Prepend a £ sign
    return `£${value}`;
  }

}
