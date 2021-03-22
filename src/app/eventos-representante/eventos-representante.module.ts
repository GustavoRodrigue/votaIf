import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosRepresentantePageRoutingModule } from './eventos-representante-routing.module';

import { EventosRepresentantePage } from './eventos-representante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosRepresentantePageRoutingModule
  ],
  declarations: [EventosRepresentantePage]
})
export class EventosRepresentantePageModule {}
