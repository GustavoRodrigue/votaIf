import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantePageRoutingModule } from './participante-routing.module';

import { ParticipantePage } from './participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantePageRoutingModule
  ],
  declarations: [ParticipantePage]
})
export class ParticipantePageModule {}
