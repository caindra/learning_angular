import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],

  exports: [
    //MenuModule,
    ButtonModule,
    CardModule,
    CommonModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
