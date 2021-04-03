import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagemVotacaoPageRoutingModule } from './imagem-votacao-routing.module';

import { ImagemVotacaoPage } from './imagem-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagemVotacaoPageRoutingModule
  ],
  declarations: [ImagemVotacaoPage]
})
export class ImagemVotacaoPageModule {}
