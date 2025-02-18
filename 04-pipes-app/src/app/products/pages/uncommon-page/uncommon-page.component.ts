import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  
  //i18nSelect
  public name: string = 'Caindra';
  public gender: 'male'|'female'|'other' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'other': 'invitarle'
  }

  changeClient(): void {
    this.name = 'Tobio Kageyama';
    this.gender = 'male';
  }

  //i18nPlural
  public clients: string[] = ['Caindra', 'Kageyama', 'Hinata', 'Tsukishima'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Caindra',
    age: 250,
    address: 'Neverland'
  }

  //Async Pipe
  public myObservableTimer = interval(1000)
    .pipe(
      tap(value => console.log('tap: ', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
      this.person.name = 'Tobio Kageyama';
    }, 3500);
  });

}
