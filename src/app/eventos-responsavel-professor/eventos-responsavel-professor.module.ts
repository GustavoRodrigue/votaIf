import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosResponsavelProfessorPageRoutingModule } from './eventos-responsavel-professor-routing.module';

import { EventosResponsavelProfessorPage } from './eventos-responsavel-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosResponsavelProfessorPageRoutingModule
  ],
  declarations: [EventosResponsavelProfessorPage]
})
export class EventosResponsavelProfessorPageModule {}
