import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined = [];

  ngOnInit() {
      this.menuItems = [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Search', icon: 'pi pi-search' }
      ];
  }
}
