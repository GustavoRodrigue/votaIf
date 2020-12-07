import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarVotacaoPageRoutingModule } from './mostrar-votacao-routing.module';

import { MostrarVotacaoPage } from './mostrar-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarVotacaoPageRoutingModule
  ],
  declarations: [MostrarVotacaoPage]
})
export class MostrarVotacaoPageModule {}
