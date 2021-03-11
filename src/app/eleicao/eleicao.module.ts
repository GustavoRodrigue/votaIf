import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleicaoPageRoutingModule } from './eleicao-routing.module';

import { EleicaoPage } from './eleicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleicaoPageRoutingModule
  ],
  declarations: [EleicaoPage]
})
export class EleicaoPageModule {}
