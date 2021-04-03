import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriadorVotacaoPageRoutingModule } from './criador-votacao-routing.module';

import { CriadorVotacaoPage } from './criador-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriadorVotacaoPageRoutingModule
  ],
  declarations: [CriadorVotacaoPage]
})
export class CriadorVotacaoPageModule {}
