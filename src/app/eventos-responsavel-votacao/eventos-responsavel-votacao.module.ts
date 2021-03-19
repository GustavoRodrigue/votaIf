import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosResponsavelVotacaoPageRoutingModule } from './eventos-responsavel-votacao-routing.module';

import { EventosResponsavelVotacaoPage } from './eventos-responsavel-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosResponsavelVotacaoPageRoutingModule
  ],
  declarations: [EventosResponsavelVotacaoPage]
})
export class EventosResponsavelVotacaoPageModule {}
