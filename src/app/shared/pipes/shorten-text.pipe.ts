import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 95;
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
}
