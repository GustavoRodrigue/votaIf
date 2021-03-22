import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentantePageRoutingModule } from './eventos-escolher-representante-routing.module';

import { EventosEscolherRepresentantePage } from './eventos-escolher-representante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosEscolherRepresentantePageRoutingModule
  ],
  declarations: [EventosEscolherRepresentantePage]
})
export class EventosEscolherRepresentantePageModule {}
