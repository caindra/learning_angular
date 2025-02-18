import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  standalone: false,
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    { name: 'Spider-Man', canFly: false, color: Color.red },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Capitán América', canFly: false, color: Color.blue },
    { name: 'Thor', canFly: true, color: Color.red },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Doctor Strange', canFly: true, color: Color.blue },
    { name: 'Black Panther', canFly: false, color: Color.black },
    { name: 'Ant-Man', canFly: true, color: Color.red },
    { name: 'Wolverine', canFly: false, color: Color.yellow },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Deadpool', canFly: false, color: Color.red },
    { name: 'Ojo de Halcón', canFly: false, color: Color.purple },
    { name: 'Silver Surfer', canFly: true, color: Color.white },
    { name: 'Nova', canFly: true, color: Color.yellow },
    { name: 'Shang-Chi', canFly: false, color: Color.red },
    { name: 'Cíclope', canFly: false, color: Color.blue },
    { name: 'Mr. Fantástico', canFly: false, color: Color.blue },
    { name: 'La Antorcha Humana', canFly: true, color: Color.red },
    { name: 'El Hombre de Hielo', canFly: false, color: Color.blue },
    { name: 'Coloso', canFly: false, color: Color.white },

    { name: 'Viuda Negra', canFly: false, color: Color.black },
    { name: 'Capitana Marvel', canFly: true, color: Color.yellow },
    { name: 'Bruja Escarlata', canFly: true, color: Color.red },
    { name: 'Tormenta', canFly: true, color: Color.white },
    { name: 'Jean Grey', canFly: true, color: Color.red },
    { name: 'She-Hulk', canFly: false, color: Color.green },
    { name: 'Spider-Woman', canFly: true, color: Color.red },
    { name: 'Ms. Marvel', canFly: true, color: Color.yellow },
    { name: 'Gata Negra', canFly: false, color: Color.black },
    { name: 'Hulka Roja', canFly: false, color: Color.red },
    { name: 'Avispa', canFly: true, color: Color.yellow },
    { name: 'Medusa', canFly: false, color: Color.red },
    { name: 'Dagger', canFly: false, color: Color.white },
    { name: 'Psylocke', canFly: false, color: Color.blue },
    { name: 'Gamora', canFly: false, color: Color.green },
    { name: 'Mística', canFly: false, color: Color.blue },
    { name: 'X-23', canFly: false, color: Color.yellow },
    { name: 'Kitty Pryde', canFly: false, color: Color.blue },
    { name: 'Echo', canFly: false, color: Color.black },
    { name: 'Sif', canFly: true, color: Color.red }
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }
}
