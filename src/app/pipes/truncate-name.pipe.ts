import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLength = 16, ellipsis: '...'): unknown {
    if (value.length > maxLength) 
      return value.slice(0, maxLength) + ellipsis;
    return value;
  }

}