import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParticipanteProfessorPageRoutingModule } from './add-participante-professor-routing.module';

import { AddParticipanteProfessorPage } from './add-participante-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddParticipanteProfessorPageRoutingModule
  ],
  declarations: [AddParticipanteProfessorPage]
})
export class AddParticipanteProfessorPageModule {}
