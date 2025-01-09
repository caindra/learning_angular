import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-elantris-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @ Input()
  public characterList: Character[] = [
    {
      name: 'Karata',
      description: 'One of the main characters of the book'
    }
  ];
}
