import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extractTime'})
export class ExtractTime implements PipeTransform {
  transform(value: String): String {
    let startIndex, currentTime;

    if(value) {
      startIndex = value.search(/\s/);
      currentTime = value.slice(startIndex);
      return currentTime;
    }
  }
}
