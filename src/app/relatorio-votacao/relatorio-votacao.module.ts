import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioVotacaoPageRoutingModule } from './relatorio-votacao-routing.module';

import { RelatorioVotacaoPage } from './relatorio-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatorioVotacaoPageRoutingModule
  ],
  declarations: [RelatorioVotacaoPage]
})
export class RelatorioVotacaoPageModule {}
