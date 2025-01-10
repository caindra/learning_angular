import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { ElantrisService } from '../services/elantris.service';

@Component({
  selector: 'app-elantris-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {
  constructor( private elantrisService: ElantrisService ) {  }

  get characters(): Character[] {
    return [...this.elantrisService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.elantrisService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.elantrisService.addCharacter(character);
  }
}
