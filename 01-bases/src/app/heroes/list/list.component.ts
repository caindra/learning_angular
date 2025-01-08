import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public deletedHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'She-Hulk',
    'Black Widow',
    'Captain America',
    'Black Panther',
    'Doctor Strange',
    'Scarlet Witch',
    'Wolverine',
    'Deadpool',
    'Daredevil',
    'Punisher',
    'Ghost Rider',
    'Blade',
    'Silver Surfer',
    'Loki',
    'Iron Fist',
    'Hawkeye'
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
