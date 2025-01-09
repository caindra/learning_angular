import { Component } from '@angular/core';

@Component({
  selector: 'app-elantris-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {
  title = 'Elantris';
  subtitle = 'The city of the gods';
  description = 'Elantris is a city of splendor and magic. The city used to be the home of the gods, but now it\'s a city of the damned.';

}
