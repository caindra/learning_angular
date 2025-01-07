import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Mundo</h1>',
})
export class CounterComponent {
  public count = 0;

  increment(value: number): void {
    this.count += value;
  }

}
