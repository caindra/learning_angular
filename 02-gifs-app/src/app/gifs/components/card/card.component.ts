import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required.');
  }

}
