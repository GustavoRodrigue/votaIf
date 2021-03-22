import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosResponsavelServidorPageRoutingModule } from './eventos-responsavel-servidor-routing.module';

import { EventosResponsavelServidorPage } from './eventos-responsavel-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosResponsavelServidorPageRoutingModule
  ],
  declarations: [EventosResponsavelServidorPage]
})
export class EventosResponsavelServidorPageModule {}
