import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotacaoEncerradaPageRoutingModule } from './votacao-encerrada-routing.module';

import { VotacaoEncerradaPage } from './votacao-encerrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotacaoEncerradaPageRoutingModule
  ],
  declarations: [VotacaoEncerradaPage]
})
export class VotacaoEncerradaPageModule {}
