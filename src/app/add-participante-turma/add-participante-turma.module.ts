import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParticipanteTurmaPageRoutingModule } from './add-participante-turma-routing.module';

import { AddParticipanteTurmaPage } from './add-participante-turma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddParticipanteTurmaPageRoutingModule
  ],
  declarations: [AddParticipanteTurmaPage]
})
export class AddParticipanteTurmaPageModule {}
