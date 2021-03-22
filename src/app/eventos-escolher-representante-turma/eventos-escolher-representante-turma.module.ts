import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosEscolherRepresentanteTurmaPageRoutingModule } from './eventos-escolher-representante-turma-routing.module';

import { EventosEscolherRepresentanteTurmaPage } from './eventos-escolher-representante-turma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosEscolherRepresentanteTurmaPageRoutingModule
  ],
  declarations: [EventosEscolherRepresentanteTurmaPage]
})
export class EventosEscolherRepresentanteTurmaPageModule {}
