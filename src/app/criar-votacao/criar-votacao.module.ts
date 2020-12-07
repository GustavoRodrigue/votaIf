import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarVotacaoPageRoutingModule } from './criar-votacao-routing.module';

import { CriarVotacaoPage } from './criar-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarVotacaoPageRoutingModule
  ],
  declarations: [CriarVotacaoPage]
})
export class CriarVotacaoPageModule {}
