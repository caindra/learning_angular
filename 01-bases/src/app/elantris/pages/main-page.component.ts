import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { ElantrisService } from '../services/elantris.service';

@Component({
  selector: 'app-elantris-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {
  constructor( public elantrisService: ElantrisService ) {
    
  }
}
