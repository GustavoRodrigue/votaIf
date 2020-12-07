import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVotacaoPageRoutingModule } from './add-votacao-routing.module';

import { AddVotacaoPage } from './add-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVotacaoPageRoutingModule
  ],
  declarations: [AddVotacaoPage]
})
export class AddVotacaoPageModule {}
