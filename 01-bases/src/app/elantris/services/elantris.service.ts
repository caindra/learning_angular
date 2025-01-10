import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// providedIn: 'root' means that the service is available to the entire application
// singleton service (one instance of the service for the entire application)
@Injectable({providedIn: 'root'})
export class ElantrisService {
  constructor() { }

  title = 'Elantris';
  subtitle = 'The city of the gods';
  description = 'Elantris is a city of splendor and magic. The city used to be the home of the gods, but now it\'s a city of the damned.';

  public characters: Character[] = [
    {
      name: 'Raoden',
      description: 'The prince of Arelon, who becomes the new Elantrian'
    },
    {
      name: 'Sarene',
      description: 'The princess of Teod, who is betrothed to Raoden'
    },
    {
      name: 'Hrathen',
      description: 'A high priest of Shu-Dereth, who is sent to convert Arelon'
    },
    {
      name: 'Galladon',
      description: 'A merchant'
    }
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
    //this.characters.unshift(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index);
  }
}
