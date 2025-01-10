import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {

  //<Character> was a generic type of data
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    description: ''
  };

  emitCharacter(): void {
    //this is used to debug the code, it will stop the code execution and open the browser's debugger
    //It is useful to check the value of variables and objects at a certain point in the code
    //debugger;
    console.log(this.character);

    if(this.character.name.length === 0) return;

    // Emit a copy of the 'character' object to avoid shared reference issues when adding it to the list.
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.description = '';
  }
}
