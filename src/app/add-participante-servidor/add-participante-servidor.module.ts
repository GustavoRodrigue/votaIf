import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddParticipanteServidorPageRoutingModule } from './add-participante-servidor-routing.module';

import { AddParticipanteServidorPage } from './add-participante-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddParticipanteServidorPageRoutingModule
  ],
  declarations: [AddParticipanteServidorPage]
})
export class AddParticipanteServidorPageModule {}
