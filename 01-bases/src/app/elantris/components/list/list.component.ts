import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { first } from 'rxjs';

@Component({
  selector: 'app-elantris-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @ Input()
  public characterList: Character[] = [];

  //first, the index of the character is prepared to be emitted, creating a new event
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //then, the index is emitted with this new event
  onDeleteCharacter( id?: string ): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
