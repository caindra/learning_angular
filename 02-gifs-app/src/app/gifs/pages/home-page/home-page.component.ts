import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
