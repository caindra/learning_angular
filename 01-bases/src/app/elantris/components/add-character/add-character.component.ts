import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    description: ''
  };

  emitCharacter(): void {
    console.log(this.character);
  }
}
