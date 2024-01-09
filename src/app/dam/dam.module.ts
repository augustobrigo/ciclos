import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamRoutingModule } from './dam-routing.module';
import { DiComponent } from './di/di.component';
import { AdComponent } from './ad/ad.component';
import { PspComponent } from './psp/psp.component';
import { SgeComponent } from './sge/sge.component';


@NgModule({
  declarations: [
    DiComponent,
    AdComponent,
    PspComponent,
    SgeComponent
  ],
  imports: [
    CommonModule,
    DamRoutingModule
  ]
})
export class DamModule { }
