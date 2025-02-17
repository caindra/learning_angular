import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: false,
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss'
})
export class NumbersPageComponent {
  public totalSells: number = 234863.23;
  public percent: number = 0.4856;
}
