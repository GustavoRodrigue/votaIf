import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosTituloPageRoutingModule } from './eventos-titulo-routing.module';

import { EventosTituloPage } from './eventos-titulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosTituloPageRoutingModule
  ],
  declarations: [EventosTituloPage]
})
export class EventosTituloPageModule {}
