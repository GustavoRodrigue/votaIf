import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentanteCursoPageRoutingModule } from './eventos-escolher-representante-curso-routing.module';

import { EventosEscolherRepresentanteCursoPage } from './eventos-escolher-representante-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosEscolherRepresentanteCursoPageRoutingModule
  ],
  declarations: [EventosEscolherRepresentanteCursoPage]
})
export class EventosEscolherRepresentanteCursoPageModule {}
