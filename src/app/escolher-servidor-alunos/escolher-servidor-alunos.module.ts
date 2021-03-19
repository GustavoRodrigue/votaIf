import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherServidorAlunosPageRoutingModule } from './escolher-servidor-alunos-routing.module';

import { EscolherServidorAlunosPage } from './escolher-servidor-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherServidorAlunosPageRoutingModule
  ],
  declarations: [EscolherServidorAlunosPage]
})
export class EscolherServidorAlunosPageModule {}
