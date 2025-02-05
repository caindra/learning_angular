import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = '04-pipes-app';
  
  constructor(private primengConfig: PrimeNG) {}

  ngOnInit(): void {
    this.primengConfig.ripple.set(true);
  }
}
