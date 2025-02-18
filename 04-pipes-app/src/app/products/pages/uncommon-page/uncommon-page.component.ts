import { Component } from '@angular/core';

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

  public clients: string[] = ['Caindra', 'Kageyama', 'Hinata', 'Tsukishima'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeClient(): void {
    this.name = 'Tobio Kageyama';
    this.gender = 'male';
  }

  deleteClient(): void {
    this.clients.shift();
  }
}
