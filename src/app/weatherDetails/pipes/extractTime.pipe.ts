import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'extractTime'})
export class ExtractTime implements PipeTransform {
  transform(value: string): string {
    let startIndex: number, currentTime: string;

    if(value) {
      startIndex = value.search(/\s/);
      currentTime = value.slice(startIndex);
      return currentTime;
    }
  }
}
