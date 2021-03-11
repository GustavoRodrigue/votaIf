import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUsuarioVotacaoPageRoutingModule } from './add-usuario-votacao-routing.module';

import { AddUsuarioVotacaoPage } from './add-usuario-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUsuarioVotacaoPageRoutingModule
  ],
  declarations: [AddUsuarioVotacaoPage]
})
export class AddUsuarioVotacaoPageModule {}
