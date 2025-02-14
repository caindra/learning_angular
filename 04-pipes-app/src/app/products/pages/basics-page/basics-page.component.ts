import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {
  public nameLower: string = 'nombre';
  public nameUpper: string = 'NOMBRE';
  public fullName: string = 'NomBRe';
}
