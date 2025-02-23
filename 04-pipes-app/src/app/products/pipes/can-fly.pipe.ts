import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: false
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Si' | 'No' {
    return value ? 'Si' : 'No';
  }
}