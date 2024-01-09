import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DawRoutingModule } from './daw-routing.module';
import { DiwComponent } from './diw/diw.component';
import { DwecComponent } from './dwec/dwec.component';
import { DwesComponent } from './dwes/dwes.component';


@NgModule({
  declarations: [
    DiwComponent,
    DwecComponent,
    DwesComponent
  ],
  imports: [
    CommonModule,
    DawRoutingModule
  ]
})
export class DawModule { }
