import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParticipantePageRoutingModule } from './add-participante-routing.module';

import { AddParticipantePage } from './add-participante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddParticipantePageRoutingModule
  ],
  declarations: [AddParticipantePage]
})
export class AddParticipantePageModule {}
