import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoVotacaoPageRoutingModule } from './tipo-votacao-routing.module';

import { TipoVotacaoPage } from './tipo-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoVotacaoPageRoutingModule
  ],
  declarations: [TipoVotacaoPage]
})
export class TipoVotacaoPageModule {}
